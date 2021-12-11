import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co/",
  cache: new InMemoryCache({
    typePolicies: {
      Media: {
        fields: {
          status: {
            read: (existing) => existing.toLowerCase().replace("_", " "),
          },
          type: {
            read: (existing) => existing.toLowerCase(),
          },
          source: {
            read: (existing) => existing.toLowerCase(),
          },
        },
      },
      MediaEdge: {
        fields: {
          relationType: {
            read: (existing) => existing.toLowerCase().replace("_", " "),
          },
          type: {
            read: (existing) => existing.toLowerCase(),
          },
          source: {
            read: (existing) => existing.toLowerCase(),
          },
        },
      },
      CharacterEdge: {
        fields: {
          role: {
            read: (existing) => existing.toLowerCase(),
          },
        },
      },
    },
  }),
});

export default client;
