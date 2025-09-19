import { cn } from "@/lib/utils";
import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const XIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ className, ...props }, ref) => (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
			className={cn("", className)}
		>
			<path
				d="M13.4339 1.38574H16.041L10.346 7.91131L17.0464 16.7926H11.8007L7.6891 11.4072L2.98982 16.7926H0.380315L6.47117 9.81046L0.0463867 1.38696H5.42567L9.13653 6.30846L13.4339 1.38574ZM12.5171 15.2286H13.9621L4.63639 2.86838H3.08696L12.5171 15.2286Z"
				fill="currentColor"
			/>
		</svg>
	)
);

XIcon.displayName = "XIcon";
