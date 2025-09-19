/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { SpecialisedTreatment } from "@/types";
import { urlFor } from "@/lib/utils";

interface RelatedSpecialisedTreatmentsProps {
	currentSlug: string;
	streatments: SpecialisedTreatment[];
}

export const RelatedSpecialisedTreatments = ({
	currentSlug,
	streatments,
}: RelatedSpecialisedTreatmentsProps) => {
	// Filter out the current specialised treatment
	const otherSpecialisedTreatments = streatments.filter(
		(streatment) => streatment.slug.current !== currentSlug
	);

	// console.log(streatments.length, "streatments");
	// console.log(otherSpecialisedTreatments, "otherSpecialisedTreatments");

	return (
		<section className="mt-16 mb-12">
			<h2
				className="text-4xl font-bold pb-2 text-center"
				style={{
					fontWeight: "bold",
					marginTop: "2rem",
					marginBottom: "1rem",
					color: "#73383e",
				}}>
				Explore Other Specialised Treatments
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{otherSpecialisedTreatments.map((streatment) => (
					<Link
						href={`/specialised-treatments/${streatment.slug.current}`}
						key={streatment.slug.current}>
						<Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
							<CardHeader className="p-4">
								<div className="aspect-video relative overflow-hidden rounded-lg mb-4">
									<img
										src={urlFor(streatment.image)
											.width(400)
											.height(225)
											.url()}
										alt={streatment.title}
										className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<CardTitle className="text-xl group-hover:text-copyColor transition-colors">
									{streatment.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="p-4 pt-0">
								<p className="text-gray-600 line-clamp-2">
									{streatment.meta_description}
								</p>
							</CardContent>
							<CardFooter className="p-4 pt-0">
								<div className="flex items-center text-sm text-gray-500">
									<span className="inline-flex font-medium py-1 px-3 rounded-full text-copyColor bg-copyColor/[0.15] uppercase">
										Learn More
									</span>
								</div>
							</CardFooter>
						</Card>
					</Link>
				))}
			</div>
		</section>
	);
};
