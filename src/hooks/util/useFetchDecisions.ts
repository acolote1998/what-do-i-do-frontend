import { useAuth } from "@clerk/clerk-react";
import axios, { HttpStatusCode } from "axios";
import type { DecisionsType } from "../../types/types";

const url = "YOUR_API_URL_HERE";

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
