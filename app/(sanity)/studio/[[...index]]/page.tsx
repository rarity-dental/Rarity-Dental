import StudioPage from "./studio-page";

// Force static generation
export const dynamic = "force-static";
export const preferredRegion = "auto";
export const revalidate = 3600;

export { metadata, viewport } from "next-sanity/studio";

export default function StudioRoute() {
	return <StudioPage />;
}
