import { SchemaTypeDefinition } from "sanity";
import blockContent from "./blockContent";

import categoryPages from "./categoryPages";

import standalonePages from "./standalonePages";
import internationalPatients from "./internationalPatients";
import homepageMetadata from "./homepageMetadata";
import blogtest from "./blogtest";
import section from "./section";
import invisalign from "./invisalign";
import section2 from "./section2";
import blog from "./blog";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		// technology,
		blockContent,
		categoryPages,
		standalonePages,
		// blog,
		internationalPatients,
		homepageMetadata,
		blogtest,
		section,
		// section2,
		invisalign,
	],
};
