import { cn } from "@/lib/utils";
import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MenuIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ className, ...props }, ref) => (
		<svg
			width="48"
			height="12"
			viewBox="0 0 48 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
			className={cn("", className)}
		>
			<rect
				width="48"
				height="2"
				fill="currentColor"
			/>
			<rect
				y="10"
				width="48"
				height="2"
				fill="currentColor"
			/>
		</svg>
	)
);

MenuIcon.displayName = "MenuIcon";
