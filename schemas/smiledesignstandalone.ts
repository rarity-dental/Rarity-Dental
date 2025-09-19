import { defineField, defineType } from "sanity";

export default defineType({
	name: "smiledesignstandalone",
	title: "Smile Designing - Standalone Page",
	type: "document",
	icon: () => "😁",
	fields: [
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
			// validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "meta_description",
			title: "Meta Description",
			type: "text",
			// validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "ogTitle",
			title: "OG Title",
			type: "string",
			// validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "ogDescription",
			title: "OG Description",
			type: "text",
			// validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "ogUrl",
			title: "OG URL",
			type: "url",
			// validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "ogImage",
			title: "OG Image",
			type: "image",
			// validation: (Rule) => Rule.required(),
		}),
		// Schema.org structured data
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
			title: "meta_title",
			media: "image",
		},
	},
});
