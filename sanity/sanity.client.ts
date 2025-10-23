import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "itr0sfyd",
    dataset: "production",
    apiVersion: "2024-07-31",
    // Use Sanity CDN for faster, cached reads in production
    useCdn: true,
    perspective: "published",
    // token: process.env.NEXT_PUBLIC_SANITY_TOKENU,
};

const client = createClient(config);

export default client;
