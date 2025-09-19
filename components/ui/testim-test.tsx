/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { StarHalfIcon, StarIcon } from "lucide-react";
import { useIslargeDevices } from "@/hooks/useIsMobile";

interface Testimonial {
	id: number;
	name: string;
	text: string;
	rating: number;
	image: string;
}

export const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Lisa, Sweden",
		text: "I never knew dental care could be this luxurious! Rarity exceeded all my expectations.",
		rating: 4.5,
		image: "/images/testim1.webp", // Update with your image path
	},
	{
		id: 2,
		name: "Sarah, Happy Client",
		text: "I was so nervous about my procedure, but the team made me feel so comfortable and at ease.",
		rating: 4.5,
		image: "/images/testim3.webp", // Update with your image path
	},
	{
		id: 3,
		name: "Kimi, Loyal Customer",
		text: "I've been coming here for years and I've never had a bad experience. Highly recommend!",
		rating: 5,
		image: "/images/testim4.webp", // Update with your image path
	},
];

export const TestimonialSection: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [error, setError] = useState<string | null>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	const isLargeDevices = useIslargeDevices();

	const handlePrev = () => {
		setActiveIndex(
			(prevIndex) =>
				(prevIndex - 1 + testimonials.length) % testimonials.length
		);
	};

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const renderStars = (rating: number) => {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		const stars = [];

		for (let i = 0; i < fullStars; i++) {
			stars.push(
				<StarIcon
					key={`full-${i}`}
					className="text-[#73383E]"
					fill="currentColor"
					size={24}
				/>
			);
		}

		if (hasHalfStar) {
			stars.push(
				<StarHalfIcon
					size={24}
					key={`half-${fullStars}`}
					className="text-[#73383E]"
					fill="currentColor"
				/>
			);
		}

		return stars;
	};

	return (
		<div className="flex flex-col xl:flex-row absolute w-[95%] h-full  bottom-0 xl:bottom-[7%] pt-[2%] right-[-2%] md:right-[-7%] xl:right-[-15%] mb-[15%] md:mb-[5%] xl:mb-0">
			{/* Video Column */}
			<div className="w-[342px] sm:w-[480px] md:w-[640px] 2md:w-[720px] lg:w-[800px] p-4 flex items-center justify-end mt-[5%] sm:mt-0">
				<AnimatePresence mode="wait">
					<motion.video
						key={activeIndex}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						ref={videoRef}
						className="w-full h-full object-cover rounded-lg"
						poster={testimonials[activeIndex].image}
						onError={(e) => {
							console.error("Image loading error:", e);
							setError(
								"Failed to load image. Please try again later."
							);
						}}
					/>
				</AnimatePresence>
			</div>

			{/* Testimonials Column */}
			{isLargeDevices ? (
				<div className="w-[70%] absolute top-[60%] xl:top-0 xl:relative p-4 flex flex-col h-[23%] overflow-hidden xl:h-full">
					<div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-1 xl:grid-rows-2 gap-4 h-full">
						{testimonials.map((testimonial, index) => (
							<div
								key={testimonial.id}
								className={`relative bg-white rounded-lg shadow flex flex-col  `}
								style={{
									gridColumn:
										index === activeIndex ? "1" : "auto",
									gridRow:
										index === activeIndex ? "1" : "auto",
									zIndex: index === activeIndex ? 10 : 1,
									boxShadow:
										index === activeIndex
											? "inset 0 0 0 10px #73383E"
											: "none",
								}}>
								<AnimatePresence mode="wait">
									<motion.div
										key={
											index === activeIndex
												? testimonial.id
												: `inactive-${testimonial.id}`
										}
										initial={{ opacity: 0, x: 0 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: 0 }}
										transition={{ duration: 0.5 }}
										className="flex flex-col justify-center items-start gap-y-2 h-full max-w-[80%] mx-auto py-8 ">
										<div className=" overflow-y-auto ">
											<p className="text-lg mb-2 relative z-10">
												&quot;{testimonial.text}&quot;
											</p>
										</div>
										<div className="flex-shrink-0 mt-2">
											<p className="font-bold relative z-10 text-lg">
												- {testimonial.name}
											</p>
											<div className="flex items-center mt-4 relative z-10">
												{renderStars(
													testimonial.rating
												)}

												<span className="ml-2 text-red-800">
													({testimonial.rating} / 5)
												</span>
											</div>
										</div>
									</motion.div>
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>
			) : (
				<div className=" w-full sm:w-[95%] absolute left-[-5%] bottom-[12%] sm:bottom-0 sm:left-[-6.5%]  xl:top-0 xl:relative md:p-4 flex flex-col h-[55%]  overflow-hidden xl:h-full">
					<div className="flex flex-col  gap-4 h-full">
						{testimonials.map((testimonial, index) => (
							<div
								key={testimonial.id}
								className={`relative bg-white rounded-lg shadow flex flex-col  `}></div>
						))}
						<AnimatePresence mode="wait">
							<motion.div
								key={testimonials[activeIndex].id}
								initial={{ opacity: 0, x: 0 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.5 }}
								className="flex flex-col justify-center items-start gap-y-2  bg-white xl:bg-none md:px-[%] py-11 ">
								<div className="flex justify-between items-center px-[8%]">
									<div className="bg-black w-[22%] md:w-[30%] aspect-square  rounded-full relative">
										<img
											src={
												testimonials[activeIndex].image
											}
											alt={testimonials[activeIndex].name}
											width={250}
											height={250}
											className=" aspect-square  rounded-full absolute left-[2%] top-[6%] scale-[120%]"
										/>
									</div>
									<div className="w-[65%] px-[6%]">
										<p className="text-[16px] md:text-2xl 2md:text-4xl z-10">
											&quot;
											{testimonials[activeIndex].text}
											&quot;
										</p>
									</div>
								</div>
								<p className="text-right px-[15%] w-full  font-bold relative z-10 text-lg md:text-2xl">
									- {testimonials[activeIndex].name}
								</p>
								<div className="flex items-center justify-start w-full  mt-4 relative z-10 pl-[7%] md:pl-[10%]">
									{renderStars(
										testimonials[activeIndex].rating
									)}

									<span className="ml-2 text-red-800">
										({testimonials[activeIndex].rating} / 5)
									</span>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			)}

			{/* Navigation Controls */}
			<div className="absolute bottom-0 sm:bottom-[-0%] xl:bottom-[45%] left-[34.8%] sm:left-[32.6%] xl:left-[-12%] 2xl:left-[-9%] flex w-full space-x-4">
				<button
					title="Previous Testimonial"
					onClick={handlePrev}
					className="bg-transparent">
					<img
						src="/images/left-circle-arrow-testim.svg"
						alt="left-arrow"
						width={60}
						height={60}
						className="hover:scale-105 transition-all duration-800 ease-in-out active:scale-95 cursor-pointer w-8 h-8 md:w-[60px] md:h-[60px]"
					/>
				</button>
				<button
					title="Next Testimonial"
					onClick={handleNext}
					className="bg-transparent">
					<img
						src="/images/right-circle-arrow-testim.svg"
						alt="right-arrow"
						width={60}
						height={60}
						className="hover:scale-105 transition-all duration-800 ease-in-out active:scale-95 cursor-pointer w-8 h-8 md:w-[60px] md:h-[60px]"
					/>
				</button>
			</div>
		</div>
	);
};
