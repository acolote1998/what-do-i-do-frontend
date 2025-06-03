import { useMutation } from "@tanstack/react-query";
import type { DecisionVoteAction } from "../types/types";
import { usePostVotes } from "./util/usePostVotes";
const useCreateVote = (vote: DecisionVoteAction) => {
  const { createVote } = usePostVotes(vote);

  const mutation = useMutation({
    mutationFn: createVote,
  });
  return { mutation };
};

export default useCreateVote;
