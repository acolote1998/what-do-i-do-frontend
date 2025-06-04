import { useAuth } from "@clerk/clerk-react";
import axios, { HttpStatusCode } from "axios";
import type { DecisionsType } from "../../types/types";
import rootUrl from "./rootUrl";

export function usePostDecisions(decision: DecisionsType) {
  const { getToken } = useAuth();

  const createDecision = async (): Promise<DecisionsType> => {
    const response = await axios.post(`${rootUrl}`, decision, {
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
    throw new Error("Could not create the decision");
  };

  return { createDecision };
}
