import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  editProjectApi } from "../../../services/projectServices";
import toast from "react-hot-toast";

const useEditProject = () => {
  const queryClient = useQueryClient();
  const {
    isPending: isLoading,

    mutate: editProject,
    error,
  } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: (data) => {
      toast.success(data.message),
        queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
  });
  return { isLoading,editProject };
};
export default useEditProject;
