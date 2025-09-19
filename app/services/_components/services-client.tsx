/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

import { urlFor } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StandalonePage } from "@/types";
import Slide from "@/components/ui/animated-sections";

// Define animation variants for staggering
const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2, // Adjust this value for more/less delay
			delayChildren: 1, // Adjust this value for more/less delay
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, type: "spring", bounce: 0.3 },
	},
};

type ColorScheme = {
	text: string;
	bg: string;
	border: string;
	hoverText: string;
	hoverBg: string;
	hoverBorder: string;
};

interface ServicesClientPageProps {
	standalonePages: StandalonePage[];
}

export default function ServicesClientPage({
	standalonePages,
}: ServicesClientPageProps) {
	const [selectedTag, setSelectedTag] = useState<string>("All");
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	const colorVariants: Record<
		| "smile-designing"
		| "advanced-technology"
		| "single-day-dentistry"
		| "specialised-treatments"
		| "default",
		{
			text: string;
			bg: string;
			border: string;
			hoverText: string;
			hoverBg: string;
			hoverBorder: string;
			inactiveText?: string;
			inactiveBg?: string;
			inactiveBorder?: string;
			inactiveHoverText?: string;
			inactiveHoverBg?: string;
			inactiveHoverBorder?: string;
		}
	> = {
		"smile-designing": {
			inactiveText: "text-gray-700",
			inactiveBg: "bg-gray-50",
			inactiveBorder: "border-gray-200",
			inactiveHoverText: "text-gray-800",
			inactiveHoverBg: "bg-gray-50",
			inactiveHoverBorder: "border-gray-300",
			text: "text-blue-700",
			bg: "bg-blue-200",
			border: "border-blue-300",
			hoverText: "text-blue-800",
			hoverBg: "bg-blue-300",
			hoverBorder: "border-blue-400",
		},
		"advanced-technology": {
			inactiveText: "text-gray-700",
			inactiveBg: "bg-gray-50",
			inactiveBorder: "border-gray-200",
			inactiveHoverText: "text-gray-800",
			inactiveHoverBg: "bg-gray-50",
			inactiveHoverBorder: "border-gray-300",
			text: "text-green-700",
			bg: "bg-green-200",
			border: "border-green-300",
			hoverText: "text-green-800",
			hoverBg: "bg-green-300",
			hoverBorder: "border-green-400",
		},
		"single-day-dentistry": {
			inactiveText: "text-gray-700",
			inactiveBg: "bg-gray-50",
			inactiveBorder: "border-gray-200",
			inactiveHoverText: "text-gray-800",
			inactiveHoverBg: "bg-gray-50",
			inactiveHoverBorder: "border-gray-300",
			text: "text-yellow-700",
			bg: "bg-yellow-200",
			border: "border-yellow-300",
			hoverText: "text-yellow-800",
			hoverBg: "bg-yellow-300",
			hoverBorder: "border-yellow-400",
		},
		"specialised-treatments": {
			inactiveText: "text-gray-700",
			inactiveBg: "bg-gray-50",
			inactiveBorder: "border-gray-200",
			inactiveHoverText: "text-gray-800",
			inactiveHoverBg: "bg-gray-50",
			inactiveHoverBorder: "border-gray-300",
			text: "text-red-700",
			bg: "bg-red-200",
			border: "border-red-300",
			hoverText: "text-red-800",
			hoverBg: "bg-red-300",
			hoverBorder: "border-red-400",
		},
		default: {
			text: "text-slate-50",
			bg: "bg-slate-800",
			border: "border-gray-300",
			hoverText: "text-gray-800",
			hoverBg: "bg-gray-300",
			hoverBorder: "border-gray-400",
			inactiveText: "text-gray-700",
			inactiveBg: "bg-gray-50",
			inactiveBorder: "border-gray-200",
			inactiveHoverText: "text-gray-800",
			inactiveHoverBg: "bg-gray-50",
			inactiveHoverBorder: "border-gray-300",
		},
	};

	const getColorScheme = (tag: keyof typeof colorVariants | string) => {
		return (
			colorVariants[tag as keyof typeof colorVariants] ||
			colorVariants.default
		);
	};

	const { uniqueTags, tagColors } = useMemo(() => {
		const allTags = standalonePages
			.map((standalonePage) => standalonePage?.category)
			.filter(Boolean);

		const uniqueTagsSet = new Set(["All", ...allTags]);

		const tagColorsMap = {} as Record<
			string,
			(typeof colorVariants)["default"]
		>;
		Array.from(uniqueTagsSet).forEach((tag) => {
			tagColorsMap[tag] = getColorScheme(tag);
		});

		return {
			uniqueTags: Array.from(uniqueTagsSet),
			tagColors: tagColorsMap,
		};
	}, [standalonePages]);

	const filteredBlogs = useMemo(() => {
		if (selectedTag === "All") return standalonePages;
		return standalonePages.filter(
			(standalonePage) => standalonePage?.category === selectedTag
		);
	}, [standalonePages, selectedTag]);

	// Preload image using window.Image
	useEffect(() => {
		if (firstSmileDesigning?.benefits.image) {
			const img = new window.Image();
			img.src = firstSmileDesigning?.benefits.image;
			img.onload = () => setIsImageLoaded(true);
			img.onerror = () => setIsImageLoaded(true);
		}
	}, [standalonePages]);

	const firstTechnology = standalonePages?.filter(
		(page) => page.category === "advanced-technology"
	)[0];

	const firstSmileDesigning = standalonePages?.filter(
		(page) => page.category === "smile-designing"
	)[0];

	const firstSpecialisedTreatment = standalonePages?.filter(
		(page) => page.category === "specialised-treatments"
	)[0];

	return (
		<div className="mt-[25%] md:mt-[7%] container min-h-screen mx-auto px-4 py-8 ">
			<Slide>
				<h1 className="text-3xl md:text-6xl font-bold text-center md:text-left mb-4 md:mb-8 pt-4">
					Services @<span className="text-casablue">Rarity.</span>
				</h1>
			</Slide>

			<div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 relative z-1">
				{standalonePages.length > 0 && (
					<div className="flex flex-wrap gap-x-7 gap-y-9 font-poppins pb-[8%] md:pb-0">
						{firstSmileDesigning && (
							<Slide delay={0.4}>
								<Link
									href={`/${firstSmileDesigning.category}/${firstSmileDesigning.slug}`}
									rel="noopener noreferrer"
									className="">
									<div className="max-w-[1200px] w-full flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-11 bg-white shadow-sm shadow-[#a6afc346] rounded-xl p-4 lg:p-[2.5em] group cursor-pointer">
										<div className="lg:max-w-[536px] w-full group-hover:scale-105 transition-all duration-500">
											<div>
												<img
													className="w-full rounded-xl"
													src={urlFor(
														firstSmileDesigning
															?.benefits.image
													).url()}
													alt="hero"
													width={600}
													height={400}
													fetchPriority="high"
												/>
											</div>
										</div>
										<div className="flex flex-col">
											<div className="lg:max-w-[540px] w-full">
												<div className="flex flex-wrap gap-2 mb-4">
													{standalonePages.length >
														0 &&
														firstSmileDesigning?.category && (
															<span
																className={`inline-flex ${
																	colorVariants[
																		firstSmileDesigning?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.text
																} ${
																	colorVariants[
																		firstSmileDesigning?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.bg
																} ${
																	colorVariants[
																		firstSmileDesigning?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.border
																} hover:${
																	colorVariants[
																		firstSmileDesigning?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.hoverText
																} hover:${
																	colorVariants[
																		firstSmileDesigning?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.hoverBg
																} hover:${
																	colorVariants[
																		firstSmileDesigning?.category?.toLowerCase() as keyof typeof colorVariants
																	]
																		?.hoverBorder
																} font-medium text-sm capitalize py-1 px-3 rounded-full`}>
																{firstTechnology?.category
																	.split("-")
																	.join(" ")}
															</span>
														)}
												</div>
											</div>

											<h2 className="text-2xl font-bold text-custom-4 xl:text-heading-4 text-casadarkshade mb-4">
												<span className="underline-effect">
													{standalonePages &&
														firstSmileDesigning.title}
												</span>
											</h2>
											<p className="max-w-[524px] line-clamp-6 text-ellipsis">
												{standalonePages &&
													firstSmileDesigning.benefits
														.description}
											</p>
										</div>
									</div>
								</Link>
							</Slide>
						)}

						<div className="justify-between w-full items-center hidden md:flex">
							<Slide delay={0.8}>
								<Link
									href={`/${firstTechnology.category}/${firstTechnology.slug}`}
									rel="noopener noreferrer"
									className="">
									<div className="lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadowi-1 rounded-xl p-[1.5em] group cursor-pointer">
										<div className="lg:max-w-[238px] w-full group-hover:scale-105 transition-all duration-500">
											<img
												className="w-full rounded-xl"
												src={urlFor(
													firstTechnology?.benefits
														.image
												).url()}
												alt="hero"
												width={400}
												height={300}
											/>
										</div>
										<div className="lg:min-w-[272px] w-full">
											<div className="flex flex-wrap gap-2 mb-4">
												{standalonePages.length > 0 &&
													firstTechnology?.category && (
														<span
															className={`inline-flex ${
																colorVariants[
																	firstSmileDesigning?.category?.toLowerCase() as keyof typeof colorVariants
																]?.text
															} ${
																colorVariants[
																	firstSmileDesigning?.category?.toLowerCase() as keyof typeof colorVariants
																]?.bg
															} ${
																colorVariants[
																	firstSmileDesigning?.category?.toLowerCase() as keyof typeof colorVariants
																]?.border
															} hover:${
																colorVariants[
																	firstSmileDesigning?.category?.toLowerCase() as keyof typeof colorVariants
																]?.hoverText
															} hover:${
																colorVariants[
																	firstSmileDesigning?.category?.toLowerCase() as keyof typeof colorVariants
																]?.hoverBg
															} hover:${
																colorVariants[
																	firstSmileDesigning?.category?.toLowerCase() as keyof typeof colorVariants
																]?.hoverBorder
															} font-medium text-sm py-1 px-3 rounded-full capitalize`}>
															{firstSmileDesigning?.category
																.split("-")
																.join(" ")}
														</span>
													)}
											</div>
											<h2 className="font-semibold text-custom-lg text-casadarkshade mb-3 line-clamp-2 text-ellipsis">
												<span className="underline-effect">
													{standalonePages &&
														firstTechnology.title}
												</span>
											</h2>
											<p className="max-w-[524px] line-clamp-2 text-ellipsis">
												{standalonePages &&
													firstTechnology.benefits
														.description}
											</p>
										</div>
									</div>
								</Link>
							</Slide>
							<Slide
								delay={0.8}
								className="flex w-full justify-end">
								<Link
									href={`/${firstSpecialisedTreatment.category}/${firstSpecialisedTreatment.slug}`}
									rel="noopener noreferrer"
									className="">
									<div className="lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadowi-1 rounded-xl p-[1.5em] group cursor-pointer">
										<div className="lg:max-w-[238px] w-full group-hover:scale-105 transition-all duration-500">
											<img
												className="w-full rounded-xl"
												src={urlFor(
													firstSpecialisedTreatment
														?.benefits.image
												).url()}
												alt="hero"
												width={400}
												height={300}
											/>
										</div>
										<div className="lg:min-w-[272px] w-full">
											<div className="flex flex-wrap gap-2 mb-4">
												{standalonePages.length > 0 &&
													firstSpecialisedTreatment?.category && (
														<span
															className={`inline-flex ${
																colorVariants[
																	firstSpecialisedTreatment?.category?.toLowerCase() as keyof typeof colorVariants
																]?.text
															} ${
																colorVariants[
																	firstSpecialisedTreatment?.category?.toLowerCase() as keyof typeof colorVariants
																]?.bg
															} ${
																colorVariants[
																	firstSpecialisedTreatment?.category?.toLowerCase() as keyof typeof colorVariants
																]?.border
															} hover:${
																colorVariants[
																	firstSpecialisedTreatment?.category?.toLowerCase() as keyof typeof colorVariants
																]?.hoverText
															} hover:${
																colorVariants[
																	firstSpecialisedTreatment?.category?.toLowerCase() as keyof typeof colorVariants
																]?.hoverBg
															} hover:${
																colorVariants[
																	firstSpecialisedTreatment?.category?.toLowerCase() as keyof typeof colorVariants
																]?.hoverBorder
															} font-medium text-sm py-1 px-3 rounded-full capitalize`}>
															{firstSpecialisedTreatment?.category
																.split("-")
																.join(" ")}
														</span>
													)}
											</div>
											<h2 className="font-semibold text-custom-lg text-casadarkshade mb-3 line-clamp-2 text-ellipsis">
												<span className="underline-effect">
													{standalonePages &&
														firstSpecialisedTreatment?.title}
												</span>
											</h2>
											<p className="max-w-[524px] line-clamp-2 text-ellipsis">
												{standalonePages &&
													firstTechnology.benefits
														.description}
											</p>
										</div>
									</div>
								</Link>
							</Slide>
						</div>
					</div>
				)}
			</div>

			{/* Tag filter */}
			<Slide delay={1}>
				<div className="my-8">
					<h2 className="text-2xl font-semibold mb-4">
						Browse by Category
					</h2>
					<div className="flex flex-wrap gap-2">
						{uniqueTags.map((tag) => {
							const colorScheme =
								tagColors[tag] || colorVariants.default;
							const isActive = selectedTag === tag;

							return (
								<Button
									key={tag}
									variant="outline"
									onClick={() => setSelectedTag(tag)}
									className={`h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-poppins capitalize text-sm font-medium transition-all duration-300 ease-in-out ${
										isActive
											? `${colorScheme.text} ${colorScheme.bg} ${colorScheme.border} !hover:${colorScheme.text} !hover:${colorScheme.bg} !hover:${colorScheme.border}`
											: `${colorScheme.inactiveText} ${colorScheme.inactiveBg} ${colorScheme.inactiveBorder} hover:${colorScheme.hoverText} hover:${colorScheme.hoverBg} hover:${colorScheme.hoverBorder}`
									}`}>
									{tag.split("-").join(" ")}
								</Button>
							);
						})}
					</div>
				</div>
			</Slide>

			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				variants={containerVariants}
				initial="hidden"
				animate="visible">
				{filteredBlogs.map((standalonePage) => (
					<motion.div
						key={standalonePage?.slug?.toString()}
						variants={cardVariants}>
						<BlogCard
							standalonePage={standalonePage}
							categoryColors={tagColors}
						/>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}

function BlogCard({
	standalonePage,
	categoryColors,
}: {
	standalonePage: StandalonePage;
	categoryColors: Record<string, ColorScheme>;
}) {
	return (
		<Card className="group">
			<Link
				href={`/${standalonePage?.category}/${standalonePage?.slug}`}
				className="group overflow-hidden"
				rel="noopener noreferrer">
				<CardHeader className="p-0 overflow-hidden">
					<img
						src={urlFor(standalonePage?.benefits.image).url()}
						alt={standalonePage?.title}
						width={400}
						height={300}
						className="w-full h-[200px] object-cover rounded-t-lg group-hover:scale-105 transition-all ease-linear duration-300"
						loading="lazy"
					/>
				</CardHeader>
				<CardContent className="p-4">
					<div className="flex flex-wrap gap-2 mb-2">
						<Badge
							key={standalonePage?.slug?.toString()}
							variant="secondary"
							className={`${categoryColors[standalonePage?.category]?.bg} ${categoryColors[standalonePage?.category]?.text} ${categoryColors[standalonePage?.category]?.border} capitalize`}>
							{standalonePage?.category.split("-").join(" ")}
						</Badge>
					</div>
					<h2 className="text-xl font-semibold mb-2">
						<span className="underline-effect">
							{standalonePage?.title}
						</span>
					</h2>
					<p className="text-sm text-gray-600 mb-4 line-clamp-2">
						{standalonePage?.benefits.description}
					</p>
				</CardContent>
			</Link>
		</Card>
	);
}
