import { MetadataRoute } from "next";
import { groq } from "next-sanity";
import client from "@/sanity/sanity.client";

const SITE_URL = "https://www.raritydental.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Static routes
	const staticRoutes: MetadataRoute.Sitemap = [
		{ url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
		{ url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
		{ url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
		{ url: `${SITE_URL}/contact-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
		{ url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
		{ url: `${SITE_URL}/invisalign`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
		{ url: `${SITE_URL}/international-patients`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
		{ url: `${SITE_URL}/smile-designing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
		{ url: `${SITE_URL}/advanced-technology`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
		{ url: `${SITE_URL}/specialised-treatments`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
		{ url: `${SITE_URL}/single-day-dentistry`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
		{ url: `${SITE_URL}/patient-testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
		{ url: `${SITE_URL}/empanelment-financing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
		{ url: `${SITE_URL}/warranty-details`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
		{ url: `${SITE_URL}/disclaimer`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
		{ url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
	];

	// Team pages
	const teamRoutes: MetadataRoute.Sitemap = [
		{ url: `${SITE_URL}/team/dr-sneha-singh`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
		{ url: `${SITE_URL}/team/dr-manreet-sidhu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
	];

	// Dynamic blog pages from Sanity
	let blogRoutes: MetadataRoute.Sitemap = [];
	try {
		const blogs: { slug: string; category: string }[] = await client.fetch(
			groq`*[_type == "blogtest"]{ "slug": slug.current, category }`,
			{},
			{ next: { revalidate: 3600 } }
		);
		blogRoutes = blogs.map((blog) => ({
			url: `${SITE_URL}/blog/${blog.category}/${blog.slug}`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.6,
		}));
	} catch (e) {
		console.error("Sitemap: failed to fetch blogs", e);
	}

	// Dynamic standalone pages from Sanity
	let standaloneRoutes: MetadataRoute.Sitemap = [];
	try {
		const pages: { slug: string; category: string }[] = await client.fetch(
			groq`*[_type == "standalonePage"]{ "slug": slug.current, category }`,
			{},
			{ next: { revalidate: 3600 } }
		);
		standaloneRoutes = pages.map((page) => ({
			url: `${SITE_URL}/${page.category}/${page.slug}`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.6,
		}));
	} catch (e) {
		console.error("Sitemap: failed to fetch standalone pages", e);
	}

	return [...staticRoutes, ...teamRoutes, ...blogRoutes, ...standaloneRoutes];
}
