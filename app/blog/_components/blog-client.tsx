/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

import { urlFor } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Slide from "@/components/ui/animated-sections";
import { BlogT } from "@/types";

type ColorScheme = {
	text: string;
	bg: string;
	border: string;
	hoverText: string;
	hoverBg: string;
	hoverBorder: string;
};

const colorVariants: Record<
	| "smile-designing"
	| "advanced-technology"
	| "single-day-dentistry"
	| "specialised-treatments"
	| "international-patients"
	| "invisalign"
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
	"international-patients": {
		inactiveText: "text-gray-700",
		inactiveBg: "bg-gray-50",
		inactiveBorder: "border-gray-200",
		inactiveHoverText: "text-gray-800",
		inactiveHoverBg: "bg-gray-50",
		inactiveHoverBorder: "border-gray-300",
		text: "text-pink-700",
		bg: "bg-pink-200",
		border: "border-pink-300",
		hoverText: "text-pink-800",
		hoverBg: "bg-pink-300",
		hoverBorder: "border-pink-400",
	},
	invisalign: {
		inactiveText: "text-gray-700",
		inactiveBg: "bg-gray-50",
		inactiveBorder: "border-gray-200",
		inactiveHoverText: "text-gray-800",
		inactiveHoverBg: "bg-gray-50",
		inactiveHoverBorder: "border-gray-300",
		text: "text-purple-700",
		bg: "bg-purple-200",
		border: "border-purple-300",
		hoverText: "text-purple-800",
		hoverBg: "bg-purple-300",
		hoverBorder: "border-purple-400",
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

interface BlogClientPageProps {
	blogs: BlogT[];
}

// Variants for the container to stagger children
const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2, // Adjust this value for more/less delay
			delayChildren: 1, // Adjust this value for more/less delay
		},
	},
};

// Variants for each blog card with a fade-in bouncy animation
const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, type: "spring", bounce: 0.3 },
	},
};

export default function BlogClientPage({ blogs }: BlogClientPageProps) {
	const [selectedTag, setSelectedTag] = useState<string>("All");
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const [visibleCount, setVisibleCount] = useState(9);

	const getColorScheme = (tag: keyof typeof colorVariants | string) => {
		return (
			colorVariants[tag as keyof typeof colorVariants] ||
			colorVariants.default
		);
	};

	const { uniqueTags, tagColors } = useMemo(() => {
		const allTags = blogs.map((blog) => blog?.category).filter(Boolean);
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
	}, [blogs]);

	const filteredBlogs = useMemo(() => {
		if (selectedTag === "All") return blogs;
		return blogs.filter((blog) => blog?.category === selectedTag);
	}, [blogs, selectedTag]);

	const blogsToRender =
		selectedTag === "All"
			? filteredBlogs.slice(0, visibleCount)
			: filteredBlogs;

	const internationalPatientsBlog = blogs.find(
		(blog) =>
			blog?.slug.toString() ===
			"a-comprehensive-guide-for-international-patients-seeking-dental-care-in-india"
	);
	const smileDesigningBlog = blogs.find(
		(blog) => blog?.category === "smile-designing"
	);
	const specialisedTreatmentsBlog = blogs.find(
		(blog) => blog?.category === "specialised-treatments"
	);

	useEffect(() => {
		if (internationalPatientsBlog?.image) {
			const image = new window.Image();
			image.src = urlFor(internationalPatientsBlog.image).url();
			image.onload = () => setIsImageLoaded(true);
			image.onerror = () => setIsImageLoaded(true);
		}
	}, [internationalPatientsBlog]);

	return (
		<div className="mt-[25%] md:mt-[7%] container min-h-screen mx-auto px-4 py-8">
			<Slide>
				<h1 className="text-3xl text-center md:text-left md:text-6xl font-bold mb-4 md:mb-8 pt-4">
					Rarity<span className="text-casablue">blog.</span>
				</h1>
			</Slide>

			<div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 relative z-1">
				{blogs.length > 0 && (
					<div className="flex flex-wrap gap-x-7 gap-y-9 font-poppins pb-[8%] md:pb-0">
						{internationalPatientsBlog && (
							<Slide delay={0.4}>
								<Link
									href={`/blog/${internationalPatientsBlog.category}/${internationalPatientsBlog.slug}`}
									rel="noopener noreferrer"
									className="">
									<div className="max-w-[1200px] w-full flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-11 bg-white shadow-sm shadow-[#a6afc346] rounded-xl p-4 lg:p-[2.5em] group cursor-pointer">
										<div className="lg:max-w-[536px] w-full group-hover:scale-105 transition-all duration-500">
											<div>
												<img
													className="w-full rounded-xl"
													src={urlFor(
														internationalPatientsBlog?.image
													).url()}
													alt="hero"
													width={600}
													height={400}
													fetchPriority="high"
													loading="lazy"
												/>
											</div>
										</div>
										<div className="flex flex-col">
											<div className="lg:max-w-[540px] w-full">
												<div className="flex flex-wrap gap-2 mb-4">
													{blogs.length > 0 &&
														internationalPatientsBlog?.category && (
															<span
																className={`inline-flex ${
																	colorVariants[
																		internationalPatientsBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.text
																} ${
																	colorVariants[
																		internationalPatientsBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.bg
																} ${
																	colorVariants[
																		internationalPatientsBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.border
																} hover:${
																	colorVariants[
																		internationalPatientsBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.hoverText
																} hover:${
																	colorVariants[
																		internationalPatientsBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.hoverBg
																} hover:${
																	colorVariants[
																		internationalPatientsBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]
																		?.hoverBorder
																} font-medium text-sm capitalize py-1 px-3 rounded-full`}>
																{internationalPatientsBlog?.category
																	.split("-")
																	.join(" ")}
															</span>
														)}
												</div>
											</div>
											<h2 className="text-2xl font-bold text-custom-4 xl:text-heading-4 text-casadarkshade mb-4">
												<span className="underline-effect">
													{
														internationalPatientsBlog?.meta_title
													}
												</span>
											</h2>
											<p className="max-w-[524px] line-clamp-6 text-ellipsis">
												{
													internationalPatientsBlog?.meta_description
												}
											</p>
										</div>
									</div>
								</Link>
							</Slide>
						)}

						<div className="justify-between w-full items-center hidden md:flex md:justify-between">
							{smileDesigningBlog && (
								<Slide delay={0.8}>
									<Link
										href={`/blog/${smileDesigningBlog.category}/${smileDesigningBlog.slug}`}
										rel="noopener noreferrer"
										className="">
										<div className="lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadowi-1 rounded-xl p-[1.5em] group cursor-pointer">
											<div className="lg:max-w-[238px] w-full group-hover:scale-105 transition-all duration-500">
												<img
													className="w-full rounded-xl"
													src={urlFor(
														smileDesigningBlog?.image
													).url()}
													alt="hero"
													width={400}
													height={300}
												/>
											</div>
											<div className="lg:min-w-[272px] w-full">
												<div className="flex flex-wrap gap-2 mb-4">
													{blogs.length > 0 &&
														smileDesigningBlog?.category && (
															<span
																className={`inline-flex ${
																	colorVariants[
																		smileDesigningBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.text
																} ${
																	colorVariants[
																		smileDesigningBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.bg
																} ${
																	colorVariants[
																		smileDesigningBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.border
																} hover:${
																	colorVariants[
																		smileDesigningBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.hoverText
																} hover:${
																	colorVariants[
																		smileDesigningBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.hoverBg
																} hover:${
																	colorVariants[
																		smileDesigningBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]
																		?.hoverBorder
																} font-medium text-sm py-1 px-3 rounded-full capitalize`}>
																{smileDesigningBlog?.category
																	.split("-")
																	.join(" ")}
															</span>
														)}
												</div>
												<h2 className="font-semibold text-custom-lg text-casadarkshade mb-3 line-clamp-2 text-ellipsis">
													<span className="underline-effect">
														{
															smileDesigningBlog?.meta_title
														}
													</span>
												</h2>
												<p className="max-w-[524px] line-clamp-2 text-ellipsis">
													{
														smileDesigningBlog?.meta_description
													}
												</p>
											</div>
										</div>
									</Link>
								</Slide>
							)}
							{specialisedTreatmentsBlog && (
								<Slide
									delay={0.8}
									className="flex justify-end w-full">
									<Link
										href={`/blog/${specialisedTreatmentsBlog.category}/${specialisedTreatmentsBlog.slug}`}
										rel="noopener noreferrer"
										className="">
										<div className="lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadowi-1 rounded-xl p-[1.5em] group cursor-pointer">
											<div className="lg:max-w-[238px] w-full group-hover:scale-105 transition-all duration-500">
												<img
													className="w-full rounded-xl"
													src={urlFor(
														specialisedTreatmentsBlog?.image
													).url()}
													alt="hero"
													width={400}
													height={300}
												/>
											</div>
											<div className="lg:min-w-[272px] w-full">
												<div className="flex flex-wrap gap-2 mb-4">
													{blogs.length > 0 &&
														specialisedTreatmentsBlog?.category && (
															<span
																className={`inline-flex ${
																	colorVariants[
																		specialisedTreatmentsBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.text
																} ${
																	colorVariants[
																		specialisedTreatmentsBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.bg
																} ${
																	colorVariants[
																		specialisedTreatmentsBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.border
																} hover:${
																	colorVariants[
																		specialisedTreatmentsBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.hoverText
																} hover:${
																	colorVariants[
																		specialisedTreatmentsBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]?.hoverBg
																} hover:${
																	colorVariants[
																		specialisedTreatmentsBlog?.category?.toLowerCase() as keyof typeof colorVariants
																	]
																		?.hoverBorder
																} font-medium text-sm py-1 px-3 rounded-full capitalize`}>
																{specialisedTreatmentsBlog?.category
																	.split("-")
																	.join(" ")}
															</span>
														)}
												</div>
												<h2 className="font-semibold text-custom-lg text-casadarkshade mb-3 line-clamp-2 text-ellipsis">
													<span className="underline-effect">
														{
															specialisedTreatmentsBlog?.meta_title
														}
													</span>
												</h2>
												<p className="max-w-[524px] line-clamp-2 text-ellipsis">
													{
														specialisedTreatmentsBlog?.meta_description
													}
												</p>
											</div>
										</div>
									</Link>
								</Slide>
							)}
						</div>
					</div>
				)}
			</div>

			{/* Category Filter */}
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
									onClick={() => {
										setSelectedTag(tag);
										setVisibleCount(9); // Reset visible count when changing filters
									}}
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

			{/* Blog Cards Grid */}
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				variants={containerVariants}
				initial="hidden"
				animate="visible">
				{blogsToRender.map((blog) => (
					<motion.div
						key={blog?.slug.toString()}
						variants={cardVariants}>
						<BlogCard
							blog={blog}
							categoryColors={tagColors}
						/>
					</motion.div>
				))}
			</motion.div>

			{/* "Load More" Button for "All" Category */}
			{selectedTag === "All" && visibleCount < filteredBlogs.length && (
				<div className="text-center mt-4">
					<Button onClick={() => setVisibleCount((prev) => prev + 9)}>
						Load More
					</Button>
				</div>
			)}
		</div>
	);
}

function BlogCard({
	blog,
	categoryColors,
}: {
	blog: BlogT;
	categoryColors: Record<string, ColorScheme>;
}) {
	return (
		<Card className="group h-[380px]">
			<Link
				href={`/blog/${blog.category}/${blog.slug}`}
				className="group overflow-hidden"
				rel="noopener noreferrer">
				<CardHeader className="p-0 overflow-hidden">
					<img
						src={urlFor(blog?.image).url()}
						alt={blog?.name}
						width={400}
						height={300}
						className="w-full h-[200px] object-cover rounded-t-lg group-hover:scale-105 transition-all ease-linear duration-300"
						loading="lazy"
					/>
				</CardHeader>
				<CardContent className="p-4">
					<div className="flex flex-wrap gap-2 mb-2">
						<Badge
							key={blog?._id}
							variant="secondary"
							className={`${categoryColors[blog?.category]?.bg} ${categoryColors[blog?.category]?.text} ${categoryColors[blog?.category]?.border} capitalize`}>
							{blog?.category.split("-").join(" ")}
						</Badge>
					</div>
					<h2 className="text-xl font-semibold mb-2">
						<span className="underline-effect">
							{blog?.meta_title || blog.name}
						</span>
					</h2>
					<p className="text-sm text-gray-600 mb-4 line-clamp-2">
						{blog?.meta_description ||
							`Learn more about ${blog?.name}`}
					</p>
				</CardContent>
			</Link>
		</Card>
	);
}
