import { useAuth } from "@clerk/clerk-react";
import axios, { HttpStatusCode } from "axios";
import type { DecisionsType } from "../../types/types";
import rootUrl from "./rootUrl";

export function useDeleteDecisions(id: string) {
  const { getToken } = useAuth();

  const deleteDecisionById = async (): Promise<DecisionsType> => {
    const response = await axios.delete(`${rootUrl}/${id}`, {
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
    throw new Error("Could not delete the decision");
  };

  return { deleteDecisionById };
}
