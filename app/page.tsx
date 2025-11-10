/* eslint-disable @next/next/no-img-element */
import { Gallery } from "@/components/gallery";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { ValuesSection } from "@/components/values";
import dynamic from "next/dynamic";

import { BeforeAfter } from "@/components/before-after";
import Slide from "@/components/ui/animated-sections";

import { fetchHomePageMetadata } from "@/sanity/sanity.query";
import TestimonialTestComponent from "@/components/testim-section-test";

// Cache and revalidate the homepage to reduce TTFB
export const revalidate = 3600; // seconds

import { HeroSectionEdit } from "@/components/her-section-edit";
const ParallaxBanner = dynamic(() =>
	import("@/components/ui/parallaxH").then((mod) => mod.ParallaxBanner)
);

const TechAdvantageSection = dynamic(() =>
	import("@/components/tech-advantage").then(
		(mod) => mod.TechAdvantageSection
	)
);

export async function generateMetadata() {
	const homeMetadata = await fetchHomePageMetadata();

	// console.log(homeMetadata);

	return {
		title: homeMetadata?.title || "Rarity Dental | Home",
		description:
			homeMetadata?.description ||
			"Rarity Dental Clinic in Gurugram offers 13+ years of expertise in cosmetic dentistry. Get advanced treatments for smile makeovers, Invisalign, and dental implants.",
		openGraph: {
			title: homeMetadata?.ogTitle || "Rarity Dental | Home",
			description:
				homeMetadata?.ogDescription ||
				"Rarity Dental Clinic in Gurugram offers 13+ years of expertise in cosmetic dentistry. Get advanced treatments for smile makeovers, Invisalign, and dental implants.",
			images: [
				{
					url: homeMetadata?.ogImage || "/images/og-img.jpg",
				},
			],
		},
	};
}

export default function Home() {
	return (
		<main className="flex flex-col items-center overflow-hidden justify-between z-[10000] relative">
			<HeroSectionEdit />
			<div className="w-full mb-[1.1%] xl:mt-0 bg-transparent flex overflow-hidden md:hidden  ">
				<Slide>
					<ParallaxBanner
						baseVelocity={50}
						childWidth={2430}>
						<img
							src="/images/awards-container.webp"
							width={2387}
							height={83}
							alt="Awards and Certifications"
							className="object-contain w-full h-auto"
							fetchPriority="high"
						/>
					</ParallaxBanner>
				</Slide>
			</div>
			<Slide>
				{/* <TestimonialsSection /> */}
				<TestimonialTestComponent />
			</Slide>
			<Team />
			<BeforeAfter />
			<Services />
			<TechAdvantageSection />
			<ValuesSection />
			<Gallery />
		</main>
	);
}
