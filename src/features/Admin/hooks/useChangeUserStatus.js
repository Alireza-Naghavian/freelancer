import { useMutation } from "@tanstack/react-query";
import { changeVerifyStatusApi } from "../../../services/authServices";
import toast from "react-hot-toast";

const useChangeUserStatus = () => {
  const { isPending: isLoading, mutate: ChangeUserSt } = useMutation({
    mutationKey: ["users"],
    mutationFn: changeVerifyStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isLoading, ChangeUserSt };
};

export default useChangeUserStatus;
