// TechCard.tsx
import React from "react";
import { motion } from "framer-motion";

interface TechCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	isSelected: boolean;
}

export const TechCard: React.FC<TechCardProps> = ({
	icon,
	title,
	description,
	isSelected,
}) => {
	return (
		<motion.div
			className={`
        max-w-[342px] lg:max-w-[308px] h-[360px] md:h-[423px]
        ${isSelected ? "bg-[#64503C]" : "bg-white"}
        mx-auto xl:mx-0
        flex flex-col items-center
        py-[42px] md:py-20 px-6
        transition-colors duration-500 ease-in-out
      `}
		>
			<div
				className={`mb-6 md:mb-8 transition-colors duration-500 ease-in-out ${
					isSelected ? "text-white" : "text-[#64503C]"
				}`}
			>
				{icon}
			</div>
			<h3
				className={`text-2xl font-semibold mb-4 text-center transition-colors duration-500 ease-in-out tracking-tighter ${
					isSelected ? "text-white" : "text-[#64503C]"
				}`}
			>
				{title}
			</h3>
			<p
				className={`text-sm md:text-base text-center font-poppins font-normal transition-colors duration-500 ease-in-out ${
					isSelected ? "text-white" : "text-[#1f0f11]"
				}`}
			>
				{description}
			</p>
		</motion.div>
	);
};
