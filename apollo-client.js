import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-eu-central-1.graphcms.com/v2/ckov4by0k0w3i01z13lba81mq/master",
    cache: new InMemoryCache(),
});

export default client;
