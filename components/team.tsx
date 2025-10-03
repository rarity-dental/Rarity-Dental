/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { doctorData } from "@/lib/data";
import { PageStartDiv } from "./ui/page-start-div";
import { Card } from "./ui/card-in";

import { useIsMobile } from "../hooks/useIsMobile";
import Slide from "./ui/animated-sections";
import { PageEndDiv } from "./ui/page-end-div";
import { motion, AnimatePresence } from "framer-motion";

interface TeamProps {
	hasEndDiv?: boolean;
}

export const Team = ({ hasEndDiv = true }: TeamProps) => {
	const [currentCard, setCurrentCard] = useState(0);
	const [direction, setDirection] = useState(0); // -1 for left, 1 for right
	const [isOverlayVisible, setIsOverlayVisible] = useState(false);
	const isMobile = useIsMobile();

	const handleNext = () => {
		setDirection(1);
		setCurrentCard((prev) => (prev + 1) % doctorData.length);
		setIsOverlayVisible(false);
	};

	const handlePrev = () => {
		setDirection(-1);
		setCurrentCard(
			(prev) => (prev - 1 + doctorData.length) % doctorData.length
		);
		setIsOverlayVisible(false);
	};

	const handleCardClick = () => {
		if (isMobile) {
			setIsOverlayVisible((prev) => !prev);
		}
	};

	// Framer Motion variants
	const variants = {
		enter: (direction: number) => {
			return {
				x: direction > 0 ? 300 : -300,
				opacity: 0,
			};
		},
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => {
			return {
				x: direction < 0 ? 300 : -300,
				opacity: 0,
			};
		},
	};

	// Animation transition settings
	const transition = {
		x: { type: "spring", stiffness: 300, damping: 30 },
		opacity: { duration: 0.2 },
	};

	return (
		<Slide delay={1.2}>
			<div className="min-h-screen w-full relative flex flex-col justify-center items-center  md:pb-0">
				<PageStartDiv />
				{hasEndDiv && <PageEndDiv />}
				<div className="pt-[75px] md:pt-36 pb-12 flex flex-col justify-center items-center">
					<h6 className="text-center text-[14px] tracking-widest leading-relaxed font-semibold mb-6 uppercase text-[#73383E] font-poppins">
						Our Team
					</h6>
					<h2 className="text-center text-[28px] md:text-[48px] font-normal text-copyColor max-w-[342px] sm:max-w-[480px] md:max-w-[600px] mx-auto leading-[1em] ">
						Meet Our Globally Trusted Team of Dental Specialists
					</h2>

					<p className="text-center text-lg tracking-widest leading-relaxed font-semibold mt-3 uppercase text-[#73383E]/70 font-poppins">
						Based in Gurgaon
					</p>
				</div>

				{isMobile ? (
					// Mobile View with Framer Motion
					<div className="w-full max-w-[342px] mx-auto flex flex-col items-center">
						{/* Card Container with relative positioning */}
						<div className="relative w-full">
							<AnimatePresence
								initial={false}
								custom={direction}
								mode="wait">
								<motion.div
									key={currentCard}
									custom={direction}
									variants={variants}
									initial="enter"
									animate="center"
									exit="exit"
									transition={transition}>
									<Card
										slug={doctorData[currentCard].slug}
										image={doctorData[currentCard].image}
										alt={doctorData[currentCard].alt}
										title={doctorData[currentCard].title}
										degree={doctorData[currentCard].degree}
										experience={
											doctorData[currentCard].experience
										}
										imageHeight={400}
										hasOverlay={true}
										className=""
										isOverlayVisible={isOverlayVisible}
										handleClick={handleCardClick}
										textColor="white"
										descriptionDoc={
											doctorData[currentCard].description
										}
										descriptionCard={
											doctorData[currentCard]
												.descriptionCard
										}
										descriptionHover={
											doctorData[currentCard]
												.descriptionHover
										}
										hasButton={true}
										buttonText="Book Appointment"
										buttonLink="#formDiv"
									/>
								</motion.div>
							</AnimatePresence>

							{/* Navigation buttons positioned at the sides of the card, aligned with "YEARS OF EXPERIENCE" */}
							<div
								className="absolute w-full flex justify-center gap-x-[63%] z-[1000000000000] items-center"
								style={{ top: "400px" }}>
								<button
									type="button"
									onClick={handlePrev}
									aria-label="Previous Doctor">
									<img
										src="https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fimages%2Fleft-circle-arrow-testim.svg?alt=media&token=b0d52c6a-a7f0-4056-b72d-aca5f0b1c626"
										alt="left-arrow"
										width={40}
										height={40}
										className="hover:scale-105 transition-all duration-800 ease-in-out active:scale-95 cursor-pointer w-8 h-8"
									/>
								</button>
								<button
									type="button"
									onClick={handleNext}
									aria-label="Next Doctor">
									<img
										src="/images/right-circle-arrow-testim.svg"
										alt="right-arrow"
										width={40}
										height={40}
										className="hover:scale-105 transition-all duration-800 ease-in-out active:scale-95 cursor-pointer w-8 h-8"
									/>
								</button>
							</div>
						</div>

						{/* Add some bottom spacing */}
						<div className="h-16"></div>
					</div>
				) : (
					// Desktop View - Unchanged
					<div className="flex justify-center flex-wrap gap-y-[64px] gap-x-[40px] pb-[180px] max-w-[1280px] mx-auto">
						{doctorData.map((doctor) => (
							<div key={doctor.id}>
								<Card
									key={doctor.id}
									slug={doctor.slug}
									image={doctor.image}
									alt={doctor.alt}
									title={doctor.title}
									degree={doctor.degree}
									descriptionDoc={doctor.description}
									descriptionCard={doctor.descriptionCard}
									descriptionHover={doctor.descriptionHover}
									experience={doctor.experience}
									imageHeight={400}
									hasOverlay={true}
									className=""
									isOverlayVisible={false}
									handleClick={() => {}}
									textColor="white"
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</Slide>
	);
};
