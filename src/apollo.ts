import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import app from "./app";

export async function startApollo() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        settings: {
          "request.credentials": "include",
          "schema.polling.interval": 20 * 1000,
        },
      }),
    ],
    introspection: process.env.NODE_ENV !== "production",
    context: ({ req, res }) => {
      return { req, res, user: null };
    },
  });

  await server.start();
  server.applyMiddleware({ app });
}
