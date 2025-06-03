import { useAuth } from "@clerk/clerk-react";
import axios, { HttpStatusCode } from "axios";
import type { DecisionsType } from "../../types/types";

const url = "http://localhost:8080/decisions";

export function useDeleteDecisions(id: string) {
  const { getToken } = useAuth();

  const deleteDecisionById = async (): Promise<DecisionsType> => {
    const response = await axios.delete(`${url}/${id}`, {
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
    throw new Error("Could not delete the decision");
  };

  return { deleteDecisionById };
}
