/* eslint-disable @next/next/no-img-element */

"use client";

import { Gallery } from "@/components/gallery";
import { Team } from "@/components/team";
import Slide from "@/components/ui/animated-sections";
import { Card } from "@/components/ui/card";
import {
	Award,
	CheckCircle2,
	Globe,
	Heart,
	SeparatorHorizontal,
	ShieldCheck,
	Sparkles,
	Users,
} from "lucide-react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import React, { useEffect, useState } from "react";

export const metadata: Metadata = {
	title: "About Us",
};

const ParallaxBanner = dynamic(
	() =>
		import("../../../components/ui/parallaxH").then(
			(mod) => mod.ParallaxBanner
		),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	}
);

const stats = [
	{ number: "15,000+", label: "Patients Served", icon: Users },
	{ number: "32+", label: "Countries", icon: Globe },
	{ number: "15+", label: "Years Experience", icon: Award },
	{ number: "100%", label: "Success Rate", icon: Sparkles },
];

const trustReasons = [
	{
		icon: Globe,
		title: "Globally Trained Experts",
		description:
			"Our doctors are trained in the US, UK, and Germany, bringing international expertise directly to you.",
		color: "bg-[#73383E]/10 text-[#73383E]",
	},
	{
		icon: Heart,
		title: "Personal Touch",
		description:
			"We take time to listen, understand your story, and craft treatment plans that feel right for you.",
		color: "bg-[#73383E]/10 text-[#73383E]",
	},
	{
		icon: ShieldCheck,
		title: "International Standards",
		description:
			"From sterilisation to aftercare, we follow the strictest global hygiene protocols.",
		color: "bg-[#73383E]/10 text-[#73383E]",
	},
	{
		icon: Sparkles,
		title: "State-of-the-Art",
		description:
			"CBCT scans, digital smile design, and AI-based planning tools ensure precision.",
		color: "bg-[#73383E]/10 text-[#73383E]",
	},
	{
		icon: Users,
		title: "Seamless Experience",
		description:
			"For international patients, we manage everything—transfers, accommodation, treatment, aftercare.",
		color: "bg-[#73383E]/10 text-[#73383E]",
	},
	{
		icon: Award,
		title: "Proven Trust",
		description:
			"Over 15,000 patients from 32+ countries have trusted us for life-changing dental journeys.",
		color: "bg-[#73383E]/10 text-[#73383E]",
	},
];

export default function AboutUsPage() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div className="  pt-[140px] md:pt-[120px]">
			{/* Hero Section */}

			{/* Hero with Overlay */}
			<header className="relative bg-[#73383E] to-accent text-primary-foreground py-32 overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(115,56,62,0.1),transparent)]"></div>
				<div
					className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
					<p className="text-sm uppercase tracking-[0.3em] mb-4 opacity-90">
						Premium Dental Excellence
					</p>
					<h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
						About Us
					</h1>
					<div className="w-32 h-1 bg-[#ffffff]/50 mx-auto mb-6"></div>
					<p className="text-2xl md:text-3xl opacity-95 font-light max-w-3xl mx-auto">
						Where World-Class Expertise Meets Warmth
					</p>
				</div>
				<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#73383E] to-transparent"></div>
			</header>

			{/* <section className="bg-[url('/images/herobg_about_mobile.webp')] bg-contain bg-no-repeat bg-[#73383E]/90 w-full bg-center h-[80vh]"></section> */}
			{/* Stats Section - Animated */}
			<section className="py-16  relative z-20 px-4">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
						{stats.map((stat, index) => {
							const Icon = stat.icon;
							return (
								<Card
									key={index}
									className="p-6 text-center bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
									style={{
										animationDelay: `${index * 100}ms`,
									}}>
									<div className="mb-3 flex justify-center">
										<div className="p-3 rounded-full bg-[#73383E]/10 group-hover:bg-[#73383E]/20 transition-colors">
											<Icon className="w-6 h-6 text-[#73383E]" />
										</div>
									</div>
									<div className="text-3xl md:text-4xl font-bold text-[#73383E] mb-2">
										{stat.number}
									</div>
									<div className="text-sm text-muted-foreground uppercase tracking-wide">
										{stat.label}
									</div>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			<div className="container mx-auto px-6 py-16 max-w-7xl">
				{/* What Makes Us a Rarity - Split Layout */}
				<section className="mb-32">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div className="order-2 md:order-1 animate-slide-in-left">
							<div className="relative">
								<div className="absolute -top-8 -left-8 w-32 h-32 bg-[#73383E]/5 rounded-full blur-3xl"></div>
								<div className="relative bg-gradient-to-br from-[#73383E]/5 to-accent/5 p-12 rounded-2xl border border-border/50">
									<div className="space-y-6">
										<div className="flex items-center gap-4">
											<div className="p-3 rounded-full bg-[#73383E]/10">
												<Sparkles className="w-8 h-8 text-[#73383E]" />
											</div>
											<h3 className="text-2xl font-bold">
												Rare Excellence
											</h3>
										</div>
										<p className="text-foreground/80 leading-relaxed">
											A beautiful, healthy smile is
											rare—and precious. We built a space
											where world-class expertise meets
											warmth and empathy.
										</p>
										<div className="flex items-center gap-4 pt-4">
											<div className="p-3 rounded-full bg-[#73383E]/10">
												<Heart className="w-8 h-8 text-[#73383E]" />
											</div>
											<h3 className="text-2xl font-bold">
												Premium Care
											</h3>
										</div>
										<p className="text-foreground/80 leading-relaxed">
											From implants to smile makeovers,
											every treatment restores confidence,
											comfort, and joy.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="order-1 md:order-2 animate-slide-in-right">
							<p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
								OUR STORY
							</p>
							<h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
								What Makes Us a <br />
								<span className="text-[#73383E]">Rarity</span>
							</h2>
							<div className="space-y-6">
								<p className="text-lg leading-relaxed text-foreground/90">
									At Rarity Dental, we believe a beautiful,
									healthy smile is rare—and precious.
									That&apos;s why we built a space where
									world-class expertise meets warmth and
									empathy. Our name reflects our promise: to
									offer care so rare in its quality and
									experience that it stays with you for life.
								</p>
								<p className="text-lg leading-relaxed text-foreground/90">
									We are not just a dental clinic; we are a
									premium destination for modern dentistry.
									From dental implants and full mouth
									rehabilitation to Invisalign, braces,
									veneers, crowns, and smile makeovers, every
									treatment is carefully designed to give you
									more than just teeth—it&apos;s about
									restoring confidence, comfort, and joy.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Who We're For - with Background */}
				<section className="mb-32">
					<div className="relative bg-[#73383E]/5 rounded-3xl p-12 md:p-16 border border-border/50">
						<div className="absolute top-0 right-0 w-64 h-64 bg-[#73383E]/5 rounded-full blur-3xl -z-10"></div>
						<div className="text-center mb-12">
							<p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
								FOR YOU
							</p>
							<h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
								Who We&apos;re For
							</h2>
							<SeparatorHorizontal className="w-24 mx-auto bg-[#73383E] h-0.5" />
						</div>

						<div className="prose prose-lg max-w-4xl mx-auto text-center space-y-6">
							<p className="text-lg leading-relaxed text-foreground/90">
								Rarity Dental is for anyone who wants the very
								best for their smile. Whether you are from{" "}
								<span className="font-semibold text-[#73383E]">
									New Delhi, Gurgaon, Mumbai, Indore, Pune,
									Bangalore, Surat
								</span>
								, or any other part of India—or traveling from
								abroad such as{" "}
								<span className="font-semibold text-[#73383E]">
									Australia, New Zealand, the United States,
									Canada, the UK, Europe, or the Middle East
								</span>
								—we welcome you like family.
							</p>
							<p className="text-lg leading-relaxed text-[#73383E]/90">
								We provide world-class dental care at a fraction
								of global costs, without ever compromising on
								safety, quality, or comfort.
							</p>
							<div className="pt-8">
								<Card className="inline-block px-8 py-4 bg-[#73383E] text-primary-foreground border-0 shadow-lg group">
									<a
										href="#formDiv"
										className="text-xl font-semibold cursor-pointer group-hover:scale-105 transition-transform duration-300">
										If you&apos;ve been hiding your smile,
										we&apos;re here to help.
									</a>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* Why Patients Trust Us - Interactive Cards with Icons */}
				<section className="mb-32">
					<div className="text-center mb-16">
						<p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
							EXCELLENCE
						</p>
						<h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
							Why Patients Trust Us
						</h2>
						<SeparatorHorizontal className="w-24 mx-auto bg-[#73383E] h-0.5" />
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{trustReasons.map((reason, index) => {
							const Icon = reason.icon;
							return (
								<Card
									key={index}
									className="p-8 bg-card border-border hover:border-[#73383E]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer relative overflow-hidden">
									<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#73383E]/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
									<div className="relative z-10">
										<div
											className={`w-16 h-16 rounded-xl ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
											<Icon className="w-8 h-8" />
										</div>
										<h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
											{reason.title}
										</h3>
										<p className="text-foreground/80 leading-relaxed">
											{reason.description}
										</p>
									</div>
								</Card>
							);
						})}
					</div>
				</section>

				{/* Mission, Vision, Goals - Card Layout */}
				<section className="mb-32">
					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Mission */}
						<Card className="p-10 bg-[#73383E] text-primary-foreground border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
							<div className="text-center">
								<div className="mb-6">
									<div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
										<Heart className="w-8 h-8" />
									</div>
									<p className="text-xs uppercase tracking-widest opacity-90 mb-2 font-medium">
										OUR
									</p>
									<h2 className="text-3xl md:text-4xl font-bold">
										Mission
									</h2>
								</div>
								<SeparatorHorizontal className="w-16 mx-auto bg-primary-foreground/30 h-0.5 mb-6" />
								<p className="text-base leading-relaxed opacity-95">
									To make world-class smiles accessible by
									blending global expertise with heartfelt
									care—ensuring that every patient feels
									heard, valued, and transformed.
								</p>
							</div>
						</Card>

						{/* Vision */}
						<Card className="p-10 bg-[#73383E] text-primary-foreground border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
							<div className="text-center">
								<div className="mb-6">
									<div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
										<Sparkles className="w-8 h-8" />
									</div>
									<p className="text-xs uppercase tracking-widest opacity-90 mb-2 font-medium">
										OUR
									</p>
									<h2 className="text-3xl md:text-4xl font-bold">
										Vision
									</h2>
								</div>
								<SeparatorHorizontal className="w-16 mx-auto bg-primary-foreground/30 h-0.5 mb-6" />
								<p className="text-base leading-relaxed opacity-95">
									To be the most trusted premium dental
									practice in the world, known for creating
									confident smiles and unforgettable
									experiences.
								</p>
							</div>
						</Card>

						{/* Goals */}
						<Card className="p-10 bg-[#73383E] to-accent text-primary-foreground border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
							<div className="text-center">
								<div className="mb-6">
									<div className="w-16 h-16 bg-[#73383E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
										<Award className="w-8 h-8" />
									</div>
									<p className="text-xs uppercase tracking-widest opacity-90 mb-2 font-medium">
										OUR
									</p>
									<h2 className="text-3xl md:text-4xl font-bold">
										Goals
									</h2>
								</div>
								<SeparatorHorizontal className="w-16 mx-auto bg-primary-foreground/30 h-0.5 mb-6" />
								<ul className="space-y-3 text-left">
									<li className="flex items-start gap-2">
										<CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-90" />
										<span className="text-sm leading-relaxed opacity-95">
											Exceed patient expectations in every
											smile
										</span>
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-90" />
										<span className="text-sm leading-relaxed opacity-95">
											Meet the highest global standards
										</span>
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-90" />
										<span className="text-sm leading-relaxed opacity-95">
											Lead premium dental tourism in India
										</span>
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-90" />
										<span className="text-sm leading-relaxed opacity-95">
											Give lasting confidence and
											happiness
										</span>
									</li>
								</ul>
							</div>
						</Card>
					</div>
				</section>

				{/* Why Choose - Final CTA */}
				<section className="mb-20">
					<div className="relative bg-[#73383E] text-primary-foreground rounded-3xl p-16 md:p-20 text-center shadow-2xl overflow-hidden">
						{/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(115,56,62,0.1),transparent)]"></div> */}
						<div className="relative z-10">
							<div className="mb-6 flex justify-center">
								<div className="p-4 bg-[#73383E]/20 rounded-full animate-float">
									<Sparkles className="w-12 h-12" />
								</div>
							</div>
							<h2 className="text-5xl md:text-6xl font-bold mb-8">
								Why Choose Rarity Dental?
							</h2>
							<p className="text-2xl md:text-3xl mb-8 opacity-95 font-light max-w-4xl mx-auto">
								Because your smile deserves more than
								treatment—it deserves artistry, science, and
								heart.
							</p>
							<SeparatorHorizontal className="w-32 mx-auto bg-primary-foreground/30 h-0.5 my-10" />
							<p className="text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
								We don&apos;t just fix teeth—we change lives.
								Our patients leave with healthier smiles,
								brighter confidence, and the peace of knowing
								they&apos;ve experienced the best dental care in
								the world.
							</p>
						</div>
					</div>
				</section>
			</div>

			{/* <div className="max-w-[340px] md:max-w-[80%] lg:max-w-[70%] 2xl:max-w-[65%] mx-auto"> */}
			<Team />
			{/* </div> */}

			<div className="w-full mb-[1.1%] xl:mt-0 flex overflow-hidden">
				<Slide>
					<ParallaxBanner
						baseVelocity={50}
						childWidth={2430}>
						<img
							src="/images/awards-container.webp"
							width={2387}
							height={83}
							alt="My Image"
							className="object-contain w-full h-auto"
							fetchPriority="high"
						/>
					</ParallaxBanner>
				</Slide>
			</div>

			<Gallery />
		</div>
	);
}
