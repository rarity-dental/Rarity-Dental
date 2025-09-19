/* eslint-disable @next/next/no-img-element */
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/utils";

const portableTextComponents: PortableTextComponents = {
	types: {
		image: ({ value }) => (
			<div className="my-4">
				<img
					src={urlFor(value).url()}
					alt={value.alt || "Image"}
					className="rounded-lg"
				/>
			</div>
		),
		// Add other custom type renderers if needed
	},
};

interface MyPortableTextProps {
	value: any;
}

export default function MyPortableText({ value }: MyPortableTextProps) {
	return (
		<PortableText
			value={value}
			components={portableTextComponents}
		/>
	);
}
