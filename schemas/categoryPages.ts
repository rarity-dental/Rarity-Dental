import { defineField, defineType } from "sanity";

const categoryToSchemaType = {
	"smile-designing": "smiledesign",
	"advanced-technology": "technology",
	"single-day-dentistry": "singledaydentistry",
	"specialised-treatments": "specialisedTreatment",
	"international-patients": "internationalPatientsPage",
} as const;

export default defineType({
	name: "categoryPage",
	title: "Category Pages",
	type: "document",
	icon: () => "📚",
	fields: [
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			validation: (Rule) => Rule.required(),
			options: {
				list: [
					{ title: "Smile Designing", value: "smile-designing" },
					{
						title: "Advanced Technology",
						value: "advanced-technology",
					},
					{
						title: "Single Day Dentistry",
						value: "single-day-dentistry",
					},
					{
						title: "Specialised Treatments",
						value: "specialised-treatments",
					},
					{
						title: "Landing Pages - Gurgaon",
						value: "landing-pages-gurgaon",
					},
				],
			},
		}),

		defineField({
			name: "relatedBlogs",
			title: "Related Blogs",
			type: "object",
			fields: [
				{
					name: "selectedArticles",
					title: "Selected Articles",
					type: "array",
					validation: (Rule) =>
						Rule.length(3).error(
							"Exactly 3 articles must be selected"
						),
					of: [
						{
							type: "reference",
							to: [{ type: "blogtest" }],
							options: {
								filter: ({ document }) => {
									if (!document?.category)
										return { filter: '_type == "none"' };
									return {
										filter: '_type == "blogtest" && category == $category',
										params: { category: document.category },
									};
								},
							},
						},
					],
					hidden: ({ document }) => !document?.category,
					description:
						"Select exactly 3 articles that will be displayed in the related content section.",
				},
			],
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			hidden: ({ parent }) => parent?.isStandalone,
			//   hidden: ({ document }) => document?.isStandalone,
		}),
		defineField({
			name: "title",
			title: "Page Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "heroSection",
			title: "Hero Section",
			type: "object",
			fields: [
				{ name: "title", title: "Hero Title", type: "string" },
				{
					name: "heroPointers",
					title: "Hero Pointers",
					type: "array",
					of: [{ type: "string" }],
				},
				{
					name: "videoUrl",
					title: "Background Video URL",
					type: "url",
				},
				{
					name: "posterImage",
					title: "Poster Image",
					type: "image",
				},
			],
		}),
		defineField({
			name: "howCanWeHelp",
			title: "How Can We Help",
			type: "object",
			fields: [
				{ name: "title", title: "Title", type: "string" },
				{ name: "description", title: "Description", type: "text" },
				{ name: "image", title: "Image", type: "image" },
				{
					name: "items",
					title: "Items",
					type: "array",
					of: [
						{
							type: "object",
							fields: [
								{ name: "text", title: "Text", type: "string" },
								{ name: "icon", title: "Icon", type: "image" },

								{
									name: "description",
									title: "Description",
									type: "text",
								},
							],
						},
					],
				},
			],
		}),
		defineField({
			name: "whyChooseUs",
			title: "Why Choose Us",
			type: "object",
			fields: [
				{ name: "title", title: "Title", type: "string" },
				{
					name: "videoUrl",
					title: "Background Video URL",
					type: "url",
				},
				{
					name: "items",
					title: "Items",
					type: "array",
					of: [
						{
							type: "object",
							fields: [
								{ name: "text", title: "Text", type: "string" },
								{ name: "icon", title: "Icon", type: "image" },
								{
									name: "description",
									title: "Description",
									type: "text",
								},
							],
						},
					],
				},
			],
		}),
		defineField({
			name: "howWeWork",
			title: "How We Work",
			type: "object",
			fields: [
				{ name: "title", title: "Title", type: "string" },
				{ name: "description", title: "Description", type: "text" },
				{
					name: "items",
					title: "Items",
					type: "array",
					of: [
						{
							type: "object",
							fields: [
								{ name: "icon", title: "Icon", type: "image" },
								{
									name: "title",
									title: "Title",
									type: "string",
								},
								{ name: "text", title: "Text", type: "text" },
							],
						},
					],
				},
			],
		}),
		defineField({
			name: "carousel",
			title: "Carousel",
			type: "object",
			fields: [
				{
					name: "items",
					title: "Items",
					type: "array",
					of: [
						{
							type: "object",
							fields: [
								{
									name: "title",
									title: "Title",
									type: "string",
								},
								{
									name: "image",
									title: "Image",
									type: "image",
								},
							],
						},
					],
				},
			],
		}),
		defineField({
			name: "treatments",
			title: "Treatments",
			type: "object",
			fields: [
				{ name: "title", title: "Title", type: "string" },
				{
					name: "items",
					title: "Items",
					type: "array",
					of: [
						{
							type: "object",
							fields: [
								{ name: "icon", title: "Icon", type: "image" },
								{
									name: "title",
									title: "Title",
									type: "string",
								},
								{ name: "text", title: "Text", type: "text" },
							],
						},
					],
				},
			],
		}),
		defineField({
			name: "benefits",
			title: "Benefits",
			type: "object",
			fields: [
				{ name: "title", title: "Title", type: "string" },
				{ name: "description", title: "Description", type: "text" },
				{ name: "image", title: "Image", type: "image" },
				{
					name: "items",
					title: "Items",
					type: "array",
					of: [
						{
							type: "object",
							fields: [
								{ name: "icon", title: "Icon", type: "image" },
								{
									name: "title",
									title: "Title",
									type: "string",
								},
								{ name: "text", title: "Text", type: "text" },
							],
						},
					],
				},
			],
		}),
		defineField({
			name: "faqs",
			title: "FAQs",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ name: "question", type: "string", title: "Question" },
						{ name: "answer", type: "text", title: "Answer" },
					],
				},
			],
		}),
		defineField({
			name: "meta_title",
			title: "Meta Title",
			type: "text",
			//   validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "meta_description",
			title: "Meta Description",
			type: "text",
			//   validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "ogTitle",
			title: "OG Title",
			type: "string",
			//   validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "ogDescription",
			title: "OG Description",
			type: "text",
			//   validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "ogUrl",
			title: "OG URL",
			type: "url",
			//   validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "ogImage",
			title: "OG Image",
			type: "image",
			//   validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "structuredData",
			title: "Structured Data",
			type: "object",
			fields: [
				{ name: "clinicName", type: "string", title: "Clinic Name" },
				{ name: "clinicUrl", type: "url", title: "Clinic URL" },
				{ name: "logo", type: "url", title: "Logo URL" },
				{
					name: "streetAddress",
					type: "string",
					title: "Street Address",
				},
				{ name: "addressLocality", type: "string", title: "City" },
				{ name: "addressRegion", type: "string", title: "Region" },
				{ name: "postalCode", type: "string", title: "Postal Code" },
				{ name: "addressCountry", type: "string", title: "Country" },
				{ name: "telephone", type: "string", title: "Telephone" },
				{
					name: "socialMediaUrls",
					type: "array",
					of: [{ type: "url" }],
					title: "Social Media URLs",
				},
			],
		}),
	],
	preview: {
		select: {
			title: "title",
			category: "category",
			isStandalone: "isStandalone",
			slug: "slug",
		},
		prepare({ title, category }) {
			return {
				title,
				subtitle: `Category Page - ${category}`,
			};
		},
	},
});
