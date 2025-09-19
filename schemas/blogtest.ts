import { defineField, defineType } from "sanity";
import { object } from "zod";

export default defineType({
	name: "blogtest",
	title: "Blogs",
	type: "document",
	icon: () => "📑",
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
						title: "International Patients",
						value: "international-patients",
					},
					{
						title: "Invisalign",
						value: "invisalign",
					},
				],
			},
		}),
		defineField({
			name: "name",
			title: "Procedure Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "pageTitle",
			title: "Page Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "tag",
			title: "Tag",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "sections",
			title: "Sections",
			type: "array",
			of: [{ type: "section" }],
			description:
				"Add, remove, and reorder sections for this blog as needed.",
		}),

		defineField({
			name: "image",
			title: "Procedure Image",
			type: "image",
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "meta_title",
			title: "Meta Title",
			type: "text",
		}),
		defineField({
			name: "meta_description",
			title: "Meta Description",
			type: "text",
		}),
		defineField({
			name: "ogTitle",
			title: "OG Title",
			type: "string",
		}),
		defineField({
			name: "ogDescription",
			title: "OG Description",
			type: "text",
		}),
		defineField({
			name: "ogUrl",
			title: "OG URL",
			type: "url",
		}),
		defineField({
			name: "ogImage",
			title: "OG Image",
			type: "image",
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
			title: "pageTitle",
			media: "image",
		},
	},
});
