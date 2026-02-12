/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import {
	IconDental,
	IconBriefcase,
	IconSignature,
	IconBoxAlignRightFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { cn } from "@/lib/utils";
import { doctorData } from "@/lib/data";

export function DoctorBento({ paramName }: { paramName: string }) {
	const doctor = doctorData.find((doc) => doc.slug === paramName);

	if (!doctor) {
		return <div>Doctor not found</div>;
	}

	const items = [
		{
			title: doctor.title,
			description: (
				<span className="text-sm">
					{doctor.titleDesc.substring(0, 100)}
				</span>
			),
			header: <SkeletonThree paramName={paramName} />,
			className: "md:col-span-1",
			icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
		},
		{
			title: "About",
			description: <span className="text-sm">{doctor.description}</span>,
			header: <SkeletonFive doctor={doctor} />,
			className: "md:col-span-2",
			icon: (
				<IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />
			),
		},

		{
			title: "Professional Summary",
			description: (
				<span className="text-sm">
					{doctor.experience}+ years of Experience
				</span>
			),
			header: <SkeletonFour doctor={doctor} />,
			className: "md:col-span-2",
			icon: <IconBriefcase className="h-4 w-4 text-neutral-500" />,
		},
		{
			title: "Specializations",
			description: (
				<span className="text-sm line-clamp-1 text-ellipsis">
					{doctor.servicelist.map((service, index) => (
						<span key={service.type}>
							{service.type}
							{index < doctor.servicelist.length - 1 && (
								<span>, </span>
							)}
						</span>
					))}
				</span>
			),
			header: <SkeletonOne services={doctor.servicelist} />,
			className: "md:col-span-1",
			icon: <IconDental className="h-4 w-4 text-neutral-500" />,
		},
	];

	return (
		<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[28rem] ">
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={cn("[&>p:text-lg]", item.className)}
					icon={item.icon}
				/>
			))}
		</BentoGrid>
	);
}

const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = ({
	services,
}: {
	services: { type: string; services: string[] }[];
}) => {
	const variants = {
		initial: {
			x: 0,
		},
		animate: {
			x: 10,

			transition: {
				duration: 0.2,
			},
		},
	};
	const variantsSecond = {
		initial: {
			x: 0,
		},
		animate: {
			x: -10,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full min-h-[2rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-1 justify-start items-start overflow-y-scroll scrollbar-hide cursor-pointer">
			{services.map((spec, index) => (
				<motion.div
					key={index}
					variants={index % 2 === 0 ? variants : variantsSecond}
					className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black ">
					<img
						src={`/images/logo-light.png`}
						alt="Rarity Dental logo"
						height={24}
						width={24}
						className="rounded-full"
						style={{
							height: "24px",
							width: "24px",
						}}
					/>
					<div className="w-full bg-gray-100 min-h-4 rounded-full dark:bg-neutral-900 ">
						<span className="font-semibold">{spec.type}</span>
						{": "}
						{spec.services.map((service, index) => (
							<span
								key={index}
								className="capitalize">
								{service}
								{index < services.length - 1 && <span>, </span>}
							</span>
						))}
					</div>
				</motion.div>
			))}
		</motion.div>
	);
};
const SkeletonTwo = () => {
	const variants = {
		initial: {
			width: 0,
		},
		animate: {
			width: "100%",
			transition: {
				duration: 0.2,
			},
		},
		hover: {
			width: ["0%", "100%"],
			transition: {
				duration: 2,
			},
		},
	};
	const arr = new Array(6).fill(0);
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
			{arr.map((_, i) => (
				<motion.div
					key={"skelenton-two" + i}
					variants={variants}
					style={{
						maxWidth: Math.random() * (100 - 40) + 40 + "%",
					}}
					className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"></motion.div>
			))}
		</motion.div>
	);
};
const SkeletonThree = ({ paramName }: { paramName: string }) => {
	const variants = {
		initial: {
			backgroundPosition: "0 50%",
		},
		animate: {
			backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
		},
	};

	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={variants}
			transition={{
				duration: 5,
				repeat: Infinity,
				repeatType: "reverse",
			}}
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
			style={{
				background:
					"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
				backgroundSize: "400% 400%",
			}}>
			<motion.div className=" h-[300px] md:h-full w-full rounded-lg relative ">
				<img
					src={`${paramName === "dr-gaurav-malik" ? "/images/dr-gaurav-malik.jpg" : paramName === "dr-manreet-sidhu" ? "/images/dr-manreet-sidhu-op.webp" : "/images/dr-sneha-singh.webp"}`}
					alt={`Portrait of ${paramName === "dr-gaurav-malik" ? "Dr. Gaurav Malik" : paramName === "dr-manreet-sidhu" ? "Dr. Manreet Sidhu" : "Dr. Sneha Singh"} – Rarity Dental Gurgaon`}
					sizes="100%"
					className="object-cover absolute inset-0 w-full h-full md:scale-[80%] rounded-lg"
					loading="lazy"
				/>
			</motion.div>
		</motion.div>
	);
};
const SkeletonFour = ({ doctor }: { doctor: (typeof doctorData)[0] }) => {
	const first = {
		initial: {
			x: 15,
			rotate: -6,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	const second = {
		initial: {
			x: -15,
			rotate: 6,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="flex flex-1 w-full h-full min-h-[14rem] md:min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 justify-center">
			{doctor.degree.map((deg, index) => (
				<motion.div
					key={index}
					variants={
						index === 0
							? first
							: index === 1
								? {}
								: index === 2
									? second
									: {}
					}
					className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-end relative">
					<div className="absolute top-0 left-0 w-full h-[40%] md:h-[60%]">
						<img
							src={deg.degImg}
							alt={
								deg.title === "Oral Surgeon & Implantologist"
									? "Photo by Olga Guryanova"
									: deg.title
							}
							fetchPriority="high"
							sizes="100%"
							className="object-cover absolute inset-0 w-full h-full rounded-t-2xl"
						/>
					</div>

					<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
						{deg.title}
					</p>
					<p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
						{index === 0
							? "Experienced"
							: index === 1
								? "Skilled"
								: "Expert"}
					</p>
				</motion.div>
			))}
		</motion.div>
	);
};

const SkeletonFive = ({ doctor }: { doctor: (typeof doctorData)[0] }) => {
	const variants = {
		initial: {
			x: 0,
		},
		animate: {
			x: 10,
			rotate: 5,
			transition: {
				duration: 0.2,
			},
		},
	};
	const variantsSecond = {
		initial: {
			x: 0,
		},
		animate: {
			x: -10,
			rotate: -5,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-1 overflow-scroll scrollbar-hide cursor-pointer snap-center">
			{doctor.detailDesc.map((desc, index) => (
				<motion.div
					key={index}
					// variants={variants}
					className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black">
					{index === 0 && (
						<img
							src={doctor.image}
							alt={`${doctor.title} profile photo`}
							height="100"
							width="100"
							className="rounded-full h-10 w-10 object-cover"
						/>
					)}
					<div className="w-full bg-gray-100 min-h-4 rounded-full dark:bg-neutral-900">
						{desc}
					</div>
				</motion.div>
			))}
		</motion.div>
	);
};
