/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";

import Slide from "@/components/ui/animated-sections";

const ValuesSection = dynamic(() =>
	import("@/components/values").then((mod) => mod.ValuesSection)
);

import { fetchHomePageMetadata } from "@/sanity/sanity.query";

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

// Lazy-load heavy below-fold sections to reduce initial JS bundle
const TestimonialTestComponent = dynamic(
	() => import("@/components/testim-section-test")
);

const Team = dynamic(() =>
	import("@/components/team").then((mod) => mod.Team)
);

const BeforeAfter = dynamic(() =>
	import("@/components/before-after").then((mod) => mod.BeforeAfter)
);

const Services = dynamic(() =>
	import("@/components/services").then((mod) => mod.Services)
);

const Gallery = dynamic(() =>
	import("@/components/gallery").then((mod) => mod.Gallery)
);

export async function generateMetadata() {
	const homeMetadata = await fetchHomePageMetadata();

	return {
		title: homeMetadata?.title || "Rarity Dental | Home",
		description:
			homeMetadata?.description ||
			"Rarity Dental Clinic in Gurugram offers 13+ years of expertise in cosmetic dentistry. Get advanced treatments for smile makeovers, Invisalign, and dental implants.",
		openGraph: {
			title: homeMetadata?.ogTitle || "Rarity Dental | Home",
			description:
				homeMetadata?.ogDescription ||
				"Rarity Dental Clinic in Gurugram offers 13+ years of expertise in cosmetic dentistry. Get advanced treatments for smile makeovers, Invisalign, and dental implants.",
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
		<main className="flex flex-col items-center overflow-hidden justify-between z-10 relative">
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
							fetchPriority="low"
						/>
					</ParallaxBanner>
				</Slide>
			</div>
			<Slide>
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
