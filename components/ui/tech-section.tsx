/* eslint-disable @next/next/no-img-element */
// TechSection.tsx
import React, { useState, useRef, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { TechCard } from "./tech-card";

interface TechSectionProps {
	techCards: Array<{
		id: number;
		icon: React.ReactNode;
		title: string;
		description: string;
		video: string;
	}>;
}

export const TechSection: React.FC<TechSectionProps> = ({ techCards }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const [visibleCards, setVisibleCards] = useState(1);

	useEffect(() => {
		const updateVisibleCards = () => {
			if (containerRef.current) {
				const containerWidth = containerRef.current.offsetWidth;
				const cardWidth = 308; // Assuming each card is 308px wide
				setVisibleCards(Math.floor(containerWidth / cardWidth));
			}
		};
		updateVisibleCards();
		window.addEventListener("resize", updateVisibleCards);
		return () => window.removeEventListener("resize", updateVisibleCards);
	}, []);

	const handlePrev = () => {
		setSelectedIndex((prevIndex) =>
			prevIndex === 0 ? techCards.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setSelectedIndex((prevIndex) => (prevIndex + 1) % techCards.length);
	};

	useEffect(() => {
		const timer = setInterval(handleNext, 5000);
		return () => clearInterval(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className="relative"
			ref={containerRef}>
			<img
				className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
				onClick={handlePrev}
				src="/images/button-prev.svg"
				alt="previous-button"
				width={48}
				height={64}
			/>
			<div className="flex justify-center">
				<AnimatePresence
					initial={false}
					custom={selectedIndex}>
					<motion.div
						key={selectedIndex}
						custom={selectedIndex}
						initial={{ opacity: 0, x: 300 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -300 }}
						transition={{ duration: 0.5 }}
						className="flex-shrink-0">
						<TechCard
							{...techCards[selectedIndex]}
							isSelected={true}
						/>
					</motion.div>
				</AnimatePresence>
			</div>
			<img
				className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
				onClick={handleNext}
				src="/images/button-next.svg"
				alt="next-button"
				width={48}
				height={64}
			/>
			<motion.div
				className="w-full mt-4 flex justify-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}>
				<video
					key={selectedIndex}
					src={techCards[selectedIndex].video}
					autoPlay
					muted
					className="w-full max-w-[60vw] h-[360px] md:h-[423px] object-cover"
					onEnded={handleNext}
				/>
			</motion.div>
		</div>
	);
};
