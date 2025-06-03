import { useQuery } from "@tanstack/react-query";
import { useFetchThreeRandomDecisions } from "./util/useFetchDecisions";
import type { DecisionsType } from "../types/types";

const useThreeRandomDecisions = () => {
  const { fetchThreeRandomDecisions } = useFetchThreeRandomDecisions();

  const { isPending, isError, data, error } = useQuery<DecisionsType[]>({
    queryKey: ["publicDecisions"],
    queryFn: fetchThreeRandomDecisions,
    retry: 4,
  });
  return { isPending, isError, data, error };
};

export default useThreeRandomDecisions;
