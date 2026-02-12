/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

import { Button } from "./button";
import { useIsMobile } from "@/hooks/useIsMobile";
import Link from "next/link";
import { doctorData } from "@/lib/data";
import { InfoIcon } from "lucide-react";

interface CardProps {
	id?: string;
	slug?: string;
	image: string;
	alt?: string;
	imageHeight: number;
	hasOverlay?: boolean;
	title: string;
	degree?: { degImg: string; title: string }[];
	experience?: number;
	description?: string;
	descriptionHover?: string;
	descriptionCard?: string;
	descriptionDoc?: string;
	hasButton?: boolean;
	buttonText?: string;
	buttonLink?: string;
	className?: string;
	isOverlayVisible?: boolean; // New prop
	handleClick?: () => void; // New prop
	textColor?: string;
}

export const Card = ({
	slug,
	image,
	imageHeight,
	hasOverlay,
	title,
	alt,
	degree,
	experience,
	description,
	descriptionDoc,
	descriptionHover,
	descriptionCard,
	hasButton,
	buttonText,
	buttonLink,
	className,
	isOverlayVisible,
	handleClick,
	textColor,
}: CardProps) => {
	const isMobile = useIsMobile();
	const [isHovered, setIsHovered] = useState(false);

	const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
		e.preventDefault();
		if (isMobile && handleClick) {
			handleClick();
		}
	};

	const handleMouseEnter = () => {
		if (!isMobile) {
			setIsHovered(true);
		}
	};

	const handleMouseLeave = () => {
		if (!isMobile) {
			setIsHovered(false);
		}
	};

	const showOverlay = isMobile ? isOverlayVisible : isHovered;

	return (
		<div
			className={`flex flex-col  max-w-[300px] mx-auto md:min-w-[400px] gap-y-[0px] md:gap-y-[0px] ${className} ${degree ? "bg-white" : ""} `}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleInteraction}>
			<div className="relative group overflow-hidden">
				<img
					src={image}
					srcSet={`
    ${image}?w=300 300w,
    ${image}?w=500 500w,
    ${image}?w=750 750w,
    ${image}?w=1000 1000w
  `}
					sizes="(max-width: 600px) 300px, (max-width: 900px) 500px, 750px"
					alt={alt || title}
					width={400}
					height={imageHeight}
					className={`transition-transform duration-300 ease-in-out transform object-cover ${showOverlay ? "scale-105" : ""}`}
					style={{
						width: isMobile ? "300px" : "400px",
						height: isMobile ? "300px" : `${imageHeight}px`,
					}}
				/>

				{hasOverlay && (
					<div
						className={`absolute top-0 left-0 bg-[#73383E] w-full h-full transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center z-0 ${
							showOverlay
								? "opacity-80"
								: "opacity-0 pointer-events-none"
						}`}>
						<p className="text-[20px] text-white text-center text-ellipsis line-clamp-4 px-[10%]">
							{descriptionHover}
						</p>

						<Button variant={"ghost"} className="flex justify-center items-center" asChild>
							<Link
								href={`/team/${slug}`}
								rel="noopener noreferrer"
								onClick={(e) => e.stopPropagation()}
								className={`flex justify-center items-center px-4 py-1.5 bg-white  z-10 mt-[5%] bg-opacity-100 bg-blur-10 transition-all duration-300 ease-in-out gap-x-2 lg:hover:scale-105 lg:hover:bg-opacity-100 lg:hover:shadow-md rounded-md active:scale-95 cursor-pointer `}>
								<InfoIcon size={24} color="#73383E" />
								<span className="text-[18px] text-[#73383E] font-semibold">Know more</span>
							</Link>
						</Button>
					</div>
				)}
			</div>

			<h3
				className={`text-[18px] md:text-[24px] py-1.5 font-semibold text-center ${
					hasOverlay ? "bg-[#73383E]" : ""
				}  `}
				style={{ color: textColor }}>
				{title}
			</h3>
			{description && (
				<p className="text-[18px] text-[#10090a] text-center line-clamp-4 ">
					{description}
				</p>
			)}
			{degree && experience && (
				<div className="py-[10%]">
					<p className="text-lg md:text-xl uppercase font-semibold font-poppins text-[#55292e] text-center tracking-wider pb-2">
						{experience} years of experience
					</p>
					<div className="max-w-[76%] mx-auto md:max-w-[90%] text-[16px] md:text-md text-[#201011] text-center">
						{degree.map((deg, index) => (
							<div key={index}>
								<span>{deg.title} </span>
								{index !== degree.length - 1 && (
									<span className="text-[16px] md:text-[20px] text-[#201011] text-center">
										|{" "}
									</span>
								)}
							</div>
						))}
						<div />

						<p className="max-w-[80%] mx-auto md:max-w-[90%] text-[16px] md:text-md text-center text-[#55292e] mt-2">
							{descriptionCard}
						</p>
					</div>
				</div>
			)}

			{hasButton && (
				<div
					className={`flex justify-center items-end h-full ${degree ? "pt-2 pb-4" : "pt-4"}`}>
					<Button
						asChild
						variant={"outline"}
						className={` bg-transparent min-w-[128px] h-[44px] text-[#73383E] text-[14px] py-2 px-4 border border-[#73383E] rounded-none font-poppins font-semibold hover:bg-[#73383E] hover:text-white hover:border-transparent transition-all duration-300 ease-in-out`}>
						<Link href={"#formDiv"}>{buttonText}</Link>
					</Button>
				</div>
			)}
		</div>
	);
};
