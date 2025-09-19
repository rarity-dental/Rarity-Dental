// hooks/useTawkScript.tsx
"use client";

import { useEffect } from "react";

export const useTawkToScript = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.async = true;
		script.src = "https://embed.tawk.to/67333d884304e3196ae0d799/1icg2go6p";
		script.charset = "UTF-8";
		script.setAttribute("crossorigin", "*");
		document.body.appendChild(script);

		return () => script.remove();
	}, []);
};
