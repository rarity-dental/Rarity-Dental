import { getAllBlogsT } from "@/sanity/sanity.query";
import BlogClientPage from "./_components/blog-client";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
};

export default async function BlogPage() {
	const blogs = await getAllBlogsT();

	return (
		<div>
			<BlogClientPage blogs={blogs} />
		</div>
	);
}
