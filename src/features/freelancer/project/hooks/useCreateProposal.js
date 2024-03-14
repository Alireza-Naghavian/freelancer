import { useMutation } from "@tanstack/react-query";
import { sendProposalApi } from "../../../../services/proposalServices";
import toast from "react-hot-toast";

const useCreateProposal = () => {
  const { mutate: createProposal, isPending: loadingCreate } = useMutation({
    mutationFn: sendProposalApi,
    mutationKey: ["proposlas"],
    onSuccess:(data)=>{
        toast.success(data.message)
    }
  });
  return { createProposal, loadingCreate };
};
export default useCreateProposal;
