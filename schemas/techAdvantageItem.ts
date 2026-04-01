import { defineField, defineType } from "sanity";

export default defineType({
	name: "techAdvantageItem",
	title: "Tech Advantage Item",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "icon",
			title: "Custom Icon",
			type: "image",
			options: { hotspot: true },
			description: "Upload any icon image to use for this card.",
		}),
		defineField({
			name: "fallbackIcon",
			title: "Fallback Built-in Icon",
			type: "string",
			options: {
				list: [
					{ title: "3D Scan / Print", value: "print" },
					{ title: "Digital Smile Design", value: "dsd" },
					{ title: "Laser", value: "laser" },
					{ title: "Analysis / AR", value: "ar" },
				],
				layout: "dropdown",
			},
			initialValue: "dsd",
			description:
				"Used only if no custom icon image is uploaded above.",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			rows: 5,
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "video",
			title: "Video URL",
			type: "url",
			validation: (Rule) =>
				Rule.required().uri({
					allowRelative: false,
					scheme: ["http", "https"],
				}),
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "fallbackIcon",
			media: "icon",
		},
	},
});
