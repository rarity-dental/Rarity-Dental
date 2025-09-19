import { CheckIcon } from "lucide-react";

interface HeroPointersProps {
	pointers: string[];
}

export const HeroPointers = ({ pointers }: HeroPointersProps) => {
	return (
		<ul className="space-y-2 w-full pt-4">
			{pointers?.map((pointer: string, index: number) => (
				<li
					key={index}
					className="flex items-start gap-2 md:gap-4">
					<div className="flex-shrink-0 mt-1">
						<CheckIcon className="h-4 w-4 md:h-8 md:w-8 text-white" />
					</div>
					<p className="text-white text-md md:text-xl leading-normal font-normal">
						{pointer}
					</p>
				</li>
			))}
		</ul>
	);
};
