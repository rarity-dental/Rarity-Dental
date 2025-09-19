import { cn } from "@/lib/utils";
import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const DSDIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ className, ...props }, ref) => (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
			className={cn("", className)}
		>
			<g clipPath="url(#clip0_357_169)">
				<path
					d="M14.9806 18.1617H9.72656V1.29688H38.2671V18.1617H33.1428"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14.9831 25.9466H1.94531V22.0547H14.9831"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M33.1484 22.0547H46.0565V25.9466H33.1484"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M4.66643 25.9453L4.60156 46.7021"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M43.6532 25.9453L43.5234 46.7021"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M31.1381 35.0267H16.8678C15.7651 35.0267 14.9219 34.1834 14.9219 33.0807C14.9219 31.978 15.7651 31.1348 16.8678 31.1348H31.1381C32.2408 31.1348 33.084 31.978 33.084 33.0807C33.084 34.1834 32.2408 35.0267 31.1381 35.0267Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M24 35.0273V44.1084"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18.8125 46.704C18.8125 45.2769 19.9801 44.1094 21.4071 44.1094H26.5963C28.0233 44.1094 29.1909 45.2769 29.1909 46.704"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M30.5519 27.2446H17.579C16.1519 27.2446 14.9844 26.077 14.9844 24.65V10.3798C14.9844 8.95272 16.1519 7.78516 17.579 7.78516H30.5519C32.0438 7.78516 33.1465 8.95272 33.1465 10.3798V24.65C33.1465 26.077 32.0438 27.2446 30.5519 27.2446Z"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_357_169">
					<rect
						width="46.7027"
						height="48"
						fill="white"
						transform="translate(0.648438)"
					/>
				</clipPath>
			</defs>
		</svg>
	)
);

DSDIcon.displayName = "DSDIcon";
