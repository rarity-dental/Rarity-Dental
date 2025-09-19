/* eslint-disable @next/next/no-img-element */

import React from "react";

interface StepBlockProps {
	icon: string;
	title: string;
	pointers: string[];
	image: string;
	reverse: boolean;
}

const StepBlock = ({
	icon,
	title,
	pointers,
	image,
	reverse = false,
}: StepBlockProps) => {
	return (
		<div
			className={`w-full h-full flex flex-col ${reverse ? "md:flex-row" : "md:flex-row-reverse"} justify-center items-center`}>
			<div className=" md:hidden aspect-square w-full md:w-1/2 h-full relative border-[3px] border-copyColor ">
				{image && (
					<img
						src={image}
						alt={title}
						fetchPriority="high"
						className="object-cover absolute inset-0 w-full h-full"

						// sizes=""
					/>
				)}
			</div>
			<div className="flex flex-col justify-center items-center w-full  md:w-1/2 pt-2 md:pt-0 pb-8 md:pb-0">
				{icon && (
					<img
						src={icon}
						alt={title}
						width={100}
						height={100}
						className="w-24 h-24 object-contain"
					/>
				)}
				<div className="flex flex-col">
					<h3
						className={`${reverse ? "md:px-8" : "md:px-12"} text-left text-2xl md:text-4xl text-copyColor font-bold pt-4 `}>
						{title}
					</h3>
					<ul
						className={`${reverse ? "md:pr-8" : "md:pl-8"} flex flex-col gap-2 mt-4 `}>
						{pointers.map((pointer, index) => (
							<li
								key={index}
								className="flex gap-2 items-start">
								<img
									src="/images/check-icon.png"
									alt="check-icon"
									width={20}
									height={20}
									className="w-6 h-6 object-contain pt-1.5"
								/>
								<p className="text-lg font-light mb-2">
									{pointer}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="hidden md:block aspect-square w-full md:w-1/2 h-full relative border-[3px] border-copyColor ">
				{image && (
					<img
						src={image}
						alt={title}
						fetchPriority="high"
						className="object-cover absolute inset-0 w-full h-full"

						// sizes=""
					/>
				)}
			</div>
		</div>
	);
};

export default StepBlock;
