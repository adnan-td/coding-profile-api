import { gql } from "apollo-server-express";

export const AllTypes = gql`
  type codeForcesUser {
    handle: String
    email: String
    firstName: String
    lastName: String
    country: String
    city: String
    contribution: String
    rank: String
    maxRank: String
    rating: String
    maxRating: Int
    avatar: String
  }
`;
