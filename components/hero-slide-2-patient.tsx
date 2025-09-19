/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Slide from "./ui/animated-sections";
import { Button } from "./ui/button";

import { useIsMobile, useIsTablet } from "@/hooks/useIsMobile";
import Link from "next/link";

const ParallaxBanner = dynamic(
	() => import("./ui/parallaxH").then((mod) => mod.ParallaxBanner),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	}
);

export const HeroSlide2 = () => {
	const isMobile = useIsMobile();
	const isTablet = useIsTablet();

	return (
		<div className="w-full min-h-[600px] md:min-h-screen flex flex-col justify-between relative">
			{isMobile ? (
				<div className="w-full h-[600px] flex flex-col relative">
					<div className="flex-1 flex flex-col justify-between py-8 px-[5%]">
						<div className="h-[200px] flex items-center">
							<Slide
								delay={0.8}
								className="text-center max-w-[380px] px-2 mx-auto">
								<p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-white mb-4">
									Trusted by Clients From Over 30 Countries
								</p>
								<span className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-tight text-white">
									in Delivering Flawless Smiles and
									World-Class Care
								</span>
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
						<div className="h-[300px] relative flex justify-center items-center">
							<img
								src="/images/hs2-italian-img.webp"
								fetchPriority="high"
								sizes="max(100vw, 700px)"
								alt="Team Image"
								className="absolute object-cover object-right-bottom ml-8 inset-0 w-full h-full"
								style={{
									transform: "translateZ(0)",
									backfaceVisibility: "hidden",
									perspective: "1000px",
									willChange: "transform",
								}}
							/>
						</div>
					</div>
				</div>
			) : isTablet ? (
				<div className="w-full min-h-[600px] flex flex-col justify-between">
					<div className="flex-1 flex flex-col justify-between py-8 px-[5%]">
						<div className="h-[200px] flex items-center">
							<Slide
								delay={0.8}
								className="text-center max-w-[600px] mx-auto">
								<p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-white mb-4">
									Trusted by Clients From Over 30 Countries
								</p>
								<span className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-tight text-white">
									in Delivering Flawless Smiles and
									World-Class Care
								</span>
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
					<div className="h-[300px] relative flex justify-center items-center mb-8">
						<img
							src="/images/hs2-italian-img.webp"
							fetchPriority="high"
							sizes="max(100vw, 700px)"
							alt="Team Image"
							className="object-contain object-bottom ml-[5%] scale-[150%] absolute inset-0 w-full h-full"
						/>
					</div>
				</div>
			) : (
				<div className="w-full min-h-screen flex-grow flex flex-col items-center justify-between relative overflow-visible">
					<Slide
						delay={0.4}
						className="absolute w-1/2 h-[75%] bottom-[0%] -right-[3%]">
						<div className="h-full relative">
							<img
								src="/images/hs2-italian-img.webp"
								fetchPriority="high"
								sizes="max(100vw, 700px)"
								alt="Team Image"
								className="object-contain object-bottom absolute inset-0 w-full h-full"
							/>
						</div>
					</Slide>

					<div className="w-full h-full flex flex-col justify-center mb-8 xl:mb-0 px-6 xl:px-12 py-8 xl:py-12 2xl:pt-[13%] max-w-5xl mx-auto">
						<div className="h-[200px] flex items-center">
							<Slide
								delay={0.6}
								className="xl:w-[600px]">
								<p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-white mb-4">
									Trusted by Clients From Over 30 Countries
								</p>
								<span className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-tight text-white">
									in Delivering Flawless Smiles and
									World-Class Care
								</span>
							</Slide>
						</div>
						<div className="h-[100px] flex items-center">
							<Slide
								delay={0.6}
								className="mt-6 xl:mt-12">
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
