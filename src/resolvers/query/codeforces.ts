import { CodeForcesUser } from "../../types/graphql";
import axios from "axios";

export default async function getHttpCodeForcesUser(handle: string): Promise<CodeForcesUser> {
  console.log(`https://codeforces.com/api/user.info?handles=${handle}`);
  try {
    var response = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
    // console.log(response.data.result[0])
    return response.data?.result[0];
  } catch {
    throw new Error("Cannot get the requested Handle");
  }
}
