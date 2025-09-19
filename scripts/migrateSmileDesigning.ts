// // scripts/migrateSmileDesigning.ts

// import client from "@/sanity/sanity.client";

// async function migrateSmileDesignToCategory() {
// 	try {
// 		// 1. Fetch existing smile design data
// 		const existingData = await client.fetch(
// 			`*[_type == "smiledesignstandalone"][0]`
// 		);

// 		if (!existingData) {
// 			console.log("No smile design data found");
// 			return;
// 		}

// 		// 2. Create new document with category schema
// 		const newDocument = {
// 			_type: "categoryPage",
// 			title: "Smile Designing",
// 			category: "smile-designing",
// 			isStandalone: true,
// 			// Map all existing fields
// 			heroSection: existingData.heroSection,
// 			howCanWeHelp: existingData.howCanWeHelp,
// 			whyChooseUs: existingData.whyChooseUs,
// 			howWeWork: existingData.howWeWork,
// 			carousel: existingData.carousel,
// 			treatments: existingData.treatments,
// 			benefits: existingData.benefits,
// 			faqs: existingData.faqs,
// 			meta_title: existingData.meta_title,
// 			meta_description: existingData.meta_description,
// 			ogTitle: existingData.ogTitle,
// 			ogDescription: existingData.ogDescription,
// 			ogUrl: existingData.ogUrl,
// 			ogImage: existingData.ogImage,
// 			structuredData: existingData.structuredData,
// 		};

// 		// 3. Create the new document
// 		const result = await client.create(newDocument);
// 		console.log("Migration successful:", result);

// 		// 4. Optionally, delete the old document
// 		// Uncomment the following line if you want to delete the old document
// 		// await client.delete(existingData._id);
// 	} catch (error) {
// 		console.error("Migration failed:", error);
// 	}
// }

// // Run the migration
// migrateSmileDesignToCategory();
