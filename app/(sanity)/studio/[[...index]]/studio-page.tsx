"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import "./style.css";

export default function StudioPage() {
	return (
		<div className="sanity-studio">
			<NextStudio config={config} />
		</div>
	);
}
