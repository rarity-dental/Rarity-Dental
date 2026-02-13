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
import Autoplay from "embla-carousel-autoplay";

export const techData = [
	{
		id: 1,
		icon: <PrintIcon />,
		title: "3D CT Scan",
		description:
			"Rarity uses advanced 3D printing for precise dental prosthetics, ensuring optimal fit and aesthetics.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2F3D%20CBCT%20Video.mp4?alt=media&token=dc67c55a-d24c-4e57-80ce-29417d8422b9",
	},

	{
		id: 2,
		icon: <DSDIcon />,
		title: "Digital Smile Design (DSD)",
		description:
			"Our intraoral scanner creates accurate 3D models of teeth and gums, eliminating messy impressions and ensuring precise treatment planning.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FInvisalign-Video.mp4?alt=media&token=651b5901-3f03-430c-a970-9b4330a58fb8",
	},
	{
		id: 3,
		icon: <LaserIcon />,
		title: "BIOLASE Dentistry",
		description:
			"BIOLASE lasers enable minimally invasive procedures with reduced pain, faster healing, and improved precision for various dental treatments.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FLaser-Dentistry.mp4?alt=media&token=c9be53e1-4b77-4468-b5cd-7c18598c7a7b",
	},
	{
		id: 4,
		icon: <ARIcon />,
		title: "Tek-Scan Analysis",
		description:
			"JVA is a non-invasive tool detecting TMJ disorders early by analyzing jaw joint sounds and movements for personalized treatment plans.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FTek%20Scan%20Bite%20Assessment.mp4?alt=media&token=682bb44d-790b-4b44-bad7-d6bc4353a9a2",
	},
	{
		id: 5,
		icon: <DSDIcon />,
		title: "Joint Vibration Analysis",
		description:
			"JVA is a non-invasive tool detecting TMJ disorders early by analyzing jaw joint sounds and movements for personalized treatment plans.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FJOINT%20VIBRATION%20ANALYSIS.mp4?alt=media&token=b8bd314a-48d0-4b25-a6c3-619703957bc9",
	},
	{
		id: 6,
		icon: <DSDIcon />,
		title: "Microscope Assisted Dentistry",
		description:
			"Microscope-assisted dentistry utilizes a high-resolution 3D model of the teeth to provide precise and detailed treatment planning.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FMicroscope%20Dentistry.mp4?alt=media&token=4a69791c-e3af-4403-b9b2-742a59065462",
	},
	{
		id: 7,
		icon: <DSDIcon />,
		title: "ZOOM Teeth Whitening",
		description:
			"ZOOM Teeth Whitening is a high-tech teeth whitening device that uses a high-resolution 3D model of the teeth to provide precise and detailed treatment planning.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FPhilips%20Zoom%20Teeth%20Whitening.mp4?alt=media&token=0abc5dc3-baf7-495e-9b3d-622b3472d12c",
	},
	{
		id: 8,
		icon: <DSDIcon />,
		title: "Anti Snoring Device",
		description:
			"Anti Snoring Device is a high-tech teeth whitening device that uses a high-resolution 3D model of the teeth to provide precise and detailed treatment planning.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FAnti%20Snoring%20Device.mp4?alt=media&token=688243af-9186-4fbe-bf09-b18da39532df",
	},
	{
		id: 9,
		icon: <DSDIcon />,
		title: "TENS Therapy",
		description:
			"TENS Therapy is a high-tech teeth whitening device that uses a high-resolution 3D model of the teeth to provide precise and detailed treatment planning.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FLaser-Dentistry.mp4?alt=media&token=c9be53e1-4b77-4468-b5cd-7c18598c7a7b",
	},
	{
		id: 10,
		icon: <DSDIcon />,
		title: "Conscious Sedation Dentistry",
		description:
			"This is a high-tech teeth whitening device that uses a high-resolution 3D model of the teeth to provide precise and detailed treatment planning.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FInvisalign-Video.mp4?alt=media&token=651b5901-3f03-430c-a970-9b4330a58fb8",
	},
];

export const TechAdvantageSection = () => {
	const [api, setApi] = React.useState<CarouselApi>();
	const [currentVideo, setCurrentVideo] = useState(techData[0].video);
	const [activeCardId, setActiveCardId] = useState(techData[0].id);
	const videoRef = useRef<HTMLVideoElement>(null);
	const controls = useAnimation();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showPlayButton, setShowPlayButton] = useState(false);

	const containerRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(containerRef, { once: false, amount: 0.5 });

	const goToNextSlide = useCallback(() => {
		if (api) {
			const nextIndex = (currentIndex + 1) % techData.length;
			api.scrollTo(nextIndex);
		}
	}, [api, currentIndex]);

	const attemptPlay = async (videoElement: HTMLVideoElement) => {
		try {
			await videoElement.play();
			setShowPlayButton(false);
		} catch (error) {
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
	};

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
	}, [api]);

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

		if (videoElement && isInView) {
			attemptPlay(videoElement);
		} else {
			videoElement?.pause();
		}
	}, [currentVideo, isInView]);

	useEffect(() => {
		const videoElement = videoRef.current;
		if (!videoElement) return;

		const handlePlay = () => setShowPlayButton(false);
		const handlePause = () => setShowPlayButton(true);

		videoElement.addEventListener("play", handlePlay);
		videoElement.addEventListener("pause", handlePause);

		return () => {
			videoElement.removeEventListener("play", handlePlay);
			videoElement.removeEventListener("pause", handlePause);
		};
	}, []);

	return (
		<div className="bg-[#73383E] bg-opacity-10 relative w-full py-10 md:py-20">
			<PageStartDiv />
			<div className="flex flex-col justify-center items-center gap-[24px] pt-20 pb-16 max-w-[342px] md:max-w-[1280px] mx-auto">
				<h2 className="text-center text-[14px] tracking-widest leading-relaxed font-semibold uppercase text-[#73383E] font-poppins">
					Technological Advantage
				</h2>
				<p className="text-center text-[24px] md:text-[48px] font-normal text-copyColor">
					Pioneering Dental Excellence with Cutting-Edge Innovations
				</p>
			</div>
			<div className="max-w-[80%] 2xl:max-w-[65%] mx-auto">
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full"
					setApi={setApi}>
					<CarouselContent className="-ml-1">
						{techData.map((tech) => (
							<CarouselItem
								key={tech.id}
								className="pl-1 sm:basis-1/2 2md:basis-1/3 xl:basis-1/4">
								<div className="p-1 ">
									<Card
										className={` ${
											activeCardId === tech.id
												? "bg-[#73383E]"
												: "bg-white"
										} transition-colors duration-300 h-[360px] md:h-[423px] my-auto max-w-[342px] lg:max-w-[308px] object-center flex flex-col justify-start items-start group pt-[18%]`}>
										<CardContent className="flex flex-col justify-center items-center p-6 ">
											<div
												className={`mb-6 md:mb-8 text-[#73383E] 
						  ${
								activeCardId === tech.id
									? "text-white"
									: "text-[#73383E]"
							} transition-colors duration-300`}>
												{tech.icon}
											</div>
											<h3
												className={`text-2xl font-semibold mb-4 text-center ${
													activeCardId === tech.id
														? "text-white"
														: "text-[#73383E]"
												} transition-colors duration-300 tracking-tighter`}>
												{tech.title}
											</h3>
											<p
												className={`text-sm md:text-base text-center font-poppins font-normal ${
													activeCardId === tech.id
														? "text-white"
														: "text-[#1f0f11]"
												}  transition-colors duration-300`}>
												{tech.description}
											</p>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-left-[10%] top-1/2 -translate-y-1/2" />
					<CarouselNext className="-right-[10%] top-1/2 -translate-y-1/2" />
				</Carousel>
			</div>
			<div className="mt-10 max-w-[90%] 2xl:max-w-[65%] mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={controls}
					className="w-full rounded-lg relative"
					transition={{ duration: 0.3 }}
					whileInView={{ opacity: 1 }}
					ref={containerRef}>
					<video
						key={currentVideo}
						src={currentVideo}
						className="w-full rounded-lg"
						ref={videoRef}
						muted
						playsInline
						controls
					/>
					{showPlayButton && isInView && (
						<button
							onClick={() => videoRef.current?.play()}
							className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-copyColor bg-opacity-50 rounded-full p-4">
							Play
						</button>
					)}
				</motion.div>
			</div>
		</div>
	);
};
