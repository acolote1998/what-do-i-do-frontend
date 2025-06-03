import { useMutation } from "@tanstack/react-query";
import { useDeleteDecisions } from "./util/useDeleteDecisions";
const useDeleteDecisionsById = (id: string) => {
  const { deleteDecisionById } = useDeleteDecisions(id);

  const mutation = useMutation({
    mutationFn: deleteDecisionById,
    retry: 4,
  });
  return { mutation };
};

export default useDeleteDecisionsById;
