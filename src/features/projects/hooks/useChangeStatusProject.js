import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editStatusProjectApi } from "../../../services/projectServices";
import toast from "react-hot-toast";

const useChangeStatusProject = () => {
  const queryClient = useQueryClient();
  const { mutate: changeStatus, isPending: changeStLoading } = useMutation({
    mutationFn: editStatusProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
  });
  return { changeStatus, changeStLoading };
};
export default useChangeStatusProject;
