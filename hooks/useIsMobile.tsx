import { useEffect, useState } from "react";

function useMatchMedia(query: string) {
	// Keep first client render equal to SSR output to avoid hydration mismatch.
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		const update = () => setMatches(media.matches);
		update();

		if (media.addEventListener) {
			media.addEventListener("change", update);
			return () => media.removeEventListener("change", update);
		}

		media.addListener(update);
		return () => media.removeListener(update);
	}, [query]);

	return matches;
}

export const useIsMobile = () => useMatchMedia("(max-width: 647px)");

export const useIsTablet = () =>
	useMatchMedia("(min-width: 648px) and (max-width: 1227px)");

export const useIslargeDevices = () => useMatchMedia("(min-width: 1280px)");
