import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProjectApi } from "../../../services/projectServices";
import toast from "react-hot-toast";

const useCreateProject = () => {
  const queryClient = useQueryClient();
  const {
    isPending: isLoading,

    mutate: createProject,
    error,
  } = useMutation({
    mutationFn: addNewProjectApi,
    onSuccess: (data) => {
      toast.success(data.message),
        queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
  });
  return { isLoading,createProject };
};
export default useCreateProject;
