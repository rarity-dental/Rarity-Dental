import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import imageUrlBuilder from "@sanity/image-url";
import client from "@/sanity/sanity.client";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
	return builder.image(source);
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

//prettier-ignore
export const getSectionDisplayName = (section: {
	sectionType: string;
	title?: string;
	customTitle?: string;
  }) => {
	if (section.sectionType === "custom" && section.customTitle) {
	  return section.customTitle;
	}
	if (section.title) {
	  return section.title;
	}
	return section.sectionType.charAt(0).toUpperCase() + section.sectionType.slice(1);
  };

export const getHeadingText = (
	section: { sectionType: string; title?: string; customTitle?: string },
	isGroupHeader: boolean
): string => {
	if (section.sectionType === "custom") {
		// For custom sections:
		if (isGroupHeader) {
			// Use the custom heading for the group header.
			return section.customTitle || "Custom Section";
		} else {
			// Subsequent items use the section title.
			return section.title || "";
		}
	} else {
		// For non-custom sections:
		if (isGroupHeader) {
			// Use the section’s title if available; otherwise fallback to a capitalized section type.
			return (
				section.title ||
				section.sectionType.charAt(0).toUpperCase() +
					section.sectionType.slice(1)
			);
		} else {
			// Subsequent items: use the section’s title.
			return section.title || "";
		}
	}
};

export interface SectionGroup {
	mainIndex: number;
	sectionType: string;
	groupHeaderTitle: string;
	items: any[];
}

export const groupSections = (sections: any[]): SectionGroup[] => {
	const groups: SectionGroup[] = [];
	let currentGroup: SectionGroup | null = null;

	sections.forEach((section) => {
		const isCustom = section.sectionType === "custom";
		const groupKey = isCustom
			? section.customTitle || "custom"
			: section.sectionType;
		const headerLabel = isCustom
			? section.customTitle || "Custom Section"
			: section.sectionType.charAt(0).toUpperCase() +
				section.sectionType.slice(1);

		if (
			!currentGroup ||
			currentGroup.sectionType !== section.sectionType ||
			(isCustom && groupKey !== currentGroup.groupHeaderTitle)
		) {
			currentGroup = {
				mainIndex: groups.length + 1,
				sectionType: section.sectionType,
				groupHeaderTitle: headerLabel,
				items: [section],
			};
			groups.push(currentGroup);
		} else {
			currentGroup.items.push(section);
		}
	});
	return groups;
};
