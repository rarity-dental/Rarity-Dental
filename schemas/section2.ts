import { defineType, defineField } from "sanity";

export default defineType({
	name: "section2",
	title: "Section",
	type: "object",
	fields: [
		defineField({
			name: "sectionType",
			title: "Section Type",
			type: "string",
			options: {
				list: [
					{ title: "Introduction", value: "introduction" },
					{ title: "Benefits", value: "benefits" },
					{ title: "Process", value: "process" },
					{ title: "Conclusion", value: "conclusion" },
					{ title: "Custom", value: "custom" },
				],
				layout: "dropdown",
			},
		}),
		defineField({
			name: "title",
			title: "Section Title",
			type: "string",
			description: "Optional title for the section",
		}),
		defineField({
			name: "subheadings",
			title: "Subheadings",
			type: "array",
			of: [
				defineField({
					name: "subheading",
					title: "Subheading",
					type: "object",
					fields: [
						defineField({
							name: "subheadingTitle",
							title: "Subheading Title",
							type: "string",
						}),
						defineField({
							name: "content",
							title: "Content",
							type: "blockContent",
						}),
					],
					preview: {
						select: {
							title: "subheadingTitle",
						},
					},
				}),
			],
			description:
				"Optional subheadings for this section. Each subheading can have its own title and content.",
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "sectionType",
		},
	},
});
