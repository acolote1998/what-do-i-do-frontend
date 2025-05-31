import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { useFetchDecisions } from "./util/useFetchDecisions";
import type { DecisionsType } from "../types/types";

const useDecisions = () => {
  const { fetchDecisions } = useFetchDecisions();
  const { isSignedIn } = useAuth();

  const { isPending, isError, data, error } = useQuery<DecisionsType[]>({
    queryKey: ["days"],
    queryFn: fetchDecisions,
    //enabled: isSignedIn === true,
    retry: 4,
  });
  return { isPending, isError, data, error };
};

export default useDecisions;
