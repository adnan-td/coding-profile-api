import { QueryResolvers } from "../../types/graphql";
import getHttpCodeForcesUser from "./codeforces";

export const Query: QueryResolvers = {
  getCodeForces: async (parent, { handle }, context) => {
    return await getHttpCodeForcesUser(handle);
  },
};
