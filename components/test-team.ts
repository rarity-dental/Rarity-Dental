// import client from "@/sanity/sanity.client";
// import { MetadataRoute } from "next";
// import { groq } from "next-sanity";

// const BASE_URL = "https://www.raritydental.com";

// // Function to get all dynamic routes from Sanity
// async function getAllDynamicRoutes() {
// 	const query = groq`
//    {}  *[defined(slug.current)] {
//       _type,
//       "slug": slug.current
//     }
//   `;
// 	return client.fetch(query);
// }

// // Function to get all static routes
// function getStaticRoutes() {
// 	return [
// 		"",
// 		"/about",
// 		"/contact",
// 		"/services",
// 		// Add more static routes as needed
// 	];
// }

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
// 	const dynamicRoutes = await getAllDynamicRoutes();
// 	const staticRoutes = getStaticRoutes();

// 	const dynamicEntries = dynamicRoutes.map((route: any) => ({
// 		url: `${BASE_URL}/${route._type}/${route.slug}`,
// 		lastModified: new Date(),
// 	}));

// 	const staticEntries = staticRoutes.map((route) => ({
// 		url: `${BASE_URL}${route}`,
// 		lastModified: new Date(),
// 	}));

// 	return [...staticEntries, ...dynamicEntries];
// }
