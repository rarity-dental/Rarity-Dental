"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, HomeIcon, FileText, ShieldCheck } from "lucide-react";
import { ConsultationForm } from "@/components/forms/connect-form";

const BackButton = () => {
	return (
		<Button
			variant="ghost"
			onClick={() => window.history.back()}
			className="text-gray-600 hover:text-copyColor flex items-center gap-2">
			<ArrowLeft size={18} />
			Go Back
		</Button>
	);
};

export default function NotFound() {
	return (
		<div className=" pt-[35%] md:pt-[10%] min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-y-4 relative ">
			<Card className="max-w-2xl mx-4 p-6 bg-white">
				<CardContent className="space-y-8">
					{/* Error Message Section */}
					<div className="text-center space-y-4">
						<h1 className="text-6xl font-bold text-copyColor">
							404
						</h1>
						<h2 className="text-2xl font-semibold text-gray-800">
							Page Not Found
						</h2>
						<p className="text-gray-600 max-w-md mx-auto">
							Oops! It seems like the page you&apos;re looking for
							doesn&apos;t exist or has been moved. Don&apos;t
							worry, you can find your way back using the links
							below.
						</p>
					</div>

					{/* Primary Action */}
					<div className="flex justify-center">
						<Link href="/">
							<Button
								variant="default"
								className="bg-copyColor hover:bg-copyColor/90 text-white flex items-center gap-2">
								<HomeIcon size={18} />
								Back to Home
							</Button>
						</Link>
					</div>

					{/* Useful Links Section */}
					<div className="space-y-4">
						<h3 className="text-lg font-medium text-gray-800 text-center">
							Useful Links
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<Link
								href="/"
								className="w-full">
								<Button
									variant="outline"
									className="w-full justify-start gap-2 hover:bg-gray-50">
									<HomeIcon size={18} />
									Homepage
								</Button>
							</Link>
							<Link
								href="/privacy-policy"
								className="w-full">
								<Button
									variant="outline"
									className="w-full justify-start gap-2 hover:bg-gray-50">
									<ShieldCheck size={18} />
									Privacy Policy
								</Button>
							</Link>
							<Link
								href="/warranty-details"
								className="w-full">
								<Button
									variant="outline"
									className="w-full justify-start gap-2 hover:bg-gray-50">
									<FileText size={18} />
									Warranty Details
								</Button>
							</Link>
						</div>
					</div>

					{/* Back Button */}
					<div className="text-center">
						<BackButton />
					</div>

					{/* Support Information */}
					<div className="text-center text-sm text-gray-500 pt-4 border-t">
						<p>Need assistance? Contact our support team at</p>
						<a
							href="mailto:support@example.com"
							className="text-copyColor hover:underline">
							support@example.com
						</a>
					</div>
				</CardContent>
			</Card>
			<div className="absolute w-[370px] -bottom-2 right-0 hidden md:block">
				<ConsultationForm countryCode />
			</div>
			<div className=" md:hidden">
				<ConsultationForm countryCode />
			</div>
		</div>
	);
}
