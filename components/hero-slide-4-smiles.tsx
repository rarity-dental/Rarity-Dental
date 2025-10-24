/* eslint-disable @next/next/no-img-element */
import Slide from "./ui/animated-sections";
import { Button } from "./ui/button";

import { useIsMobile, useIsTablet } from "@/hooks/useIsMobile";
import Link from "next/link";

export const HeroSlide4 = () => {
	const isMobile = useIsMobile();
	const isTablet = useIsTablet();

	return (
		<div className="w-full min-h-[600px] md:min-h-screen flex flex-col justify-between relative">
			{isMobile ? (
				<div className="w-full h-[600px] flex flex-col relative">
					<div className="flex-1 flex flex-col justify-between p-8 px-[5%]">
						<div className="h-[200px] flex items-center">
							<Slide
								delay={0.8}
								className="text-center max-w-[340px] mx-auto">
								<p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-white ">
									Cosmetic Dentistry Par Excellence:
									Specializing in Impeccable Treatments for
									Perfect Smiles
								</p>
							</Slide>
						</div>
						<div className="h-[100px] flex items-center justify-center mb-12">
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
						<div className="h-[200px] relative flex justify-center items-center">
                        <img
                            src="/images/hs4-img.webp"
                            loading="lazy"
                            fetchPriority="low"
                            decoding="async"
                            sizes="max(100vw, 700px)"
                            alt="Team Image"
                            className="object-contain object-bottom ml-[0%] absolute inset-0 w-full h-full"
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
								className="text-center max-w-[600px] mx-auto mt-16">
								<p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-white mb-4">
									Cosmetic Dentistry Par Excellence:
									Specializing in Impeccable Treatments for
									Perfect Smiles
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
					<div className="h-[300px] relative flex justify-center items-center mb-8">
                        <img
                            src="/images/hs4-img.webp"
                            loading="lazy"
                            fetchPriority="low"
                            decoding="async"
                            sizes="max(100vw, 700px)"
                            alt="Team Image"
                            className="object-contain object-bottom ml-[0%] scale-[150%] absolute inset-0 w-full h-full"
                        />
					</div>
				</div>
			) : (
				<div className="w-full min-h-screen flex-grow flex flex-col relative overflow-visible">
					<div className="absolute w-1/2 h-[68%] bottom-[20%] -right-2">
						<Slide
							delay={0.4}
							className="relative h-[70%]">
                            <img
                                src="/images/hs4-img.webp"
                                loading="lazy"
                                fetchPriority="low"
                                decoding="async"
                                sizes="max(100vw, 700px)"
                                alt="Team Image"
                                className="object-contain absolute inset-0 w-full h-full"
                            />
						</Slide>
					</div>
					<div className="w-full h-full flex flex-col justify-start mb-8 xl:mb-0 px-6 xl:px-12 py-8 xl:pt-[8%] 2xl:pt-[11%] max-w-6xl 4xl:max-w-7xl mx-auto">
						<div className="h-[200px] flex items-center">
							<Slide
								delay={0.6}
								className="xl:w-[680px] 4xl:w-[800px]">
								<p
									className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl 4xl:text-6xl tracking-tight text-white mb-4"
									style={{
										lineHeight: "1.4",
									}}>
									Cosmetic Dentistry Par Excellence:
									Specializing in Impeccable Treatments for
									Perfect Smiles
								</p>
							</Slide>
						</div>
						<div className="h-[100px] flex items-center">
							<Slide
								delay={0.8}
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
