/* eslint-disable @next/next/no-img-element */
"use client";

import { PageEndDiv } from "./ui/page-end-div";
import dynamic from "next/dynamic";
import Slide from "./ui/animated-sections";
import { HeroSlide1 } from "./hero-slide-1-team";
import { HeroSlide2 } from "./hero-slide-2-patient";
import { HeroSlide4 } from "./hero-slide-4-smiles";
import { HeroSlide5 } from "./hero-slide-5";
import { useState, useEffect } from "react";
import { HeroSlide6 } from "./hero-slide-6-sneha";
// Static import: Carousel is on the critical LCP path — must not be code-split
import { Carousel } from "./ui/carousel-in";
import { HeroSlide3Video } from "./hero-slide-3-video";



const ParallaxBanner = dynamic(
	() => import("./ui/parallaxH").then((mod) => mod.ParallaxBanner),
	{
		loading: () => <p>Loading...</p>,
	}
);

export const HeroSectionEdit = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	// Defer autoplay check to avoid SSR mismatch and extra re-render during LCP
	const [autoplay, setAutoplay] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia("(min-width: 648px)");
		setAutoplay(mq.matches);
	}, []);

	const isHeroSlide1 = currentSlideIndex === 0;

	return (
		<div className="hero-paint-fallback pt-[124px] min-h-[600px] md:min-h-screen w-full md:px-0 relative overflow-hidden">
			{/* Static background for non-HeroSlide1 */}
			<div
				className={`hero-paint-layer absolute inset-0 transition-opacity duration-500 ${
					!isHeroSlide1 ? "opacity-100" : "opacity-0"
				}`}
				style={{
					height: "100%",
					width: "100%",
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: 0,
				}}
			/>

			<div className={`relative w-full h-full xl:mb-0 z-10`}>
				<Carousel
					className="min-h-[600px] md:min-h-screen hero-paint-fallback"
					duration={4}
					autoplay={autoplay}
					onSlideChange={setCurrentSlideIndex}>
					<HeroSlide6 disableAnimations />
					<HeroSlide1 />
					<HeroSlide2 />
					<HeroSlide3Video />
					<HeroSlide5 />
					<HeroSlide4 />
				</Carousel>
			</div>
			<div className="w-full mb-[1.1%] xl:mt-0 hidden sm:flex overflow-hidden absolute bottom-[15%] left-0 z-20">
				<Slide>
					<ParallaxBanner
						baseVelocity={50}
						childWidth={2430}>
						<img
							src="/images/awards-container.webp"
							width={2387}
							height={83}
							alt="My Image"
							className="object-contain"
							loading="lazy"
							fetchPriority="low"
							style={{
								width: "2387px",
								height: "83px",
							}}
						/>
					</ParallaxBanner>
				</Slide>
			</div>
			{/* Navigation Buttons */}

			<PageEndDiv />
		</div>
	);
};
