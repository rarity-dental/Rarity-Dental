"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { PageStartDiv } from "./ui/page-start-div";
import { ARIcon } from "./ui/icons/arIcon";
import { DSDIcon } from "./ui/icons/dsdIcon";
import { LaserIcon } from "./ui/icons/laserIcon";
import { PrintIcon } from "./ui/icons/printingIcon";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
	CarouselApi,
} from "@/components/ui/carousel";
import { motion, useAnimation, useInView } from "framer-motion";
import type {
	TechAdvantageIcon,
	TechAdvantageItem,
	TechAdvantageSection as TechAdvantageSectionData,
} from "@/types";

type TechAdvantageCard = TechAdvantageItem & {
	id: number;
	iconKey?: TechAdvantageIcon;
};

const iconMap: Record<TechAdvantageIcon, React.ReactNode> = {
	print: <PrintIcon />,
	dsd: <DSDIcon />,
	laser: <LaserIcon />,
	ar: <ARIcon />,
};

type Props = {
	sectionData?: TechAdvantageSectionData;
};

export const TechAdvantageSection = ({ sectionData }: Props) => {
	const techData = React.useMemo<TechAdvantageCard[]>(() => {
		if (!sectionData?.items?.length) {
			return [];
		}

		const items = sectionData.items;

		return items.map((item, index) => ({
			id: index + 1,
			title: item.title,
			icon: item.icon,
			fallbackIcon: item.fallbackIcon,
			iconKey: item.fallbackIcon || "dsd",
			description: item.description,
			video: item.video,
		}));
	}, [sectionData]);

	const renderIcon = (tech: TechAdvantageCard) => {
		if (tech.icon) {
			return (
				<img
					src={tech.icon}
					alt={`${tech.title} icon`}
					className="h-16 w-16 object-contain md:h-20 md:w-20"
				/>
			);
		}

		const iconKey = tech.iconKey || tech.fallbackIcon || "dsd";
		return iconMap[iconKey] ?? iconMap.dsd;
	};

	const [api, setApi] = React.useState<CarouselApi>();
	const [currentVideo, setCurrentVideo] = useState(techData[0]?.video ?? "");
	const [activeCardId, setActiveCardId] = useState(techData[0]?.id ?? 0);
	const videoRef = useRef<HTMLVideoElement>(null);
	const controls = useAnimation();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showPlayButton, setShowPlayButton] = useState(false);

	const containerRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(containerRef, { once: false, amount: 0.5 });

	const attemptPlay = useCallback(
		async (videoElement: HTMLVideoElement) => {
			if (!currentVideo) {
				return;
			}

			try {
				await videoElement.play();
				setShowPlayButton(false);
			} catch (error) {
				if (
					error instanceof DOMException &&
					error.name === "AbortError"
				) {
					setShowPlayButton(true);
					return;
				}
				if (
					error instanceof DOMException &&
					error.name === "NotAllowedError"
				) {
					console.log(
						"Autoplay prevented due to browser policy. User interaction may be required."
					);
				} else {
					console.error("Autoplay failed:", error);
				}
				setShowPlayButton(true);
			}
		},
		[currentVideo]
	);

	const goToNextSlide = useCallback(() => {
		if (api) {
			const nextIndex = (currentIndex + 1) % techData.length;
			api.scrollTo(nextIndex);
		}
	}, [api, currentIndex, techData.length]);

	useEffect(() => {
		if (!api) return;

		const handleSelect = () => {
			const selectedIndex = api.selectedScrollSnap();
			setCurrentIndex(selectedIndex);
			setCurrentVideo(techData[selectedIndex].video);
			setActiveCardId(techData[selectedIndex].id);
		};

		api.on("select", handleSelect);

		return () => {
			api.off("select", handleSelect);
		};
	}, [api, techData]);

	useEffect(() => {
		if (!techData.length) {
			return;
		}

		setCurrentIndex(0);
		setCurrentVideo(techData[0].video);
		setActiveCardId(techData[0].id);
		api?.scrollTo(0);
	}, [api, techData]);

	useEffect(() => {
		const videoElement = videoRef.current;
		if (!videoElement) return;

		const handleVideoEnd = () => {
			goToNextSlide();
		};

		videoElement.addEventListener("ended", handleVideoEnd);

		return () => {
			videoElement.removeEventListener("ended", handleVideoEnd);
		};
	}, [goToNextSlide]);

	useEffect(() => {
		const videoElement = videoRef.current;

		if (videoElement && isInView && currentVideo) {
			attemptPlay(videoElement);
		} else {
			videoElement?.pause();
		}
	}, [attemptPlay, currentVideo, isInView]);

	useEffect(() => {
		const videoElement = videoRef.current;
		if (!videoElement) return;

		const handlePlay = () => setShowPlayButton(false);
		const handlePause = () => {
			if (isInView) {
				setShowPlayButton(true);
			}
		};
		const handleCanPlay = () => {
			if (isInView) {
				void attemptPlay(videoElement);
			}
		};

		videoElement.addEventListener("play", handlePlay);
		videoElement.addEventListener("pause", handlePause);
		videoElement.addEventListener("canplay", handleCanPlay);

		return () => {
			videoElement.removeEventListener("play", handlePlay);
			videoElement.removeEventListener("pause", handlePause);
			videoElement.removeEventListener("canplay", handleCanPlay);
		};
	}, [attemptPlay, currentVideo, isInView]);

	return (
		<div className="bg-[#73383E] bg-opacity-10 relative w-full py-10 md:py-20">
			<PageStartDiv />
			<div className="flex flex-col justify-center items-center gap-[24px] pt-20 pb-16 max-w-[342px] md:max-w-[1280px] mx-auto px-4 md:px-6 xl:px-0">
				<h2 className="text-center text-[14px] tracking-widest leading-relaxed font-semibold uppercase text-[#73383E] font-poppins">
					{sectionData?.eyebrow || "Technological Advantage"}
				</h2>
				<p className="text-center text-[24px] font-normal leading-tight text-copyColor md:text-[48px]">
					{sectionData?.heading ||
						"Pioneering Dental Excellence with Cutting-Edge Innovations"}
				</p>
			</div>
			<div className="max-w-[80%] 2xl:max-w-[65%] mx-auto px-4 md:px-0">
				{techData.length > 0 ? (
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						className="w-full"
						setApi={setApi}>
						<CarouselContent className="-ml-1 items-stretch">
							{techData.map((tech) => (
								<CarouselItem
									key={tech.id}
									className="flex pl-1 sm:basis-1/2 2md:basis-1/3 xl:basis-1/4">
									<div className="h-full w-full p-1">
										<Card
											className={` ${
												activeCardId === tech.id
													? "bg-[#73383E]"
													: "bg-white"
											} flex h-full w-full min-h-[360px] flex-col items-start justify-start overflow-hidden pt-10 transition-colors duration-300 md:min-h-[423px] md:pt-14`}>
											<CardContent className="flex h-full w-full flex-col items-center justify-start p-6 md:p-8">
												<div
													className={`mb-6 md:mb-8 text-[#73383E] ${
														activeCardId === tech.id
															? "text-white"
															: "text-[#73383E]"
													} transition-colors duration-300`}>
													{renderIcon(tech)}
												</div>
												<h3
													className={`mb-4 text-center text-2xl font-semibold leading-tight tracking-tighter text-balance ${
														activeCardId === tech.id
															? "text-white"
															: "text-[#73383E]"
													} transition-colors duration-300`}>
													{tech.title}
												</h3>
												<p
													className={`text-center font-poppins text-sm font-normal leading-relaxed text-pretty ${
														activeCardId === tech.id
															? "text-white"
															: "text-[#1f0f11]"
													} transition-colors duration-300 md:text-base`}>
													{tech.description}
												</p>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="-left-5 top-1/2 z-20 -translate-y-1/2 border-[#73383E] bg-white text-[#73383E] hover:bg-white md:-left-12" />
						<CarouselNext className="-right-5 top-1/2 z-20 -translate-y-1/2 border-[#73383E] bg-white text-[#73383E] hover:bg-white md:-right-12" />
					</Carousel>
				) : (
					<div className="rounded-lg border border-dashed border-[#73383E]/40 bg-white/60 px-6 py-10 text-center text-[#73383E]">
						No Tech Advantage cards found in Sanity.
					</div>
				)}
			</div>
			<div className="mt-10 max-w-[90%] 2xl:max-w-[65%] mx-auto px-4 md:px-0">
				<motion.div
					initial={{ opacity: 0 }}
					animate={controls}
					className="w-full rounded-lg relative"
					transition={{ duration: 0.3 }}
					whileInView={{ opacity: 1 }}
					ref={containerRef}>
					{currentVideo ? (
						<>
							<video
								key={currentVideo}
								src={currentVideo}
								className="aspect-video w-full rounded-lg object-cover"
								ref={videoRef}
								autoPlay
								muted
								playsInline
								controls
								preload="metadata"
							/>
							{showPlayButton && isInView && (
								<button
									onClick={() => {
										const videoElement =
											videoRef.current;
										if (videoElement) {
											void attemptPlay(videoElement);
										}
									}}
									className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-copyColor bg-opacity-50 rounded-full p-4">
									Play
								</button>
							)}
						</>
					) : (
						<div className="aspect-video w-full rounded-lg border border-dashed border-[#73383E]/40 bg-white/60" />
					)}
				</motion.div>
			</div>
		</div>
	);
};
