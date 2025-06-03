import { useMutation } from "@tanstack/react-query";
import type { DecisionsType } from "../types/types";
import { usePostDecisions } from "./util/usePostDecisionts";
const useCreateDecision = (decision: DecisionsType) => {
  const { createDecision } = usePostDecisions(decision);

  const mutation = useMutation({
    mutationFn: createDecision,
  });
  return { mutation };
};

export default useCreateDecision;
