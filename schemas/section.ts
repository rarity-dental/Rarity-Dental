import { defineType, defineField } from "sanity";

export default defineType({
	name: "section",
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
					{ title: "Book Consultation", value: "bookconsultation" },
					{ title: "Custom", value: "custom" },
				],
				layout: "dropdown",
			},
		}),
		defineField({
			name: "customTitle",
			title: "Custom Section Heading",
			type: "string",
			hidden: ({ parent }) => parent?.sectionType !== "custom", // Show only if sectionType is "custom"
		}),
		defineField({
			name: "title",
			title: "Section Title",
			type: "string",
			description: "Optional title for the section",
		}),
		defineField({
			name: "content",
			title: "Content",
			type: "blockContent", // Ensure you have defined your blockContent type elsewhere
		}),
	],
	preview: {
		select: {
			title: "sectionType",
			subtitle: "title",
			customTitle: "customTitle",
		},
		prepare(selection) {
			const { title, subtitle, customTitle } = selection;
			let finalTitle = title;
			let finalSubtitle = subtitle
				? subtitle.charAt(0).toUpperCase() + subtitle.slice(1)
				: "Unknown";

			if (title === "custom") {
				if (customTitle && !subtitle) {
					finalTitle = "Custom";
					finalSubtitle = customTitle;
				} else if (customTitle && subtitle) {
					finalTitle = customTitle;
					finalSubtitle =
						subtitle.charAt(0).toUpperCase() + subtitle.slice(1);
				}
			} else if (title && !subtitle) {
				finalSubtitle = title;
			}

			return {
				title: finalTitle,
				subtitle: finalSubtitle,
			};
		},
	},
});
