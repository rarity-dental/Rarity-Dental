/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { serviceData } from "@/lib/data";
import { PageEndDiv } from "./ui/page-end-div";
import { Card } from "./ui/card-in";

import { Button } from "./ui/button";
import { useIsMobile, useIsTablet } from "@/hooks/useIsMobile";

import { useInView } from "framer-motion";
import { PageStartDiv } from "./ui/page-start-div";
import Link from "next/link";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPreviousMod,
	CarouselNextMod,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

// Custom card component for mobile view with navigation buttons
const MobileCardWithNavigation = ({
	service,
	handlePrev,
	handleNext,
	isActive,
}: {
	service: {
		id: number;
		image: string;
		title: string;
		description: string;
	};
	handlePrev: () => void;
	handleNext: () => void;
	isActive: boolean;
}) => {
	return (
		<div className={`relative ${isActive ? "opacity-100" : "opacity-0"}`}>
			{/* Card content */}
			<Card
				image={service.image}
				hasOverlay={false}
				title={service.title}
				description={service.description}
				hasButton={true}
				buttonText="ENQUIRE"
				imageHeight={260}
				className="w-full"
				textColor="#73383E"
			/>

			{/* Navigation buttons positioned at the title level */}
			<div
				className="absolute w-full flex justify-between items-center px-[6%]"
				style={{ top: "314px", zIndex: 30 }}>
				<button
					onClick={(e) => {
						e.stopPropagation();
						handlePrev();
					}}
					aria-label="Previous"
					type="button"
					className="transform -translate-x-3">
					<img
						src="/images/left-circle-arrow-testim.svg"
						alt="left-arrow"
						width={40}
						height={40}
						className="hover:scale-105 transition-all duration-800 ease-in-out active:scale-95 cursor-pointer w-8 h-8"
					/>
				</button>
				<button
					onClick={(e) => {
						e.stopPropagation();
						handleNext();
					}}
					aria-label="Next"
					type="button"
					className="transform translate-x-3">
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
	);
};

export const Services = () => {
	const scrollRef1 = useRef<HTMLDivElement>(null);
	const scrollRef2 = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(containerRef, { once: false, amount: 0.5 });
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const videoElement = videoRef.current;
		if (videoElement) {
			videoElement.muted = true;

			if (isInView) {
				videoElement.play().catch((error) => {
					console.error("Video playback failed:", error);
					setError("Video playback failed. Click to play.");
				});
			} else {
				videoElement.pause();
			}
		}
	}, [isInView]);

	const handlePlayClick = () => {
		const videoElement = videoRef.current;
		if (videoElement) {
			if (videoElement.paused) {
				videoElement.play().catch((error) => {
					console.error("Play failed:", error);
					setError("Failed to play video. Please try again.");
				});
			} else {
				videoElement.pause();
			}
		}
	};

	const isMobile = useIsMobile();
	const isTablet = useIsTablet();
	const [currentCard, setCurrentCard] = useState(0);

	const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
		if (ref.current) {
			const container = ref.current;
			const scrollAmount = 440; // Adjust this value based on your card width + gap
			const currentScroll = container.scrollLeft;

			if (currentScroll === 0) {
				container.scrollTo({
					left: container.scrollWidth,
					behavior: "smooth",
				});
			} else {
				container.scrollTo({
					left: currentScroll - scrollAmount,
					behavior: "smooth",
				});
			}
		}
	};

	const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
		if (ref.current) {
			const container = ref.current;
			const scrollAmount = 440; // Adjust this value based on your card width + gap
			const currentScroll = container.scrollLeft;
			const maxScroll = container.scrollWidth - container.clientWidth;

			if (currentScroll >= maxScroll) {
				container.scrollTo({ left: 0, behavior: "smooth" });
			} else {
				container.scrollTo({
					left: currentScroll + scrollAmount,
					behavior: "smooth",
				});
			}
		}
	};

	const handleNext = () => {
		setCurrentCard((prev) => (prev + 1) % serviceData.length);
	};

	const handlePrev = () => {
		setCurrentCard(
			(prev) => (prev - 1 + serviceData.length) % serviceData.length
		);
	};

	return (
		<div
			id="services"
			className="pt-8 md:mt-0 min-h-screen w-full relative flex flex-col justify-center items-center ">
			<PageStartDiv />
			<PageEndDiv />
			<div className="pt-[10%] md:pt-[12%] xl:pt-[8%] pb-16  flex flex-col justify-center items-center max-w-[342px] md:max-w-[600px] 2md:max-w-[680px] xl:max-w-[1064px] mx-auto ">
				<h2 className="text-center text-[14px] tracking-widest leading-relaxed font-semibold mb-6 uppercase text-[#73383E] font-poppins">
					Advanced Procedures
				</h2>
				<p className="text-center text-[28px] md:text-[48px] font-normal text-copyColor leading-snug tracking-tight ">
					Experience advanced, quality care for unmatched confidence
				</p>
			</div>

			{isMobile || isTablet ? (
				// Updated mobile/tablet view with repositioned navigation buttons
				<div
					className="relative flex justify-center items-center w-full max-w-[342px] mx-auto mb-14 md:mb-28 sm:mb-40 z-10"
					style={{ height: "593px" }}>
					{serviceData.map((service, index) => (
						<div
							key={service.id}
							className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
								index === currentCard
									? "opacity-100 z-20"
									: "opacity-0 z-0"
							}`}>
							<MobileCardWithNavigation
								service={service}
								handlePrev={handlePrev}
								handleNext={handleNext}
								isActive={index === currentCard}
							/>
						</div>
					))}
				</div>
			) : (
				// Desktop view remains unchanged
				<>
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						plugins={[
							Autoplay({
								delay: 2000,
							}),
						]}
						className="w-full relative max-w-[1280px] mx-auto pb-[5%]">
						<CarouselContent className="-ml-1">
							{serviceData
								.filter((service) => service.id < 10)
								.map((service) => (
									<CarouselItem
										key={service.id}
										className="basis-1/3 pl-1">
										<Card
											key={service.id}
											image={service.image}
											hasOverlay={false}
											title={service.title}
											description={service.description}
											hasButton={true}
											buttonText="ENQUIRE"
											imageHeight={260}
											className="scroll-snap-align-start"
											textColor="#73383E"
										/>
									</CarouselItem>
								))}
						</CarouselContent>
						<CarouselPreviousMod className="absolute left-[-3.4%]" />
						<CarouselNextMod className="absolute right-[-3.4%] " />
					</Carousel>
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						plugins={[
							Autoplay({
								delay: 2000,
							}),
						]}
						className="w-full relative max-w-[1280px] mx-auto pb-[5%]">
						<CarouselContent className="-ml-1">
							{serviceData
								.filter((service) => service.id > 9)
								.map((service) => (
									<CarouselItem
										key={service.id}
										className="basis-1/3 pl-1 w-full h-full ">
										<Card
											key={service.id}
											image={service.image}
											hasOverlay={false}
											title={service.title}
											description={service.description}
											hasButton={true}
											buttonText="ENQUIRE"
											imageHeight={260}
											className="scroll-snap-align-start"
											textColor="#73383E"
										/>
									</CarouselItem>
								))}
						</CarouselContent>
						<CarouselPreviousMod className="absolute left-[-3.4%]" />
						<CarouselNextMod className="absolute right-[-3.4%] " />
					</Carousel>
				</>
			)}

			<div className="min-h-screen bg-[#73383E] w-full pb-[10%]">
				<div className="flex flex-col items-center max-w-[342px] md:max-w-[600px] xl:max-w-[1064px] mx-auto pt-32 pb-8">
					<h2 className="text-[14px] tracking-widest leading-relaxed font-semibold uppercase text-[#F7F3F1] font-poppins mb-6">
						Elevate your smile
					</h2>
					<p className="text-[28px] md:text-[48px] font-normal text-[#E4E5E9] leading-tight tracking-tight text-center">
						&quot;Invisalign is painless, different from retainers,
						aligns teeth gradually, and tailored to your individual
						needs&quot;
					</p>
					<p className="text-[18px] md:text-[32px] pt-6 text-center text-[#E4E5E9] tracking-tighter italic leading-[1em]">
						Experience a virtually invisible, comfortable, and
						customized Invisalign treatment to straighten your
						teeth—without the discomfort of traditional braces.
					</p>
				</div>

				<div className="flex flex-col items-center max-w-[342px] md:max-w-[600px] xl:max-w-[1064px] mx-auto">
					<img
						src="/images/invisalign-logo.png"
						alt="invisalign-logo"
						width={250}
						height={49}
						className="mb-4 lg:mb-6 w-[250px] h-[49px]"
					/>
				</div>

				<div
					className="flex flex-col-reverse xl:flex-row justify-center items-start max-w-[342px] md:max-w-[600px] xl:max-w-[1200px] mx-auto gap-[5%]"
					ref={containerRef}>
					<video
						ref={videoRef}
						className="aspect-square object-cover mt-8 xl:mt-0"
						loop
						width={600}
						height={600}
						playsInline
						muted
						poster="/videos/poster-image-invisalign.webp"
						preload="metadata"
						onClick={handlePlayClick}
						onLoadedData={() => setError(null)}
						onError={(e) => {
							const video = e.currentTarget;
							const mediaError = video?.error || null;
							if (mediaError) {
								const code = mediaError.code;
								const codeMap: Record<number, string> = {
									1: "MEDIA_ERR_ABORTED",
									2: "MEDIA_ERR_NETWORK",
									3: "MEDIA_ERR_DECODE",
									4: "MEDIA_ERR_SRC_NOT_SUPPORTED",
								};
								console.error("Video error:", {
									code,
									type: codeMap[code] || "UNKNOWN",
									message: (mediaError as any).message,
								});
							} else {
								console.error("Video error: unknown");
							}
							setError(
								"Failed to load video. Please try again later."
							);
						}}>
						<source
							src="https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FInvisalign-Video.mp4?alt=media&token=651b5901-3f03-430c-a970-9b4330a58fb8"
							type="video/mp4"
						/>
					</video>

					<div className="w-full lg:w-2/3 h-full  flex flex-col justify-between items-center lg:items-start lg:py-[4%] lg:h-[600px]">
						<p className="text-[18px] md:text-[32px] font-normal text-[#E4E5E9] leading-snug tracking-tight text-center xl:text-left mb-10 ">
							These clear aligners are removable, discreet, and
							designed to fit seamlessly into your lifestyle. With
							Invisalign, you can eat, speak, and smile
							confidently throughout your journey. Backed by
							advanced technology, each aligner is crafted for
							precise teeth movements and predictable results.
							Discover a better way to achieve the smile
							you&apos;ve always wanted—effortlessly, comfortably,
							and without metal braces.
						</p>
						<Link href={"#formDiv"}>
							<Button
								variant={"outline"}
								className="bg-[#322D29] transparent uppercase text-[14px] font-poppins font-semibold text-white tracking-wider w-fit py-4 px-8 border border-[#73383E] rounded-none border-opacity-70 h-[44px] hover:bg-white hover:text-[#73383E] hover:border-transparent transition-all duration-300 ease-in-out">
								Schedule a consultation
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
