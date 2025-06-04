import { useAuth } from "@clerk/clerk-react";
import axios, { HttpStatusCode } from "axios";
import type { DecisionVoteAction } from "../../types/types";
import rootUrl from "./rootUrl";

export function usePostVotes(vote: DecisionVoteAction) {
  const { getToken } = useAuth();

  const createVote = async (): Promise<DecisionVoteAction> => {
    const response = await axios.post(`${rootUrl}/vote`, vote, {
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
    throw new Error("Could not create the vote");
  };

  return { createVote };
}
