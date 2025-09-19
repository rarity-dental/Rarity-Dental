"use client";

import { useState } from "react";
import Slide from "./ui/animated-sections";
import { Button } from "./ui/button";
import LocalVideo from "./ui/videoPlayer";

import { useIsMobile, useIsTablet } from "@/hooks/useIsMobile";
import Link from "next/link";

export const HeroSlide3Video = () => {
	const isMobile = useIsMobile();
	const isTablet = useIsTablet();
	const [isVideoLoaded, setIsVideoLoaded] = useState(false);

	const handleVideoLoaded = () => {
		setIsVideoLoaded(true);
	};

	return (
		<div className="w-full min-h-[600px] md:min-h-screen flex flex-col justify-between relative">
			{isMobile ? (
				<div className="w-full h-[600px] flex flex-col relative">
					<div className="flex-1 flex flex-col justify-between py-8 px-[5%]">
						<div className="h-[200px] flex items-center">
							<Slide
								delay={0.8}
								className="text-center max-w-[340px] mx-auto">
								<p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-white mb-4">
									WorldClass Care at Rarity&apos;s
									State-of-the-Art Facility
								</p>
							</Slide>
						</div>
						<div className="h-[100px] flex items-center justify-center">
							<Slide
								delay={1.2}
								className="flex justify-center items-center">
								<Link href={"#formDiv"}>
									<Button
										variant={"defaultWhite"}
										className="group relative px-[40px] py-[20px] gap-x-[16px] bg-white rounded-none h-auto md:h-[60px] z-10 w-[242px] md:w-auto overflow-hidden">
										<span className="uppercase text-[12px] md:text-[14px] font-poppins font-semibold tracking-wide text-[#73383E] transition-colors duration-500 ease-out relative z-10 group-hover:text-white">
											Book a Consultation
										</span>
										<div className="w-[20px] h-[20px] bg-[url('/images/arrow-right-brown.svg')] bg-cover transition-all duration-500 ease-out relative z-10 group-hover:bg-[url('/images/arrow-right-white.svg')]" />
										<div className="absolute inset-0 bg-[#73383E] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
									</Button>
								</Link>
							</Slide>
						</div>
						<div className="h-[300px] flex justify-center items-center">
							<Slide delay={1.2}>
								<div
									className="w-full h-full relative"
									style={{
										transform: "translateZ(0)",
										backfaceVisibility: "hidden",
										perspective: "1000px",
										willChange: "transform",
									}}>
									<LocalVideo
										src="/videos/Laser-Dentistry.mp4"
										onVideoLoaded={handleVideoLoaded}
									/>
								</div>
							</Slide>
						</div>
					</div>
				</div>
			) : isTablet ? (
				<div className="w-full min-h-[600px] flex flex-col justify-between">
					<div className="flex-1 flex flex-col justify-between py-8 px-[5%]">
						<div className="h-[200px] flex items-center">
							<Slide
								delay={0.8}
								className="text-center max-w-[568px] lg:max-w-[760px] mx-auto">
								<p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-white mb-4">
									WorldClass Care at Rarity&apos;s
									State-of-the-Art Facility
								</p>
							</Slide>
						</div>
						<div className="h-[100px] flex items-center justify-center">
							<Slide
								delay={1.2}
								className="flex justify-center items-center">
								<Link href={"#formDiv"}>
									<Button
										variant={"defaultWhite"}
										className="group relative px-[40px] py-[20px] gap-x-[16px] bg-white rounded-none h-auto md:h-[60px] z-10 w-[242px] md:w-auto overflow-hidden">
										<span className="uppercase text-[12px] md:text-[14px] font-poppins font-semibold tracking-wide text-[#73383E] transition-colors duration-500 ease-out relative z-10 group-hover:text-white">
											Book a Consultation
										</span>
										<div className="w-[20px] h-[20px] bg-[url('/images/arrow-right-brown.svg')] bg-cover transition-all duration-500 ease-out relative z-10 group-hover:bg-[url('/images/arrow-right-white.svg')]" />
										<div className="absolute inset-0 bg-[#73383E] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
									</Button>
								</Link>
							</Slide>
						</div>
					</div>
					<div className="h-[300px] flex justify-center items-center mb-8">
						<LocalVideo
							src="/videos/Laser-Dentistry.mp4"
							onVideoLoaded={handleVideoLoaded}
						/>
					</div>
				</div>
			) : (
				<div className="w-full min-h-screen flex-grow flex flex-col xl:flex-row items-start pt-[10%] justify-between relative overflow-visible">
					<Slide
						delay={0.4}
						className="h-full">
						<div className="w-full h-full flex flex-col justify-center">
							<LocalVideo
								src="/videos/Laser-Dentistry.mp4"
								onVideoLoaded={handleVideoLoaded}
							/>
						</div>
					</Slide>
					<div className="w-[45%] flex flex-col justify-center items-center mt-[5%] mr-[15%]">
						<div className="h-[200px] flex items-center">
							<Slide delay={0.6}>
								<p className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[36px] 4xl:text-[48px] leading-tight tracking-tighter text-white mb-6">
									World Class Care at Rarity&apos;s
									State-of-the-Art Facility
								</p>
							</Slide>
						</div>
						<div className="h-[100px] flex items-center">
							<Slide
								delay={0.8}
								className="mt-[6%] 2xl:mt-[4%]">
								<Link href={"#formDiv"}>
									<Button
										variant={"defaultWhite"}
										className="group relative px-[40px] py-[20px] gap-x-[16px] bg-white rounded-none h-auto md:h-[60px] z-10 w-[242px] md:w-auto overflow-hidden">
										<span className="uppercase text-[12px] md:text-[14px] font-poppins font-semibold tracking-wide text-[#73383E] transition-colors duration-500 ease-out relative z-10 group-hover:text-white">
											Book a Consultation
										</span>
										<div className="w-[20px] h-[20px] bg-[url('/images/arrow-right-brown.svg')] bg-cover transition-all duration-500 ease-out relative z-10 group-hover:bg-[url('/images/arrow-right-white.svg')]" />
										<div className="absolute inset-0 bg-[#73383E] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
									</Button>
								</Link>
							</Slide>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
