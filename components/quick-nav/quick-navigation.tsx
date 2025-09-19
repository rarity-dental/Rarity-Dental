import { Section2 } from "@/types";
import React from "react";

interface QuickNavigationProps {
	sections: Section2[];
}

const QuickNavigation: React.FC<QuickNavigationProps> = ({ sections }) => {
	return (
		<nav className="p-4 rounded-lg bg-gray-100">
			<h2 className="text-2xl font-bold mb-4">Quick Navigation</h2>
			<ul className="space-y-2">
				{sections.map((section, sectionIndex) => (
					<li key={section._key}>
						{/* Section title */}
						<a
							href={`#section-${sectionIndex}`}
							className="font-bold hover:underline">
							{sectionIndex + 1}. {section.title}
						</a>
						{/* If there are subheadings, render them in a nested list */}
						{section.subheadings &&
							section.subheadings.length > 0 && (
								<ul className="ml-4 mt-1 space-y-1">
									{section.subheadings.map(
										(sub, subIndex) => (
											<li key={sub._key}>
												<a
													href={`#section-${sectionIndex}-sub-${subIndex}`}
													className="hover:underline">
													{sectionIndex + 1}.
													{subIndex + 1}{" "}
													{sub.subheadingTitle}
												</a>
											</li>
										)
									)}
								</ul>
							)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default QuickNavigation;
