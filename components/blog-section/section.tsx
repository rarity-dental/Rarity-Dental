// Section.tsx
import MyPortableText from "../sanity/portableComponent";

interface SectionProps {
	sectionType: string;
	title?: string;
	customTitle?: string;
	content: any;
	mainSectionIndex: number;
	subSectionIndex?: number;
	// groupHeaderTitle is passed in from the grouping logic.
	groupHeaderTitle: string;
}

const Section = ({
	sectionType,
	title,
	customTitle,
	content,
	mainSectionIndex,
	subSectionIndex,
	groupHeaderTitle,
}: SectionProps) => {
	// For a sub-item with no title, render only the content.
	if (subSectionIndex !== undefined && !title) {
		return (
			<div className="mt-6 mb-4">
				<div className="mt-4">
					<MyPortableText value={content} />
				</div>
			</div>
		);
	}

	// If there's no subSectionIndex, it's a group header.
	if (subSectionIndex === undefined) {
		return (
			<div className="mt-3 md:mt-6 mb-2 md:mb-4">
				{/* Render the group header outside of PortableText */}
				<h1 className="!text-3xl font-bold text-copyColor">
					{mainSectionIndex}. {groupHeaderTitle}
				</h1>
				<div className="mt-2 md:mt-4">
					<MyPortableText value={content} />
				</div>
			</div>
		);
	}

	// Otherwise, render a sub-section heading.
	return (
		<div className="mt-0 md:mt-6 mb-2 md:mb-4">
			<h2 className="!text-lg !leading-[2rem] !md:leading-[1.75rem] !md:text-2xl font-bold text-copyColor">
				{mainSectionIndex}.{subSectionIndex} {title || ""}
			</h2>
			<div className="mt-4">
				<MyPortableText value={content} />
			</div>
		</div>
	);
};

export default Section;
