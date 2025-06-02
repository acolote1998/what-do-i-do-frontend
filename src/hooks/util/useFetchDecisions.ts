import { useAuth } from "@clerk/clerk-react";
import axios, { HttpStatusCode } from "axios";
import type { DecisionsType } from "../../types/types";

const url = "/data/decisions.json";

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
  const { getToken } = useAuth();

  const fetchThreeRandomDecisions = async (): Promise<DecisionsType[]> => {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
    return [];
  };

  return { fetchThreeRandomDecisions };
}

export function useFetchDecisionByIdAndOwner(id: number) {
  const { getToken } = useAuth();

  const fetchDecisionByIdAndOwner = async (): Promise<DecisionsType[]> => {
    const response = await axios.get(`/data/${id}.json`, {
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
    return [];
  };

  return { fetchDecisionByIdAndOwner };
}
