import { useMutation } from "@tanstack/react-query";
import { useDeleteDecisions } from "./util/useDeleteDecisions";
const useDeleteDecisionsById = (id: string) => {
  const { deleteDecisionById } = useDeleteDecisions(id);

  const mutation = useMutation({
    mutationFn: deleteDecisionById,
  });
  return { mutation };
};

export default useDeleteDecisionsById;
