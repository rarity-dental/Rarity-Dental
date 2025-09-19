import { createClient } from "@sanity/client";

// 1) Configure the Sanity client with write permissions.
const client = createClient({
	projectId: "itr0sfyd",
	dataset: "production",
	// token: process.env.NEXT_PUBLIC_SANITY_TOKENU, // a token with sufficient write permissions
	useCdn: false,
	apiVersion: "2024-07-31",
});

async function migrateHeroPointers() {
	// Fetch all documents that have heroPointers
	const documents = await client.fetch(`
    *[defined(heroSection.heroPointers) && _type == "categoryPage"]
  `);

	console.log(`Found ${documents.length} documents to migrate`);

	for (const doc of documents) {
		const heroPointers = doc.heroSection.heroPointers;

		// Transform string values into block content
		const migratedPointers = heroPointers.map((pointer: any) => {
			// If it's already a block, leave it as is
			if (typeof pointer === "object" && pointer._type === "block") {
				return pointer;
			}

			// Convert string to block content
			return {
				_type: "block",
				style: "normal",
				_key: Math.random().toString(36).substring(2, 9),
				markDefs: [],
				children: [
					{
						_type: "span",
						_key: Math.random().toString(36).substring(2, 9),
						text: pointer,
						marks: [],
					},
				],
			};
		});

		// Update the document
		try {
			await client
				.patch(doc._id)
				.set({
					"heroSection.heroPointers": migratedPointers,
				})
				.commit();

			console.log(`✓ Migrated document ${doc._id}`);
		} catch (error) {
			console.error(`✗ Failed to migrate document ${doc._id}:`, error);
		}
	}

	console.log("Migration completed");
}

migrateHeroPointers().catch(console.error);
