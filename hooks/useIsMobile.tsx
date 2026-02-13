import { useMediaQuery } from "react-responsive";

export const useIsMobile = () => {
	return useMediaQuery({ query: "(max-width: 647px)" });
};

export const useIsTablet = () => {
	return useMediaQuery({
		query: "(min-width: 648px) and (max-width: 1227px)",
	});
};

export const useIslargeDevices = () => {
	return useMediaQuery({
		query: "(min-width: 1280px)",
	});
};
