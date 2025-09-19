/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import React from "react";
import { getBlogTPage, getBlogTPagesByCategory } from "@/sanity/sanity.query";
import { BlogPreviewT, BlogCategory } from "@/types";
import {
	getHeadingText,
	getSectionDisplayName,
	groupSections,
	SectionGroup,
	urlFor,
} from "@/lib/utils";
// import MyPortableText from "@/components/sanity/portableComponent";
import RelatedTechnologies from "@/components/related-blogs/related-content";
import "./smiledesign.css";
import Section from "@/components/blog-section/section";

// Dynamically import components as needed
const StickyConsultationForm = dynamic(
	() =>
		import("@/components/forms/sticky-form").then(
			(mod) => mod.StickyConsultationForm
		),
	{ ssr: false }
);

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const blog = await getBlogTPage(params.slug);
	if (!blog) {
		notFound();
	}
	return {
		title: blog.meta_title || blog.pageTitle,
		description: blog.meta_description,
		openGraph: {
			title: blog.ogTitle || blog.meta_title || blog.pageTitle,
			description: blog.ogDescription || blog.meta_description,
			url:
				blog.ogUrl ||
				`https://www.raritydental.com/blog/specialised-treatments/${params.slug}`,
			images: [
				{
					url: blog.ogImageUrl || urlFor(blog.image).url(),
					width: 1200,
					height: 630,
					alt: blog.pageTitle,
				},
			],
		},
		twitter: {
			title: blog.ogTitle || blog.meta_title || blog.pageTitle,
			description: blog.ogDescription || blog.meta_description,
			images: [
				{
					url: blog.ogImageUrl || urlFor(blog.image).url(),
					width: 1200,
					height: 630,
					alt: blog.pageTitle,
				},
			],
			card: "summary_large_image",
		},
	};
}

export default async function BlogPage({
	params,
}: {
	params: { slug: string };
}) {
	const blog = await getBlogTPage(params.slug);
	if (!blog) {
		notFound();
	}

	// console.log(blog);
	const relatedBlogs: BlogPreviewT[] = await getBlogTPagesByCategory(
		blog.category
	);

	// console.log(relatedBlogs.length);

	const blogSlug = blog?.slug;
	// console.log(blogSlug);

	// const groupedSections = blog.sections?.reduce(
	// 	(acc, section) => {
	// 		const displayName = getSectionDisplayName(section);
	// 		if (!acc[section.sectionType]) {
	// 			acc[section.sectionType] = [];
	// 		}
	// 		acc[section.sectionType].push(displayName);
	// 		return acc;
	// 	},
	// 	{} as Record<string, string[]>
	// );
	// Extract section types for ordering
	// const sectionTypes = Object.keys(groupedSections);

	// Compute a consistent numberedSections array
	// interface NumberedSection {
	// 	mainIndex: number;
	// 	subIndex: number | null;
	// 	section: any;
	// }

	// const numberedSections: NumberedSection[] = [];
	// const typeCounters: Record<string, number> = {};

	// blog.sections?.forEach((section: any) => {
	// 	// Increase the counter for this section type
	// 	if (typeCounters[section.sectionType] === undefined) {
	// 		typeCounters[section.sectionType] = 0;
	// 	} else {
	// 		typeCounters[section.sectionType]++;
	// 	}

	// 	// If this is the first occurrence, it’s a main entry (subIndex null).
	// 	// Otherwise, assign subIndex based on how many times this type has occurred before.
	// 	const isFirstOccurrence = typeCounters[section.sectionType] === 0;
	// 	numberedSections.push({
	// 		mainIndex: isFirstOccurrence
	// 			? numberedSections.length + 1
	// 			: numberedSections.find(
	// 					(ns) => ns.section.sectionType === section.sectionType
	// 				)?.mainIndex || numberedSections.length + 1,
	// 		subIndex: isFirstOccurrence
	// 			? null
	// 			: typeCounters[section.sectionType],
	// 		section,
	// 	});
	// });

	const sectionGroups: SectionGroup[] = groupSections(blog.sections || []);

	const getCustomGroupHeader = (group: SectionGroup, blogName: string) => {
		if (group.sectionType === "benefits") {
			return `Benefits of ${blogName} Therapy`;
		}
		if (group.sectionType === "process") {
			return `${blogName} Therapy Process at Rarity Dental`;
		}
		return group.groupHeaderTitle;
	};

	return (
		<div className="flex scroll-mt-10">
			{/* Sticky Consultation Form on the side */}
			<div className="w-[370px] hidden md:block fixed right-0 top-[30%] h-fit overflow-y-auto">
				<StickyConsultationForm
					paraText="Connect with us to book your consultation now!"
					buttonText="Book Consultation"
				/>
			</div>
			<div className="flex-1 max-w-[320px] md:max-w-[calc(100%-420px)] md:pl-4 py-32 px-4">
				{/* Tag */}
				<div className="flex gap-x-6 justify-center items-center mt-8 mb-4">
					<span className="inline-flex font-medium text-sm py-1 px-3 rounded-full text-copyColor bg-copyColor/[0.15] uppercase font-poppins">
						Specialised Treatments
					</span>
				</div>
				{/* Page Title */}
				<h1 className="text-4xl font-bold text-copyColor text-center md:max-w-[800px] mx-auto">
					{blog.pageTitle}
				</h1>
				{/* Hero Image */}
				<div className="flex justify-center items-center my-8">
					<img
						src={urlFor(blog.image).url()}
						className="max-w-[320px] md:max-w-4xl 2xl:max-w-5xl h-auto rounded-lg object-cover object-center"
						alt={blog.pageTitle}
					/>
				</div>
				<div className="max-w-[320px] md:max-w-3xl mx-auto portable-text font-poppins">
					{/* Dynamic Quick Navigation / Table of Contents */}

					<nav className="mb-8 p-4 rounded-lg">
						<h2 className="text-2xl font-bold mb-4">
							Quick Navigation
						</h2>
						<ul className="md:space-y-2">
							{sectionGroups.map((group) => (
								<React.Fragment key={group.mainIndex}>
									<li>
										<a
											href={`#section-${group.mainIndex}`}
											className="text-blue-600 hover:underline font-semibold">
											{`${group.mainIndex}. ${getCustomGroupHeader(group, blog.name)}`}
										</a>
									</li>
									{group.items.length > 0 &&
										group.items.map(
											(item: any, idx: number) => {
												// Only render a sub-nav link if item.title exists.
												if (!item.title) return null;
												return (
													<li
														key={`${group.mainIndex}-${idx}`}
														className="ml-2 md:ml-4">
														<a
															href={`#section-${group.mainIndex}-${idx + 1}`}
															className="text-blue-600 hover:underline font-semibold">
															{`${group.mainIndex}.${idx + 1} ${item.title}`}
														</a>
													</li>
												);
											}
										)}
								</React.Fragment>
							))}
						</ul>
					</nav>

					{/* Render Dynamic Sections */}
					{sectionGroups.map((group) => (
						<div key={group.mainIndex}>
							{/* Render a static group header */}
							<section
								id={`section-${group.mainIndex}`}
								className="mt-3 scroll-mt-32">
								<div className="mt-8 mb-4">
									<h1 className="!text-2xl !leading-none !md:leading-[1.75rem] !md:text-3xl font-bold text-copyColor">
										{`${group.mainIndex}. ${getCustomGroupHeader(group, blog.name)}`}
									</h1>
								</div>
							</section>
							{group.items.map((item, idx) => {
								const sectionId = `section-${group.mainIndex}-${idx + 1}`;
								return (
									<section
										key={sectionId}
										id={sectionId}
										className="mt-1 md:mt-3 scroll-mt-32">
										<Section
											sectionType={item.sectionType}
											title={item.title}
											customTitle={item.customTitle}
											content={item.content}
											mainSectionIndex={group.mainIndex}
											subSectionIndex={idx + 1}
											groupHeaderTitle={getCustomGroupHeader(
												group,
												blog.name
											)}
										/>
									</section>
								);
							})}
						</div>
					))}
				</div>
				{relatedBlogs.length > 1 && (
					<RelatedTechnologies
						currentSlug={blogSlug}
						technologies={relatedBlogs}
						category={blog?.category as BlogCategory}
					/>
				)}
			</div>
		</div>
	);
}

export const revalidate = 60;
