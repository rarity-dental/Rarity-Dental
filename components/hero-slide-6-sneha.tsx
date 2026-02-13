import Slide from "./ui/animated-sections";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

type HeroSlide6Props = { disableAnimations?: boolean };

export const HeroSlide6 = ({ disableAnimations = false }: HeroSlide6Props) => {
	return (
		<div className="w-full min-h-[600px] md:min-h-screen flex flex-col justify-between relative">
			<div className="w-full min-h-[600px] xl:min-h-screen flex flex-col relative">
				<Image
					src="/images/hero-6-sneha.webp"
					alt="Dr. Sneha Singh award-winning dentist"
					fill
					priority
					fetchPriority="high"
					sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
					className="object-cover object-center xl:object-right-top"
				/>
				<div className="flex-1 flex flex-col justify-between py-[8%] pb-[40%] sm:pt-[4%] sm:pb-[4%] sm:space-y-[10%] xl:space-y-0 xl:py-[2.8%] px-[2%] xl:px-0 relative z-10 xl:items-center xl:max-w-5xl xl:min-h-[68dvh] xl:mx-auto">
					<Slide
						disabled={disableAnimations}
						delay={0.4}
						className="text-center max-w-[380px] sm:max-w-[600px] xl:max-w-5xl mx-auto sm:mt-16 xl:mt-0">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[42px] 2xl:text-6xl leading-tight tracking-tight xl:tracking-tighter text-white mb-2 xl:mb-1 2xl:mb-3 xl:min-w-[600px] text-center w-full">
							India&apos;s Leading Award-Winning Dentists
						</h1>
					</Slide>
					<Slide
						disabled={disableAnimations}
						delay={0.6}
						className="flex justify-center items-center mb-8 xl:mt-6 xl:pl-[6%] 2xl:pl-4">
						<Link href={"#formDiv"} passHref>
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
	);
};
