import { useAuth } from "@clerk/clerk-react";
import axios, { HttpStatusCode } from "axios";
import type { DecisionsType } from "../../types/types";

const url = "http://localhost:8080/decisions";

export function useFetchDecisions() {
  const { getToken } = useAuth();

  const fetchDecisions = async (): Promise<DecisionsType[]> => {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
    return [];
  };

  return { fetchDecisions };
}

export function useFetchThreeRandomDecisions() {
  const fetchThreeRandomDecisions = async (): Promise<DecisionsType[]> => {
    const response = await axios.get(`${url}/random`);
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
    return [];
  };

  return { fetchThreeRandomDecisions };
}

export function useFetchDecisionByIdAndOwner(id: string) {
  const fetchDecisionByIdAndOwner = async (): Promise<DecisionsType> => {
    const response = await axios.get(`${url}/${id}`);
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
    throw new Error("Could not obtain the decision");
  };

  return { fetchDecisionByIdAndOwner };
}
