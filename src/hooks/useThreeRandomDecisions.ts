import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import { useFetchThreeRandomDecisions } from "./util/useFetchDecisions";
import type { DecisionsType } from "../types/types";

const useThreeRandomDecisions = () => {
  const { fetchThreeRandomDecisions } = useFetchThreeRandomDecisions();
  const { isSignedIn } = useAuth();

  const { isPending, isError, data, error } = useQuery<DecisionsType[]>({
    queryKey: ["days"],
    queryFn: fetchThreeRandomDecisions,
    //enabled: isSignedIn === true,
    retry: 4,
  });
  return { isPending, isError, data, error };
};

export default useThreeRandomDecisions;
