import { defineField, defineType } from "sanity";

export default defineType({
	name: "homepageMetadata",
	title: "Homepage Metadata",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Page Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Page Description",
			type: "text",
		}),
		defineField({
			name: "ogTitle",
			title: "Open Graph Title",
			type: "string",
		}),
		defineField({
			name: "ogDescription",
			title: "Open Graph Description",
			type: "text",
		}),
		defineField({
			name: "ogImage",
			title: "Open Graph Image",
			type: "image",
			options: { hotspot: true },
		}),
	],
});
