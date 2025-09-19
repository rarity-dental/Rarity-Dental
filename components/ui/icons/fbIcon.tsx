import { cn } from "@/lib/utils";
import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const FbIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ className, ...props }, ref) => (
		<svg
			width="10"
			height="18"
			viewBox="0 0 10 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
			className={cn("", className)}
		>
			<path
				d="M8.77703 3.54318H6.00534C5.49507 3.54318 5.08144 3.95683 5.08144 4.46708V7.23877H8.77703C8.88208 7.23644 8.98177 7.28534 9.04423 7.36987C9.10668 7.45441 9.12424 7.56398 9.09116 7.66377L8.40748 9.69634C8.34447 9.88288 8.17013 10.009 7.97324 10.0105H5.08144V16.9397C5.08144 17.1948 4.87458 17.4017 4.61949 17.4017H2.30975C2.05462 17.4017 1.8478 17.1948 1.8478 16.9397V10.0105H0.461949C0.206824 10.0105 0 9.80361 0 9.54852V7.70072C0 7.44563 0.206824 7.23877 0.461949 7.23877H1.8478V4.46708C1.8478 2.42606 3.50241 0.771484 5.54339 0.771484H8.77703C9.03212 0.771484 9.23898 0.978308 9.23898 1.23343V3.08123C9.23898 3.33636 9.03212 3.54318 8.77703 3.54318Z"
				fill="currentColor"
			/>
		</svg>
	)
);

FbIcon.displayName = "FbIcon";
