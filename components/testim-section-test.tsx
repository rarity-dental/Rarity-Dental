/* eslint-disable @next/next/no-img-element */
"use client";

import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function TestimonialTestComponent() {
	const testimonials = [
		{
			id: 1,
			author: "Lisa, Sweden",
			quote: "I never knew dental care could be this luxurious! Rarity exceeded all my expectations.",
			rating: 4.5,
			image: "/images/testim1.webp", // Update with your image path
		},
		{
			id: 2,
			author: "Sarah, Happy Client",
			quote: "I was so nervous about my procedure, but the team made me feel so comfortable and at ease.",
			rating: 4.5,
			image: "/images/testim3.webp", // Update with your image path
		},
		{
			id: 3,
			author: "Kimi, Loyal Customer",
			quote: "I've been coming here for years and I've never had a bad experience. Highly recommend!",
			rating: 5,
			image: "/images/testim4.webp",
		},
		{
			id: 4,
			author: "Lisa, Sweden",
			quote: "I never knew dental care could be this luxurious! Rarity exceeded all my expectations.",
			rating: 4.5,
			image: "/images/testim1.webp", // Update with your image path
		},
		{
			id: 5,
			author: "Sarah, Happy Client",
			quote: "I was so nervous about my procedure, but the team made me feel so comfortable and at ease.",
			rating: 4.5,
			image: "/images/testim3.webp", // Update with your image path
		},
		{
			id: 6,
			author: "Kimi, Loyal Customer",
			quote: "I've been coming here for years and I've never had a bad experience. Highly recommend!",
			rating: 5,
			image: "/images/testim4.webp",
		},
		{
			id: 7,
			author: "Lisa, Sweden",
			quote: "I never knew dental care could be this luxurious! Rarity exceeded all my expectations.",
			rating: 4.5,
			image: "/images/testim1.webp", // Update with your image path
		},
		{
			id: 8,
			author: "Sarah, Happy Client",
			quote: "I was so nervous about my procedure, but the team made me feel so comfortable and at ease.",
			rating: 4.5,
			image: "/images/testim3.webp", // Update with your image path
		},
		{
			id: 9,
			author: "Kimi, Loyal Customer",
			quote: "I've been coming here for years and I've never had a bad experience. Highly recommend!",
			rating: 5,
			image: "/images/testim4.webp",
		},
		{
			id: 10,
			author: "Lisa, Sweden",
			quote: "I never knew dental care could be this luxurious! Rarity exceeded all my expectations.",
			rating: 4.5,
			image: "/images/testim1.webp", // Update with your image path
		},
		{
			id: 11,
			author: "Sarah, Happy Client",
			quote: "I was so nervous about my procedure, but the team made me feel so comfortable and at ease.",
			rating: 4.5,
			image: "/images/testim3.webp", // Update with your image path
		},
		{
			id: 12,
			author: "Kimi, Loyal Customer",
			quote: "I've been coming here for years and I've never had a bad experience. Highly recommend!",
			rating: 5,
			image: "/images/testim4.webp",
		},
	];

	// For manual navigation, call setCurrentIndex(idx) and setIsAnimating(true)

	const renderStars = (rating: number) => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			stars.push(
				<Star
					key={i}
					className={`w-4 h-4 ${i <= rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}`}
				/>
			);
		}
		return stars;
	};

	const isMobile = useIsMobile();

	return (
		<section
			className="pt-4 pb-16  md:py-16"
			style={{ backgroundColor: "#f5f1eb" }}>
			<div className="flex flex-col justify-center items-center md:items-end">
				{/* Header */}
				<div className="text-center max-w-[340px] sm:max-w-[85%] lg:max-w-[90%] xl:max-w-[95%] 2xl:max-w-7xl mx-auto px-4">
					<h6 className="text-center text-[14px] tracking-widest leading-relaxed font-semibold mb-6 uppercase text-[#73383E] font-poppins max-w-[300px] md:max-w-[600px] xl:max-w-[1080px] mx-auto">
						Hear What Our Patients Are Saying
					</h6>
					<h2 className="text-3xl md:text-5xl font-light text-copyColor max-w-4xl mx-auto leading-none md:leading-relaxed">
						We prioritize seamless convenience for our guests. From
						smooth check-ins to efficient concierge services, we
						provide assistance whenever you need it.
					</h2>
				</div>

				{/* Testimonials Container - Single Card Animation */}

				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					plugins={[
						Autoplay({
							delay: 3000,
						}),
					]}
					testim
					className="w-full md:w-[90%] pb-[15%] md:pb-0">
					{isMobile ? (
						<CarouselContent className="-ml-1 w-[100vw] lg:w-[72vw] xl:w-[60vw] 2xl:w-[42vw] gap-[5%] ">
							{testimonials.map((testimonial, id) => (
								<CarouselItem
									key={testimonial.id}
									className="pl-1 flex justify-center items-center basis-[100vw] ">
									<div className="relative h-[300px] md:h-[600px] lg:max-w-3xl  xl:max-w-5xl 2xl:max-w-7xl  overflow-visible flex items-center rounded-lg">
										<div
											className="relative flex-shrink-0 rounded-lg"
											style={{
												width: "100vw",
												maxWidth: "340px",
												minWidth: "200px",
											}}>
											{/* Video Container */}
											<div className="relative  h-[250px] md:h-[450px] w-full aspect-[4/3] rounded-lg overflow-visible  md:overflow-hidden bg-gray-900">
												<img
													src={
														testimonial.image ||
														"/placeholder.svg"
													}
													alt={`${testimonial.author} testimonial`}
													fetchPriority="high"
													className="absolute object-cover rounded-lg inset-0 w-full h-full"
													sizes="70vw"
												/>
											</div>

											{/* Floating Review Card */}
											<div className="absolute -bottom-[50%] md:-bottom-16 left-1/2 md:left-[35%] transform -translate-x-1/2 w-11/12 max-w-md ">
												<div className="bg-white rounded-lg shadow-lg p-6">
													<blockquote className="text-gray-700 text-sm leading-relaxed mb-4">
														&quot;
														{testimonial.quote}
														&quot;
													</blockquote>
													<p className="font-medium text-gray-900 text-sm mb-3">
														-{testimonial.author}
													</p>
													<div className="flex items-center gap-2">
														<div className="flex items-center gap-1">
															{renderStars(
																testimonial.rating
															)}
														</div>
														<span className="text-sm text-gray-600">
															(
															{testimonial.rating}{" "}
															/ 5)
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					) : (
						<CarouselContent className="-ml-1 w-[100vw] lg:w-[72vw] xl:w-[60vw] 2xl:w-[42vw] gap-[5%] ">
							{testimonials.map((testimonial, id) => (
								<CarouselItem
									key={testimonial.id}
									className="pl-1 flex justify-center items-center basis-[70vw] max-w-[800px] min-w-[600px]">
									<div className="relative h-[350px] md:h-[600px] lg:max-w-3xl  xl:max-w-5xl 2xl:max-w-7xl  overflow-visible flex items-center">
										<div
											className="relative flex-shrink-0"
											style={{
												width: "70vw",
												maxWidth: "800px",
												minWidth: "600px",
											}}>
											{/* Video Container */}
											<div className="relative  h-[250px] md:h-[450px] w-full aspect-[4/3] rounded-lg overflow-visible  md:overflow-hidden bg-gray-900">
												<img
													src={
														testimonial.image ||
														"/placeholder.svg"
													}
													alt={`${testimonial.author} testimonial`}
													fetchPriority="high"
													className="object-cover absolute inset-0 w-full h-full rounded-lg"
													sizes="70vw"
												/>
											</div>

											{/* Floating Review Card */}
											<div className="absolute -bottom-[50%] md:-bottom-16 left-[40%] lg:left-[35%] transform -translate-x-1/2 w-11/12 max-w-md ">
												<div className="bg-white rounded-lg shadow-lg p-6">
													<blockquote className="text-gray-700 text-sm leading-relaxed mb-4">
														&quot;
														{testimonial.quote}
														&quot;
													</blockquote>
													<p className="font-medium text-gray-900 text-sm mb-3">
														-{testimonial.author}
													</p>
													<div className="flex items-center gap-2">
														<div className="flex items-center gap-1">
															{renderStars(
																testimonial.rating
															)}
														</div>
														<span className="text-sm text-gray-600">
															(
															{testimonial.rating}{" "}
															/ 5)
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					)}

					<CarouselPrevious className="absolute  transform -translate-x-1/2 w-12 h-12 z-[100000000000000000000] " />
					<CarouselNext className="absolute   transform -translate-x-1/2 w-12 h-12 z-[100000000000000000000]" />
				</Carousel>
			</div>

			<style
				jsx
				global>{`
				.scrollbar-hide {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
				.scrollbar-hide::-webkit-scrollbar {
					display: none;
				}
			`}</style>
		</section>
	);
}
