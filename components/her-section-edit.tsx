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

const ParallaxBanner = dynamic(
	() => import("./ui/parallaxH").then((mod) => mod.ParallaxBanner),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	}
);

const Carousel = dynamic(
	() => import("./ui/carousel-in").then((mod) => mod.Carousel),
	{
		// loading: () => <p>Loading...</p>,
		ssr: false,
	}
);

const HeroSlide3Video = dynamic(
	() => import("./hero-slide-3-video").then((mod) => mod.HeroSlide3Video),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	}
);

export const HeroSectionEdit = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const [isPreloaded, setIsPreloaded] = useState(false);
	const [carouselReady, setCarouselReady] = useState(false);

	const isHeroSlide1 = currentSlideIndex === 0;

	// Preload critical assets
	useEffect(() => {
		const preloadAssets = async () => {
			// Preload background images
			const bgImage = new window.Image();
			bgImage.src = "/images/hero-back-img-static.webp";

			// Preload navigation arrows
			const leftArrow = new window.Image();
			leftArrow.src = "/images/left-circle-arrow.svg";
			const rightArrow = new window.Image();
			rightArrow.src = "/images/right-circle-arrow.svg";

			await Promise.all([
				new Promise<void>((resolve) => {
					bgImage.onload = () => resolve();
				}),
				new Promise<void>((resolve) => {
					leftArrow.onload = () => resolve();
				}),
				new Promise<void>((resolve) => {
					rightArrow.onload = () => resolve();
				}),
			]);

			setIsPreloaded(true);
		};

		preloadAssets();
	}, []);

	// Once initial assets are ready, allow carousel to mount next frame
	useEffect(() => {
		if (isPreloaded) {
			const id = requestAnimationFrame(() => setCarouselReady(true));
			return () => cancelAnimationFrame(id);
		}
	}, [isPreloaded]);

	const SSRFirstSlide = (
		<div
			className={`relative w-full h-full xl:mb-0 z-10 ${carouselReady ? "hidden" : ""}`}>
			<div className="w-full min-h-[600px] md:min-h-screen flex flex-col justify-between relative">
				<div className="w-full min-h-[600px] relative h-full">
					<img
						src="/images/rarity-hero-team.webp"
						alt="Team Background"
						className="absolute inset-0 object-cover object-center w-full h-full"
						fetchPriority="high"
						sizes="100vw"
					/>
					<div className="flex-1 flex flex-col justify-between pt-[4%] pb-[4%] px-[2%] relative z-10 space-y-[10%] h-full">
						<div className="text-center max-w-3xl mx-auto px-2 pl-4">
							<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-white mb-4 pt-[12%]">
								Best Dental Clinic in Gurgaon for
								<br />
								Smile Makeovers, Implants & Invisalign
							</h1>
							<p className="text-white mb-4">
								Delivering Unmatched Dental Excellence for 13+
								years
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	// After initial hero assets, preload slides in strict order: 1,2,3,5,4
	// Note: Slide 1 main hero image is already part of splash preload.
	useEffect(() => {
		if (!isPreloaded) return;

		let cancelled = false;

		const loadImage = (url: string) =>
			new Promise<void>((resolve) => {
				const img = new Image();
				img.loading = "eager";
				img.decoding = "async" as any;
				img.src = url;
				img.onload = () => resolve();
				img.onerror = () => resolve();
			});

		const loadVideoMetadata = (url: string) =>
			new Promise<void>((resolve) => {
				const v = document.createElement("video");
				v.preload = "metadata";
				v.src = url;
				v.onloadedmetadata = () => resolve();
				v.onerror = () => resolve();
			});

		const run = async () => {
			const sequence: Array<{ type: "image" | "video"; url: string }> = [
				{ type: "image", url: "/images/hs2-italian-img.webp" }, // slide 2
				{ type: "video", url: "/videos/Laser-Dentistry.mp4" }, // slide 3
				{ type: "image", url: "/images/manreet/manreet-square.webp" }, // slide 5
				{ type: "image", url: "/images/hs4-img.webp" }, // slide 4
			];

			for (const item of sequence) {
				if (cancelled) break;
				if (item.type === "image") await loadImage(item.url);
				else await loadVideoMetadata(item.url);
			}
		};

		run();
		return () => {
			cancelled = true;
		};
	}, [isPreloaded]);

	return (
		<div className="pt-[124px] min-h-[600px] md:min-h-screen w-full md:px-0 relative overflow-hidden">
			{/* Static background for non-HeroSlide1 */}
			<div
				className={`absolute inset-0 transition-opacity duration-500 ${
					!isHeroSlide1 ? "opacity-100" : "opacity-0"
				} bg-[url('/images/hero-back-static-mobile-img.webp')] md:bg-[url('/images/hero-back-img-static.webp')] bg-center md:bg-cover xl:bg-cover bg-no-repeat`}
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
			{/* Solid background for HeroSlide1 */}
			<div
				className={`absolute inset-0 transition-opacity duration-500 ${
					isHeroSlide1 ? "opacity-100" : "opacity-0"
				} bg-[#f7f2ec]`}
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
			{SSRFirstSlide}
			<div
				className={`relative w-full h-full xl:mb-0 z-10 ${!carouselReady ? "hidden" : ""}`}>
				{carouselReady && (
					<Carousel
						className="min-h-[600px] md:min-h-screen"
						duration={4}
						onSlideChange={setCurrentSlideIndex}>
						<HeroSlide1 />
						<HeroSlide2 />
						<HeroSlide3Video />
						<HeroSlide6 />
						<HeroSlide5 />
						<HeroSlide4 />
					</Carousel>
				)}
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
