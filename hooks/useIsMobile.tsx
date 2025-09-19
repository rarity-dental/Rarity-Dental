import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const useIsMobile = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 647px)" });
	const [hideOnMobile, setHideOnMobile] = useState(false);

	useEffect(() => {
		setHideOnMobile(isMobile);
	}, [isMobile]);

	return hideOnMobile;
};

export const useIsTablet = () => {
	const isTablet = useMediaQuery({
		query: "(min-width: 648px) and (max-width: 1227px)",
	});
	const [showOnTablet, setShowOnTablet] = useState(false);

	useEffect(() => {
		setShowOnTablet(isTablet);
	}, [isTablet]);

	return showOnTablet;
};

export const useIslargeDevices = () => {
	const isLargeDevices = useMediaQuery({
		query: "(min-width: 1280px)",
	});
	const [showOnLargeDevices, setShowOnLargeDevices] = useState(false);

	useEffect(() => {
		setShowOnLargeDevices(isLargeDevices);
	}, [isLargeDevices]);

	return showOnLargeDevices;
};
