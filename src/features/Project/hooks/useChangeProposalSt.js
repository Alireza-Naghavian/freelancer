import { useMutation, useQueryClient } from "@tanstack/react-query";
import { chageProposalStApi } from "../../../services/proposalServices";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const useChangeProposalSt = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const { mutate: changeProposalST, isPending: changeStLoading } = useMutation({
    mutationFn: chageProposalStApi,
    onSuccess: (data) => {
      toast.success(data.message),
        queryClient.invalidateQueries({ queryKey: ["singleProject", id] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { changeProposalST, changeStLoading };
};
export default useChangeProposalSt;
