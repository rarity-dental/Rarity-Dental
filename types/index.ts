import { PortableTextBlock } from "@portabletext/types";

export interface HomepageMetadata {
	title: string;
	description: string;
	ogTitle: string;
	ogDescription: string;
	ogImage: string;
}

export type BlogCategory =
	| "smile-designing"
	| "advanced-technology"
	| "single-day-dentistry"
	| "specialised-treatments"
	| "international-patients"
	| "invisalign"
	| "landing-pages-gurgaon";

export interface SelectedArticle {
	_id: string;
	meta_title: string; // Blog title
	meta_description: string; // Meta description for the blog
	image: string; // URL of the blog's featured image
	slug: string; // Blog slug for the URL
}

// Type for the related blogs field
export interface RelatedBlogs {
	selectedArticles: SelectedArticle[]; // Array of selected blog articles
}
export interface AdvancedTechnologyStandalone {
	heroSection: {
		title: string;
		heroPointers: string[];
		videoUrl: string;
	};

	howCanWeHelp: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			text: string;
			icon: string;
			description: string;
		}>;
	};

	whyChooseUs: {
		title: string;
		videoUrl: string;
		items: Array<{
			text: string;
			icon: string;
		}>;
	};

	howWeWork: {
		title: string;
		description: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};

	carousel: {
		items: Array<{
			title: string;
			image: string;
		}>;
	};

	treatments: {
		title: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};

	benefits: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};

	faqs: Array<{
		question: string;
		answer: string;
	}>;

	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImage: string;

	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}

export interface Technology {
	_id: string;
	name: string;
	pageTitle: string;
	tag: string;
	slug: {
		current: string;
	};
	body: PortableTextBlock[];
	image: {
		asset: {
			_ref: string;
			_type: "reference";
		};
	}[];
	faqs: {
		question: string;
		answer: string;
	}[];
	author: {
		name: string;
		avatar: string;
		authorHref?: string;
		publishedDate: string;
		readingTime: number;
	};
	conclusion: string;
	videoUrl?: string;
	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImageUrl: string;
	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}

export interface SpecialisedTreatmentStandalone {
	heroSection: {
		title: string;
		heroPointers: string[];
		videoUrl: string;
	};

	howCanWeHelp: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			text: string;
			icon: string;
			description: string;
		}>;
	};

	whyChooseUs: {
		title: string;
		videoUrl: string;
		items: Array<{
			text: string;
			icon: string;
		}>;
	};

	howWeWork: {
		title: string;
		description: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};

	carousel: {
		items: Array<{
			title: string;
			image: string;
		}>;
	};

	treatments: {
		title: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};

	benefits: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};

	faqs: Array<{
		question: string;
		answer: string;
	}>;

	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImage: string;

	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}

export interface SpecialisedTreatment {
	_type: "specialisedTreatment";
	_id: string;
	title: string;
	pageTitle: string;
	tag: string;
	slug: {
		_type: "slug";
		current: string;
	};
	image: {
		asset: {
			_ref: string;
			_type: "reference";
		};
	}[];
	faqs: {
		question: string;
		answer: string;
	}[];
	author: {
		name: string;
		avatar: string;
		authorHref?: string;
		publishedDate: string;
		readingTime: number;
	};
	introduction: PortableTextBlock[];
	whyChoose: PortableTextBlock[];
	technologies: PortableTextBlock[][];
	procedures: PortableTextBlock[];
	types: PortableTextBlock[];
	comparison: PortableTextBlock[];
	patientExperience: PortableTextBlock[];
	cost: PortableTextBlock[];
	conclusion: PortableTextBlock[];
	beforeAfter?: Array<{
		_type: "image";
		asset: {
			_ref: string;
			_type: "reference";
			imageUrl: string;
		};
	}>;
	testimonials?: string[];
	videoUrl?: string;
	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImageUrl: string;
	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}

export interface SmileDesignStandalone {
	heroSection: {
		title: string;
		heroPointers: string[];
		videoUrl: string;
	};

	howCanWeHelp: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			text: string;
			icon: string;
			description: string;
		}>;
	};

	whyChooseUs: {
		title: string;
		videoUrl: string;
		items: Array<{
			text: string;
			icon: string;
		}>;
	};

	howWeWork: {
		title: string;
		description: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};

	carousel: {
		items: Array<{
			title: string;
			image: string;
		}>;
	};

	treatments: {
		title: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};

	benefits: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};

	faqs: Array<{
		question: string;
		answer: string;
	}>;

	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImage: string;

	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}

export interface SmileDesign {
	_id: string;
	name: string;
	pageTitle: string;
	tag: string;
	slug: {
		current: string;
	};
	tableOfContents: {
		introduction: {
			title: string;
			whatIs: Array<{
				title: string;
				content: PortableTextBlock[];
			}>;
		};
		benefits: Array<{
			title: string;
			description: PortableTextBlock[];
		}>;
		processAtClinic: Array<{
			title: string;
			description: PortableTextBlock[];
		}>;
		keyTakeaways: PortableTextBlock[];
		conclusion: PortableTextBlock[];
		bookConsultation: PortableTextBlock[];
	};
	image: {
		asset: {
			_ref: string;
			_type: "reference";
		};
	}[];
	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImageUrl: string;
	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}

export interface Section {
	sectionType: string;
	title?: string;
	content: PortableTextBlock[];
	customTitle?: string;
	mainSectionIndex?: number;
	subSectionIndex?: number;
}
export interface Subheading {
	_key: string;
	subheadingTitle: string;
	content: any[]; // PortableText content
}
export interface Section2 {
	_key: string;
	sectionType: string;
	title: string;
	subheadings?: Subheading[];
}

export interface Blog {
	_id: string;
	category: BlogCategory;
	name: string;
	pageTitle: string;
	tag: string;
	slug: {
		current: string;
	};
	sections: Section2[];
	image: {
		asset: {
			_ref: string;
			_type: "reference";
		};
	};
	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImageUrl: string;
	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}
export interface BlogT {
	_id: string;
	category: BlogCategory;
	name: string;
	pageTitle: string;
	tag: string;
	slug: {
		current: string;
	};
	sections: Section[];
	image: {
		asset: {
			_ref: string;
			_type: "reference";
		};
	};
	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImageUrl: string;
	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}

export interface BlogPreview {
	_id: string;
	category: BlogCategory;
	name: string;
	pageTitle: string;
	tag: string;
	slug: string;
	image: string;
	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImageUrl: string;
}
export interface BlogPreviewT {
	_id: string;
	category: BlogCategory;
	name: string;
	pageTitle: string;
	tag: string;
	slug: string;
	image: string;
	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImageUrl: string;
}

export interface SingleDayDentistryStandalone {
	heroSection: {
		title: string;
		heroPointers: string[];
		videoUrl: string;
	};

	howCanWeHelp: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			text: string;
			icon: string;
			description: string;
		}>;
	};

	whyChooseUs: {
		title: string;
		videoUrl: string;
		items: Array<{
			text: string;
			icon: string;
		}>;
	};

	howWeWork: {
		title: string;
		description: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};

	carousel: {
		items: Array<{
			title: string;
			image: string;
		}>;
	};

	treatments: {
		title: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};

	benefits: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};

	faqs: Array<{
		question: string;
		answer: string;
	}>;

	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImage: string;

	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}

export interface SingleDayDentistry {
	_id: string;
	name: string;
	pageTitle: string;
	tag: string;
	slug: {
		current: string;
	};
	body: PortableTextBlock[];
	image: {
		asset: {
			_ref: string;
			_type: "reference";
		};
	}[];
	faqs: {
		question: string;
		answer: string;
	}[];
	author: {
		name: string;
		avatar: string;
		authorHref?: string;
		publishedDate: string;
		readingTime: number;
	};
	conclusion: string;
	videoUrl?: string;
	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImageUrl: string;
	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}

export interface CategoryPage {
	title: string;
	category: BlogCategory;
	relatedBlogs: {
		selectedArticles: Array<{
			_id: string;
			meta_title: string;
			title: string;
			meta_description: string;
			image: string;
			slug: string;
		}>;
	};
	slug?: {
		current: string;
	};
	heroSection: {
		title: string;
		heroPointers: string[];
		videoUrl: string;
		posterImage: string;
	};
	howCanWeHelp: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			text: string;
			icon: string;
			description: string;
		}>;
	};
	whyChooseUs: {
		title: string;
		videoUrl: string;
		items: Array<{
			text: string;
			icon: string;
			description: string;
		}>;
	};
	howWeWork: {
		title: string;
		description: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};
	carousel: {
		items: Array<{
			title: string;
			image: string;
		}>;
	};
	treatments: {
		title: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};
	benefits: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};
	faqs: Array<{
		question: string;
		answer: string;
	}>;
	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImageUrl: string;
	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}
export interface InternationalPatientsPage {
	title: string;
	slug?: {
		current: string;
	};
	relatedBlogs: {
		selectedArticles: Array<{
			_id: string;
			meta_title: string;
			meta_description: string;
			image: string;
			slug: string;
		}>;
	};
	heroSection: {
		title: string;
		heroPointers: string[];
		videoUrl: string;
		posterImage: string;
	};
	howCanWeHelp: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			text: string;
			icon: string;
			description: string;
		}>;
	};
	whyChooseUs: {
		title: string;
		videoUrl: string;
		items: Array<{
			text: string;
			icon: string;
			description: string;
		}>;
	};
	howWeWork: {
		title: string;
		description: string;
		items: Array<{
			icon: string;
			title: string;
			pointers: string[];
			image: string;
		}>;
	};
	treatments: {
		title: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};
	benefits: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};
	faqs: Array<{
		question: string;
		answer: string;
	}>;
	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImage: string;
	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}
export interface InvisalignPage {
	title: string;
	slug?: {
		current: string;
	};
	relatedBlogs: {
		selectedArticles: Array<{
			_id: string;
			meta_title: string;
			meta_description: string;
			image: string;
			slug: string;
		}>;
	};
	heroSection: {
		title: string;
		heroPointers: string[];
		videoUrl: string;
		posterImage: string;
	};
	howCanWeHelp: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			text: string;
			icon: string;
			description: string;
		}>;
	};
	whyChooseUs: {
		title: string;
		videoUrl: string;
		items: Array<{
			text: string;
			icon: string;
			description: string;
		}>;
	};
	howWeWork: {
		title: string;
		description: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};
	treatments: {
		title: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};
	benefits: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};
	faqs: Array<{
		question: string;
		answer: string;
	}>;
	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImage: string;
	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}

export interface StandalonePage {
	title: string;
	category: BlogCategory;
	relatedBlogs: RelatedBlogs;
	slug?: {
		current: string;
	};
	heroSection: {
		title: string;
		heroPointers: string[];
		videoUrl: string;
		posterImage: string;
	};
	howCanWeHelp: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			text: string;
			icon: string;
			description: string;
		}>;
	};
	whyChooseUs: {
		title: string;
		videoUrl: string;
		items: Array<{
			text: string;
			icon: string;
			description: string;
		}>;
	};
	howWeWork: {
		title: string;
		description: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};
	carousel: {
		items: Array<{
			title: string;
			image: string;
		}>;
	};
	treatments: {
		title: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};
	benefits: {
		title: string;
		description: string;
		image: string;
		items: Array<{
			icon: string;
			title: string;
			text: string;
		}>;
	};
	faqs: Array<{
		question: string;
		answer: string;
	}>;
	meta_title: string;
	meta_description: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImageUrl: string;
	structuredData: {
		clinicName: string;
		clinicUrl: string;
		logo: string;
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
		telephone: string;
		socialMediaUrls: string[];
	};
}

export interface SmileDesignListItem {
	_id: string;
	name: string;
	pageTitle: string;
	tag: string;
	slug: string;
	image: string;
	meta_title?: string;
	meta_description?: string;
	ogTitle?: string;
	ogDescription?: string;
	ogUrl?: string;
	ogImageUrl?: string;
}
