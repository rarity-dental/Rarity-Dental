import { getAllBlogsT } from "@/sanity/sanity.query";
import BlogClientPage from "./_components/blog-client";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Read the latest articles on dental health, smile makeovers, cosmetic dentistry, implants, and oral care tips from the experts at Rarity Dental Gurgaon.",
	openGraph: {
		title: "Blog | Rarity Dental",
		description:
			"Read the latest articles on dental health, smile makeovers, cosmetic dentistry, implants, and oral care tips from the experts at Rarity Dental Gurgaon.",
		url: "/blog",
	},
};

export default async function BlogPage() {
	const blogs = await getAllBlogsT();

	return (
		<div>
			<BlogClientPage blogs={blogs} />
		</div>
	);
}
