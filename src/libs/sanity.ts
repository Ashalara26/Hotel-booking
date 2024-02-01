import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = ({
    projectId: "410gf1lx",
    dataset: "production",
    apiVersion: "2021-10-21",
    token: process.env.SANITY_ACCESS_TOKEN,
    useCdn: process.env.NODE_ENV === 'production',
  });

const client = createClient(config);

export default client;



