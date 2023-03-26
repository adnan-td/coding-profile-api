// import { Mutation } from "./mutation.resolver";
import { Query } from "./query/query";
import { allResolvers } from "./general";
import { Resolvers } from "../types/graphql";

export const resolvers: Resolvers = {
  Query,
  // Mutation,
  ...allResolvers,
};
