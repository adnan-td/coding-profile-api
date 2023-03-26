import { gql } from "apollo-server-express";

export const Queries = gql`
  type Query {
    getCodeForces(handle: String!): codeForcesUser
  }
`;
