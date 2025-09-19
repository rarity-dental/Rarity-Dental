import { defineField, defineType } from "sanity";

export default defineType({
	name: "specialisedTreatment",
	title: "Specialised Treatment",
	type: "document",
	icon: () => "🦷",
	fields: [
		defineField({
			name: "title",
			title: "Title",
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
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "image",
			title: "Specialised Treatment Image",
			type: "image",
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "introduction",
			title: "Introduction",
			type: "blockContent",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "what",
			title: "What",
			type: "blockContent",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "whyChoose",
			title: "Why Choose",
			type: "blockContent",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "technologies",
			title: "Technologies",
			type: "blockContent",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "procedures",
			title: "Procedures",
			type: "blockContent",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "types",
			title: "Types of Treatments",
			type: "blockContent",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "comparison",
			title: "Comparison",
			type: "blockContent",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "patientExperience",
			title: "Patient Experience",
			type: "blockContent",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "cost",
			title: "Cost and Prices",
			type: "blockContent",
			validation: (Rule) => Rule.required(),
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
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "conclusion",
			title: "Conclusion",
			type: "blockContent",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "beforeAfter",
			title: "Before and After",
			type: "array",
			of: [
				{
					type: "image",
					options: {
						hotspot: true,
					},
				},
			],
		}),
		defineField({
			name: "testimonials",
			title: "Testimonials",
			type: "array",
			of: [{ type: "url" }],
		}),
		defineField({
			name: "videoUrl",
			title: "Video URL",
			type: "url",
		}),
		defineField({
			name: "author",
			title: "Author",
			type: "object",

			fields: [
				{ name: "name", type: "string", title: "Name" },
				{ name: "avatar", type: "image", title: "Avatar" },
				{ name: "authorHref", type: "string", title: "Author URL" },
				{
					name: "publishedAt",
					type: "string",
					title: "Published at",
				},
				{
					name: "readingTime",
					type: "number",
					title: "Reading time (in minutes)",
				},
			],
		}),
		defineField({
			name: "meta_title",
			title: "Meta Title",
			type: "text",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "meta_description",
			title: "Meta Description",
			type: "text",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "ogTitle",
			title: "OG Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "ogDescription",
			title: "OG Description",
			type: "text",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "ogUrl",
			title: "OG URL",
			type: "url",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "ogImage",
			title: "OG Image",
			type: "image",
			validation: (Rule) => Rule.required(),
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
});
