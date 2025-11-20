import { groq } from "next-sanity";
import client from "./sanity.client";
import {
	BlogPreviewT,
	BlogT,
	CategoryPage,
	HomepageMetadata,
	InternationalPatientsPage,
	InvisalignPage,
	StandalonePage,
} from "@/types";

export async function getBlogTPage(slug: string): Promise<BlogT> {
	const query = `*[_type == "blogtest" && slug.current == $slug][0] {
      _id,
      category,
      name,
      pageTitle,
      tag,
      "slug": slug.current,
      sections[]{
      sectionType,
      title,
      content,
      customTitle
    },
      "image": image.asset->url,
      meta_title,
      meta_description,
      ogTitle,
      ogDescription,
      ogUrl,
      "ogImageUrl": ogImage.asset->url,
      structuredData {
          clinicName,
          clinicUrl,
          logo,
          streetAddress,
          addressLocality,
          addressRegion,
          postalCode,
          addressCountry,
          telephone,
          socialMediaUrls
      }
  }`;

	return client.fetch(query, { slug }, { next: { revalidate: 3600 } });
}

export async function getBlogTPagesByCategory(
	category: BlogPreviewT["category"]
): Promise<BlogPreviewT[]> {
	const query = `*[_type == "blogtest" && category == $category] | order(_createdAt desc) {
      _id,
      category,
      name,
      pageTitle,
      tag,
      "slug": slug.current,
      "image": image.asset->url,
      meta_title,
      meta_description,
      ogTitle,
      ogDescription,
      ogUrl,
      "ogImageUrl": ogImage.asset->url
  }`;

	return client.fetch(query, { category }, { next: { revalidate: 3600 } });
}

export async function getAllBlogsT(): Promise<BlogT[]> {
	const query = `*[_type == "blogtest"] | order(_createdAt desc) {
       _id,
      category,
      name,
      pageTitle,
      tag,
      "slug": slug.current,
      sections[]{
      sectionType,
      title,
      content
    },
      "image": image.asset->url,
      meta_title,
      meta_description,
      ogTitle,
      ogDescription,
      ogUrl,
      "ogImageUrl": ogImage.asset->url,
      structuredData {
          clinicName,
          clinicUrl,
          logo,
          streetAddress,
          addressLocality,
          addressRegion,
          postalCode,
          addressCountry,
          telephone,
          socialMediaUrls
      }
  }`;

	return client.fetch(query, {}, { next: { revalidate: 3600 } });
}

export async function getCategoryStandalonePage(
	category: string
): Promise<CategoryPage> {
	const query = `*[_type == "categoryPage" && category == $category ][0] {
    title,
    category,   
    relatedBlogs {
      "selectedArticles": selectedArticles[]-> {
        meta_title,
        title,
        meta_description,
        "image": image.asset->url,
        "slug": slug.current
      }
    },
    "slug": slug.current,
    heroSection {
      title,
      heroPointers,
      videoUrl,
      "posterImage": posterImage.asset->url
    },
    howCanWeHelp {
      title,
      description,
      "image": image.asset->url,
      items[] {
        text,
        "icon": icon.asset->url,
        description
      }
    },
    whyChooseUs {
      title,
      videoUrl,
      items[] {
        text,
        "icon": icon.asset->url,
        description
      }
    },
    howWeWork {
      title,
      description,
      items[] {
        "icon": icon.asset->url,
        title,
        text
      }
    },
    carousel {
      items[] {
        title,
        "image": image.asset->url
      }
    },
    treatments {
      title,
      items[] {
        "icon": icon.asset->url,
        title,
        text
      }
    },
    benefits {
      title,
      description,
      "image": image.asset->url,
      items[] {
        "icon": icon.asset->url,
        title,
        text
      }
    },
    faqs,
    meta_title,
    meta_description,
    ogTitle,
    ogDescription,
    ogUrl,
    "ogImageUrl": ogImage.asset->url,
    structuredData {
      clinicName,
      clinicUrl,
      "logo": logo,
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry,
      telephone,
      socialMediaUrls
    }
  }`;

	return client.fetch(query, { category }, { next: { revalidate: 3600 } });
}
export async function getInternationalPatientsPage(): Promise<InternationalPatientsPage> {
	const query = `*[_type == "internationalPatientsPage"][0] {
    title,
    slug {
      current
    },
    relatedBlogs {
      selectedArticles[]-> {
        _id,
        meta_title,
        meta_description,
        "image": image.asset->url,
        "slug": slug.current
      }
    },
    heroSection {
      title,
      heroPointers,
      videoUrl,
      "posterImage": posterImage.asset->url
    },
    howCanWeHelp {
      title,
      description,
      "image": image.asset->url,
      items[] {
        text,
        "icon": icon.asset->url,
        description
      }
    },
    whyChooseUs {
      title,
      videoUrl,
      items[] {
        text,
        "icon": icon.asset->url,
        description
      }
    },
    howWeWork {
      title,
      description,
      items[] {
        "icon": icon.asset->url,
        title,
        pointers,
        "image": image.asset->url,
      }
    },
    treatments {
      title,
      items[] {
        "icon": icon.asset->url,
        title,
        text
      }
    },
    benefits {
      title,
      description,
      "image": image.asset->url,
      items[] {
        "icon": icon.asset->url,
        title,
        text
      }
    },
    faqs[] {
      question,
      answer
    },
    meta_title,
    meta_description,
    ogTitle,
    ogDescription,
    ogUrl,
    "ogImage": ogImage.asset->url,
    structuredData {
      clinicName,
      clinicUrl,
      "logo": logo,
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry,
      telephone,
      socialMediaUrls
    }
  }`;

	return client.fetch(query, {}, { next: { revalidate: 3600 } });
}
export async function getInvisalignPage(): Promise<InvisalignPage> {
	const query = `*[_type == "invisalignPage"][0] {
    title,
    slug {
      current
    },
    relatedBlogs {
      selectedArticles[]-> {
        _id,
        meta_title,
        meta_description,
        "image": image.asset->url,
        "slug": slug.current
      }
    },
    heroSection {
      title,
      heroPointers,
      videoUrl,
      "posterImage": posterImage.asset->url
    },
    howCanWeHelp {
      title,
      description,
      "image": image.asset->url,
      items[] {
        text,
        "icon": icon.asset->url,
        description
      }
    },
    whyChooseUs {
      title,
      videoUrl,
      items[] {
        text,
        "icon": icon.asset->url,
        description
      }
    },
    howWeWork {
      title,
      description,
      items[] {
        "icon": icon.asset->url,
        title,
        text
      }
    },
    treatments {
      title,
      items[] {
        "icon": icon.asset->url,
        title,
        text
      }
    },
    benefits {
      title,
      description,
      "image": image.asset->url,
      items[] {
        "icon": icon.asset->url,
        title,
        text
      }
    },
    faqs[] {
      question,
      answer
    },
    meta_title,
    meta_description,
    ogTitle,
    ogDescription,
    ogUrl,
    "ogImage": ogImage.asset->url,
    structuredData {
      clinicName,
      clinicUrl,
      "logo": logo,
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry,
      telephone,
      socialMediaUrls
    }
  }`;

	return client.fetch(query);
}

export async function getStandalonePage(
	category: string,
	pageSlug: string
): Promise<StandalonePage> {
	const query = `*[_type == "standalonePage" && category == $category && slug.current == $pageSlug][0]{
  title,
			category,
      "relatedBlogs": {
    "selectedArticles": relatedBlogs.selectedArticles[]-> {
      "meta_title": meta_title,
      meta_description,
      "slug": slug.current,
      "image": image.asset->url
    }
  },
			"slug": slug.current,
			heroSection {
				title,
				heroPointers,
				videoUrl,
				"posterImage": posterImage.asset->url
			},
			howCanWeHelp {
				title,
				description,
				"image": image.asset->url,
				items[] {
					text,
					"icon": icon.asset->url,
					description
				}
			},
			whyChooseUs {
				title,
				videoUrl,
				items[] {
					text,
					"icon": icon.asset->url,
					description
				}
			},
			howWeWork {
				title,
				description,
				items[] {
					"icon": icon.asset->url,
					title,
					text
				}
			},
			carousel {
				items[] {
					title,
					"image": image.asset->url
				}
			},
			treatments {
				title,
				items[] {
					"icon": icon.asset->url,
					title,
					text
				}
			},
			benefits {
				title,
				description,
				"image": image.asset->url,
				items[] {
					"icon": icon.asset->url,
					title,
					text
				}
			},
			faqs[] {
				question,
				answer
			},
			meta_title,
			meta_description,
			ogTitle,
			ogDescription,
			ogUrl,
			"ogImageUrl": ogImage.asset->url,
			structuredData {
				clinicName,
				clinicUrl,
				logo,
				streetAddress,
				addressLocality,
				addressRegion,
				postalCode,
				addressCountry,
				telephone,
				socialMediaUrls
			}
  }`;

	return client.fetch(
		query,
		{ category, pageSlug },
		{ next: { revalidate: 3600 } }
	);
}

export async function getStandalonePagesNoCat(): Promise<StandalonePage[]> {
	const query = `*[_type == "standalonePage"] {
      title,
			category,
			relatedBlogs {
				"selectedArticles": selectedArticles[]-> {
        title,
        meta_description,
        "image": image.asset->url,
        "slug": slug.current
        }
			},
			"slug": slug.current,
			heroSection {
				title,
				heroPointers,
				videoUrl,
				"posterImage": posterImage.asset->url
			},
			howCanWeHelp {
				title,
				description,
				"image": image.asset->url,
				items[] {
					text,
					"icon": icon.asset->url,
					description
				}
			},
			whyChooseUs {
				title,
				videoUrl,
				items[] {
					text,
					"icon": icon.asset->url,
					description
				}
			},
			howWeWork {
				title,
				description,
				items[] {
					"icon": icon.asset->url,
					title,
					text
				}
			},
			carousel {
				items[] {
					title,
					"image": image.asset->url
				}
			},
			treatments {
				title,
				items[] {
					"icon": icon.asset->url,
					title,
					text
				}
			},
			benefits {
				title,
				description,
				"image": image.asset->url,
				items[] {
					"icon": icon.asset->url,
					title,
					text
				}
			},
			faqs[] {
				question,
				answer
			},
			meta_title,
			meta_description,
			ogTitle,
			ogDescription,
			ogUrl,
			"ogImageUrl": ogImage.asset->url,
			structuredData {
				clinicName,
				clinicUrl,
				logo,
				streetAddress,
				addressLocality,
				addressRegion,
				postalCode,
				addressCountry,
				telephone,
				socialMediaUrls
			}
  }`;

	return client.fetch(query);
}

export async function getCategoryMetadata(category: string) {
	const data = await getCategoryStandalonePage(category);

	if (!data) {
		return {
			title: "Not Found",
			description: "The requested page does not exist.",
		};
	}

	return {
		title: data.meta_title || data.ogTitle,
		description: data.meta_description,
		openGraph: {
			title: data.ogTitle || data.meta_title,
			description: data.ogDescription || data.meta_description,
			url: `/${category}`,
			images: [
				{
					url: data.ogImageUrl ? data.ogImageUrl : "",
					width: 1200,
					height: 630,
					alt: data.ogTitle || data.meta_title,
				},
			],
		},
		twitter: {
			title: data.ogTitle || data.meta_title,
			description: data.ogDescription || data.meta_description,
			images: [
				{
					url: data.ogImageUrl ? data.ogImageUrl : "",
					width: 1200,
					height: 630,
					alt: data.ogTitle || data.meta_title,
				},
			],
			card: "summary_large_image",
		},
	};
}

export async function getMetadata(category: string, slug: string) {
	const data = await getStandalonePage(category, slug);

	if (!data) {
		return {
			title: "Not Found",
			description: "The requested page does not exist.",
		};
	}

	return {
		title: data.meta_title || data.ogTitle,
		description: data.meta_description,
		openGraph: {
			title: data.ogTitle || data.meta_title,
			description: data.ogDescription || data.meta_description,
			url: `/${category}/${slug}`,
			images: [
				{
					url: data.ogImageUrl,
					width: 1200,
					height: 630,
					alt: data.ogTitle,
				},
			],
		},
		twitter: {
			title: data.ogTitle || data.meta_title,
			description: data.ogDescription || data.meta_description,
			images: [
				{
					url: data.ogImageUrl,
					width: 1200,
					height: 630,
					alt: data.ogTitle,
				},
			],
			card: "summary_large_image",
		},
	};
}

export async function getIPMetadata() {
	const data = await getInternationalPatientsPage();

	if (!data) {
		return {
			title: "Not Found",
			description: "The requested page does not exist.",
		};
	}

	return {
		title: data.meta_title || data.ogTitle,
		description: data.meta_description,
		openGraph: {
			title: data.ogTitle || data.meta_title,
			description: data.ogDescription || data.meta_description,
			url: `/international-patients`,
			images: [
				{
					url: data.ogImage,
					width: 1200,
					height: 630,
					alt: data.ogTitle,
				},
			],
		},
		twitter: {
			title: data.ogTitle || data.meta_title,
			description: data.ogDescription || data.meta_description,
			images: [
				{
					url: data.ogImage,
					width: 1200,
					height: 630,
					alt: data.ogTitle,
				},
			],
			card: "summary_large_image",
		},
	};
}
export async function getInvisalignMetadata() {
	const data = await getInvisalignPage();

	if (!data) {
		return {
			title: "Not Found",
			description: "The requested page does not exist.",
		};
	}

	return {
		title: data?.meta_title || data?.ogTitle,
		description: data?.meta_description,
		openGraph: {
			title: data?.ogTitle || data?.meta_title,
			description: data?.ogDescription || data?.meta_description,
			url: `/invisalign`,
			images: [
				{
					url: data?.ogImage,
					width: 1200,
					height: 630,
					alt: data?.ogTitle,
				},
			],
		},
		twitter: {
			title: data?.ogTitle || data?.meta_title,
			description: data?.ogDescription || data?.meta_description,
			images: [
				{
					url: data?.ogImage,
					width: 1200,
					height: 630,
					alt: data?.ogTitle,
				},
			],
			card: "summary_large_image",
		},
	};
}

export async function fetchHomePageMetadata(): Promise<HomepageMetadata> {
	const query = `*[_type == "homepageMetadata"][0]{
    title,
    description,
    ogTitle,
    ogDescription,
    "ogImage": ogImage.asset->url
  }`;
	return client.fetch(query, {}, { next: { revalidate: 3600 } });
}
