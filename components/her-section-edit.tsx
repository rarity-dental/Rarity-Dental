/* eslint-disable @next/next/no-img-element */
"use client";

import { PageEndDiv } from "./ui/page-end-div";
import dynamic from "next/dynamic";
import Slide from "./ui/animated-sections";
import { HeroSlide1 } from "./hero-slide-1-team";
import { HeroSlide2 } from "./hero-slide-2-patient";
import { HeroSlide4 } from "./hero-slide-4-smiles";
import { HeroSlide5 } from "./hero-slide-5";
import { useState } from "react";
import { HeroSlide6 } from "./hero-slide-6-sneha";
import { useIsMobile } from "@/hooks/useIsMobile";

const ParallaxBanner = dynamic(
	() => import("./ui/parallaxH").then((mod) => mod.ParallaxBanner),
	{
		loading: () => <p>Loading...</p>,
	}
);

const Carousel = dynamic(
	() => import("./ui/carousel-in").then((mod) => mod.Carousel),
	{
		// loading: () => <p>Loading...</p>,
	}
);

const HeroSlide3Video = dynamic(
	() => import("./hero-slide-3-video").then((mod) => mod.HeroSlide3Video),
	{
		loading: () => <p>Loading...</p>,
	}
);

export const HeroSectionEdit = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const isMobile = useIsMobile();

	const isHeroSlide1 = currentSlideIndex === 0;

	return (
		<div className="pt-[124px] min-h-[600px] md:min-h-screen w-full md:px-0 relative overflow-hidden">
			{/* Static background for non-HeroSlide1 */}
			<div
				className={`absolute inset-0 transition-opacity duration-500 ${
					!isHeroSlide1 ? "opacity-100" : "opacity-0"
				} ${currentSlideIndex === 3 ? "" : "bg-[url('/images/hero-back-static-mobile-img.webp')] md:bg-[url('/images/hero-back-img-static.webp')] bg-center md:bg-cover xl:bg-cover bg-no-repeat"} `}
				style={{
					height: "100%",
					width: "100%",
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: 0,
					transform: "translateZ(0)",
					backfaceVisibility: "hidden",
					perspective: "1000px",
					willChange: "transform",
				}}
			/>

			<div className={`relative w-full h-full xl:mb-0 z-10`}>
				<Carousel
					className="min-h-[600px] md:min-h-screen"
					duration={4}
					autoplay={!isMobile}
					onSlideChange={setCurrentSlideIndex}>
					<HeroSlide6 />
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
