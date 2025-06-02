import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { useFetchDecisionByIdAndOwner } from "./util/useFetchDecisions";
import type { DecisionsType } from "../types/types";

const useDecisionsByIdAndOwner = (id: number) => {
  const { fetchDecisionByIdAndOwner } = useFetchDecisionByIdAndOwner(id);
  const { isSignedIn } = useAuth();

  const { isPending, isError, data, error } = useQuery<DecisionsType[]>({
    queryKey: ["days", id],
    queryFn: fetchDecisionByIdAndOwner,
    //enabled: isSignedIn === true,
    retry: 4,
  });
  return { isPending, isError, data, error };
};

export default useDecisionsByIdAndOwner;
