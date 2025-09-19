import sanityClient from "@sanity/client";

// 1) Configure the Sanity client with write permissions.
const client = sanityClient({
	projectId: "itr0sfyd",
	dataset: "production",
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN2, // a token with sufficient write permissions
	useCdn: false,
});

async function migrateBlogRefs() {
	// 2) Fetch all standalonePage documents that reference "blog" docs
	//    We can do so by checking the reference array for items whose _ref points to a doc of _type "blog"
	//    A simpler approach: fetch all standalonePage docs, then handle references in JS.
	const standalonePages = await client.fetch(`
    *[_type == "standalonePage"] {
      _id,
      relatedBlogs {
        selectedArticles[] {
          _key,
          _ref,
          // The Studio's reference input doesn't store _type here, so we'll find the type by looking up the doc ID.
        }
      }
    }
  `);

	console.log(`Found ${standalonePages.length} standalonePage docs.`);

	for (const page of standalonePages) {
		const oldArticles = page.relatedBlogs?.selectedArticles;
		if (!oldArticles || !Array.isArray(oldArticles)) continue;

		let needsPatch = false;
		const newArticles = [];

		for (const articleRef of oldArticles) {
			// If there's no _ref, skip
			if (!articleRef?._ref) {
				newArticles.push(articleRef);
				continue;
			}

			// 3) Check what type the referenced doc is
			const referencedDoc = await client.fetch(
				`*[_id == $id][0]{ _id, _type, "slug": slug.current }`,
				{ id: articleRef._ref }
			);

			if (!referencedDoc) {
				// The referenced doc doesn't exist anymore, so just push as is or skip
				newArticles.push(articleRef);
				continue;
			}

			if (referencedDoc._type === "blog") {
				// 4) Find the matching "blogtest" doc with the same slug
				const matchingBlogtest = await client.fetch(
					`*[_type == "blogtest" && slug.current == $slug][0]{ _id }`,
					{ slug: referencedDoc.slug }
				);

				if (matchingBlogtest) {
					// Update the _ref to point to the blogtest doc
					newArticles.push({
						...articleRef,
						_ref: matchingBlogtest._id,
					});
					needsPatch = true;
				} else {
					// If no matching blogtest is found, keep referencing the old doc or remove it
					newArticles.push(articleRef);
				}
			} else {
				// It's already referencing blogtest or something else, keep as is
				newArticles.push(articleRef);
			}
		}

		// 5) If we updated any references, patch the standalonePage doc
		if (needsPatch) {
			try {
				await client
					.patch(page._id)
					.set({
						"relatedBlogs.selectedArticles": newArticles,
					})
					.commit();
				console.log(`Patched references in standalonePage ${page._id}`);
			} catch (err) {
				console.error(`Error patching ${page._id}:`, err);
			}
		}
	}

	console.log("Migration complete!");
}

migrateBlogRefs().catch((err) => console.error(err));
