import React from "react";
import { BlogCategory, BlogPreviewT } from "@/types";
import { getBlogTPagesByCategory } from "@/sanity/sanity.query";
import CarouselContent from "@/components/carousel/carousel-content";

interface technologiesaltProps {
	_id: string;
	meta_title: string;
	meta_description: string;
	image: string;
	slug: string;
}
[];

interface RelatedTechnologiesProps {
	currentSlug: string | { current: string };
	technologies: BlogPreviewT[] | technologiesaltProps;
	category: BlogCategory;
}

async function RelatedTechnologies({
	currentSlug,
	technologies,
	category,
}: RelatedTechnologiesProps) {
	const allBlogs = await getBlogTPagesByCategory(category);
	const relatedBlogs = allBlogs.filter((blog) => blog?.slug !== currentSlug);

	if (!relatedBlogs.length) {
		return null;
	}

	// console.log(relatedBlogs);

	return (
		<div className="w-full">
			<div className="w-full max-w-[320px] md:max-w-7xl mx-auto py-[3%] flex flex-col justify-center items-center space-y-4 px-2">
				<p className="text-sm md:text-md tracking-widest leading-relaxed font-semibold uppercase font-poppins text-center">
					Trending Topics
				</p>
				<p className="text-2xl md:text-4xl font-bold text-center">
					Latest Blogs
				</p>
				<CarouselContent
					blogs={relatedBlogs}
					category={category}
				/>
			</div>
		</div>
	);
}

export default RelatedTechnologies;
