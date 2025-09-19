/* eslint-disable @next/next/no-img-element */
import Slide from "./ui/animated-sections";
import { Button } from "./ui/button";

import { useIsMobile, useIsTablet } from "@/hooks/useIsMobile";
import Link from "next/link";
import { useState, useEffect } from "react";

export const HeroSlide1 = () => {
	const isMobile = useIsMobile();
	const isTablet = useIsTablet();

	return (
		<div className="w-full min-h-[600px] md:min-h-screen flex flex-col justify-between relative">
			{isMobile ? (
				<div className="w-full min-h-[600px] flex flex-col relative">
					<img
						src="/images/rarity-hero-team.webp"
						alt="Team Background"
						className="absolute inset-0 object-cover object-center w-full h-full"
						fetchPriority="high"
						sizes="100vw"
						style={{
							transform: "translateZ(0)",
							backfaceVisibility: "hidden",
							perspective: "1000px",
							willChange: "transform",
						}}
					/>
					<div className="flex-1 flex flex-col justify-between py-[8%] pb-[40%] px-[2%] relative z-10">
						<Slide
							delay={0.8}
							className="text-center max-w-[380px] mx-auto mt-[3.4rem] px-2 pl-4">
							<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-white mb-4">
								Best Dental Clinic
								<br />
								in Gurgaon
								<br />
								for Smile Makeovers,
								<br />
								Implants & Invisalign
							</h1>
							<p className="text-white mb-4">
								Delivering Unmatched Dental Excellence for 13+
								years
							</p>
						</Slide>
						<Slide
							delay={1.2}
							className="flex justify-center items-center mb-8">
							<Link
								href={"#formDiv"}
								passHref>
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
			) : isTablet ? (
				<div className="w-full min-h-[600px] relative h-full">
					<img
						src="/images/rarity-hero-team.webp"
						alt="Team Background"
						className="absolute inset-0 object-cover object-center w-full h-full"
						fetchPriority="high"
						sizes="100vw"
						style={{
							transform: "translateZ(0)",
							backfaceVisibility: "hidden",
							perspective: "1000px",
							willChange: "transform",
						}}
					/>
					<div className="flex-1 flex flex-col justify-between pt-[4%] pb-[4%] px-[2%] relative z-10 space-y-[10%] h-full">
						<Slide
							delay={0.8}
							className="text-center max-w-3xl mx-auto  px-2 pl-4">
							<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-white mb-4 pt-[12%]">
								Best Dental Clinic in Gurgaon for
								<br />
								Smile Makeovers, Implants & Invisalign
							</h1>
							<p className="text-white mb-4">
								Delivering Unmatched Dental Excellence for 13+
								years
							</p>
						</Slide>
						<Slide
							delay={1.2}
							className="flex justify-center items-center mb-8">
							<Link
								href={"#formDiv"}
								passHref>
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
			) : (
				<div className="w-full min-h-screen relative overflow-visible">
					<img
						src="/images/rarity-hero-team.webp"
						alt="Team Image"
						className="absolute top-0 left-0 w-full h-full object-cover object-right-top"
						fetchPriority="high"
						sizes="100vw"
					/>

					<div className="w-full flex flex-col justify-between items-center mb-8 xl:mb-0 px-6 xl:px-0 py-[3.8%] max-w-5xl h-[45%] mx-auto">
						<Slide
							delay={0.4}
							className="z-[1] flex flex-col items-start justify-center">
							<h1 className="text-[18px] md:text-[20px] lg:text-[24px] xl:text-[42px] 2xl:text-6xl leading-tight tracking-tighter text-white mb-3 xl:min-w-[600px] text-center w-full">
								Best Dental Clinic in Gurgaon for Smile
								Makeovers, <br className="2xl:hidden" />
								Implants & Invisalign
							</h1>
							<p className="text-white mb-6 xl:min-w-[600px] text-2xl text-center w-full">
								Delivering Unmatched Dental Excellence for over
								13 years
							</p>
						</Slide>
						<Slide
							delay={0.6}
							className="mt-6 xl:mt-12 flex justify-center items-center pl-[6%] 2xl:pl-4 ">
							<Link href={"#formDiv"}>
								<Button
									variant={"defaultWhite"}
									className="group relative px-[40px] py-[20px] gap-x-[16px] bg-white rounded-none h-auto md:h-[60px] z-10 w-[242px] md:w-auto overflow-hidden ">
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
			)}
		</div>
	);
};
