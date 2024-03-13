import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../../services/projectServices";
import toast from "react-hot-toast";

export const useRemoveProject = () => {
  const queryClient = useQueryClient();
  const { mutate: removeProject, isPending: isDelLoading } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      toast.success("پروژه شما با موفقیت حذف شد");
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { removeProject, isDelLoading };
};
