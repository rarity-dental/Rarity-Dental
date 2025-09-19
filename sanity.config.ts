import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./schemas";

const config = defineConfig({
	name: "default",
	title: "Glowin-Dental",
	projectId: "itr0sfyd",
	dataset: "production",
	basePath: "/studio",
	plugins: [structureTool()],
	schema: { types: schema.types },
	useProjectHostname: true,
	// token: process.env.NEXT_PUBLIC_SANITY_TOKENU,
});

export default config;
