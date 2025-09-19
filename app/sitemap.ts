import client from "@/sanity/sanity.client";
import { type MetadataRoute } from "next";

const baseUrl = process.env.SITE_URL; // replace with your actual domain
const blogCategories = [
	"single-day-dentistry",
	"smile-designing",
	"specialised-treatments",
	"invisalign",
	"international-patients",
	"advanced-technology", // include if still relevant
];

const standaloneCategories = [
	"single-day-dentistry",
	"smile-designing",
	"specialised-treatments",
	"invisalign",
	"international-patients",
	"advanced-technology",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const now = new Date().toISOString();

	// --- BLOG ROUTES ---
	const blogRoutes = await Promise.all(
		blogCategories.map(async (category) => {
			const slugs: { slug: { current: string } }[] = await client.fetch(
				`*[_type == "blogtest" && defined(slug.current) && category == $category]{ slug }`,
				{ category }
			);

			return slugs.map((item) => ({
				url: `${baseUrl}/blog/${category}/${item.slug.current}`,
				lastModified: now,
			}));
		})
	);

	// --- STANDALONE CATEGORY ROUTES ---
	const categoryPages = await Promise.all(
		standaloneCategories.map(async (category) => {
			const exists = await client.fetch(
				`count(*[_type == "categoryPage" && category == $category]) > 0`,
				{ category }
			);

			return exists
				? [{ url: `${baseUrl}/${category}`, lastModified: now }]
				: [];
		})
	);

	// --- STANDALONE DYNAMIC ROUTES ---
	const dynamicStandaloneRoutes = await Promise.all(
		standaloneCategories.map(async (category) => {
			const slugs: { slug: { current: string } }[] = await client.fetch(
				`*[_type == "standalonePage" && defined(slug.current) && category == $category]{ slug }`,
				{ category }
			);

			return slugs.map((item) => ({
				url: `${baseUrl}/${category}/${item.slug.current}`,
				lastModified: now,
			}));
		})
	);

	// --- GURUGRAM LANDING PAGES ---

	const gurugramSlugs: { slug: { current: string } }[] = await client.fetch(
		`*[_type == "standalonePage" && defined(slug.current) && category == "landing-pages-gurgaon"]{ slug }`
	);

	const gurugramRoutes = gurugramSlugs.map((item) => ({
		url: `${baseUrl}/gurugram/${item.slug.current}`,
		lastModified: now,
	}));

	// Flatten arrays
	const blogPages = blogRoutes.flat();
	const standaloneCategoryPages = categoryPages.flat();
	const standalonePages = dynamicStandaloneRoutes.flat();

	// Static routes (home, blog)
	const staticRoutes = [
		{ url: `${baseUrl}`, lastModified: now },
		{ url: `${baseUrl}/about`, lastModified: now },
		{ url: `${baseUrl}/contact-us`, lastModified: now },
		{ url: `${baseUrl}/disclaimer`, lastModified: now },
		{ url: `${baseUrl}/empanelment-financing`, lastModified: now },
		{ url: `${baseUrl}/blog`, lastModified: now },
		{ url: `${baseUrl}/services`, lastModified: now },
		{ url: `${baseUrl}/invisalign`, lastModified: now },
		{ url: `${baseUrl}/international-patients`, lastModified: now },
		{ url: `${baseUrl}/privacy-policy`, lastModified: now },
		{ url: `${baseUrl}/warranty-details`, lastModified: now },
		{ url: `${baseUrl}/team/dr-sneha-singh`, lastModified: now },
		{ url: `${baseUrl}/team/dr-manreet-sidhu`, lastModified: now },
		{ url: `${baseUrl}/team/dr-gaurav-malik`, lastModified: now },
	];

	return [
		...staticRoutes,
		...standaloneCategoryPages,
		...standalonePages,
		...blogPages,
		...gurugramRoutes,
	];
}
