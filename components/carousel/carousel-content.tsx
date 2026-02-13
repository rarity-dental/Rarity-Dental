/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, TouchEvent } from "react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogCategory, BlogPreviewT } from "@/types";

interface CarouselContentProps {
	blogs: BlogPreviewT[];
	category: BlogCategory;
}

const CarouselContent = ({ blogs, category }: CarouselContentProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [touchStart, setTouchStart] = useState<number>(0);
	const [touchEnd, setTouchEnd] = useState<number>(0);
	const [isMobile, setIsMobile] = useState(false);

	// Items to show based on screen size
	const itemsPerView = isMobile ? 1 : 3;
	const totalSlides = Math.ceil(blogs.length / itemsPerView);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const handleTouchStart = (e: TouchEvent) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e: TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		const minSwipeDistance = 50;

		if (Math.abs(distance) < minSwipeDistance) return;

		if (distance > 0) {
			nextSlide();
		} else {
			prevSlide();
		}

		setTouchStart(0);
		setTouchEnd(0);
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => {
			const maxIndex = blogs.length - itemsPerView;
			return prev >= maxIndex ? 0 : prev + itemsPerView;
		});
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => {
			const maxIndex = blogs.length - itemsPerView;
			return prev <= 0 ? maxIndex : prev - itemsPerView;
		});
	};

	return (
		<div className="relative w-full overflow-hidden">
			<div
				className="flex transition-transform duration-500 ease-in-out w-full pt-4 pb-8"
				style={{
					transform: `translateX(-${(currentIndex / blogs.length) * 100}%)`,
					width: `${(blogs.length / itemsPerView) * 100}%`,
				}}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}>
				{blogs.map((item) => (
					<div
						key={item._id}
						className="w-full px-2 md:px-4"
						style={{
							flex: `0 0 ${100 / (blogs.length / itemsPerView) / itemsPerView}%`,
						}}>
						<Link
							href={`/blog/${category}/${item.slug}`}
							className="block hover:scale-105 transition-all duration-300 ease-in-out border-[1.5px] border-copyColor h-full">
							<Card className="h-full">
								<CardContent className="p-0">
									<div className="flex flex-col space-y-2 md:space-y-4 justify-center items-center w-full">
										<div className="w-full relative aspect-video">
											{item.image && (
												<img
													src={item.image}
													alt={
														item.meta_title ||
														item.name
													}
													className="object-cover absolute inset-0 w-full h-full"
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
													loading="lazy"
												/>
											)}
										</div>
										<div className="flex flex-col space-y-2 md:space-y-4 w-full p-4 md:px-6 md:pb-6">
											<p className="text-xl md:text-2xl font-bold line-clamp-2">
												{item.meta_title || item.name}
											</p>
											<p className="text-base md:text-lg line-clamp-2 md:line-clamp-3">
												{item.meta_description ||
													`Read more about ${item.slug.toString().replace(/-/g, " ")}`}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</Link>
					</div>
				))}
			</div>

			{/* Slide indicators for mobile */}
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
				{Array.from({ length: totalSlides }).map((_, index) => (
					<button
						key={index}
						className={`w-2 h-2 rounded-full transition-colors ${
							Math.floor(currentIndex / itemsPerView) === index
								? "bg-blue-600"
								: "bg-gray-300"
						}`}
						onClick={() => setCurrentIndex(index * itemsPerView)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>

			{/* Navigation arrows - hidden on mobile */}
			{!isMobile && totalSlides > 1 && (
				<div className="absolute top-1/2 -translate-y-1/2 w-full justify-between px-4 hidden md:flex">
					<button
						onClick={prevSlide}
						className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
						aria-label="Previous slide">
						<ChevronLeft className="w-6 h-6" />
					</button>
					<button
						onClick={nextSlide}
						className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
						aria-label="Next slide">
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>
			)}
		</div>
	);
};

export default CarouselContent;
