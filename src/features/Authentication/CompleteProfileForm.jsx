import { useState } from "react";
import TextField from "../../ui/TextField";
import LargeBtn from "../../ui/LargeBtn";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authServices";
import toast from "react-hot-toast";
import Loader from "../../utils/Loader";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ValidTextField from "../../ui/ValidTextField";

function CompleteProfileForm() {
  const { handleSubmit, register, watch } = useForm();
  const navigate = useNavigate();
  const { isPending, data, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const CompleteProfileHandler = async ({ name, email, role }) => {
    try {
      const data = await mutateAsync({ name, email, role });
      if (data.user.role === "OWNER") {
        navigate("/owner");

        toast.success(data.message);
        return;
      }
      if (data.user.role === "FREELANCER") {
        navigate("/freelancer");
        toast.success(data.message);
        return;
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="w-full px-12">
      <p className="pt-6 text-sm">لطفا پروفایل کاربری خود را تکمیل کنید.</p>
      <form className="w-full" onSubmit={handleSubmit(CompleteProfileHandler)}>
        <ValidTextField
          mt={`mt-8`}
          spaceY={`space-y-4`}
          register={register}
          placeholder={`لطفا ایمیل معتبر وارد کنید...`}
          name={"email"}
          label={`ایمیل`}
        />
        <ValidTextField
          mt={`mt-10`}
          spaceY={`space-y-4`}
          register={register}
          placeholder={`نام و نام خانوادگی...`}
          name={"name"}
          label={`نام و نام خانوادگی`}
        />
        <div className="flex mt-8 mr-4 gap-x-6">
          <div className="flex gap-x-1 items-center">
            <input
              className="form-radio text-primary-700 focus:ring-1 focus:outline-none"
              type="radio"
              name="role"
              id="owner"
              value="OWNER"
              {...register("role")}
              checked={watch("role") === "OWNER"}
            />
            <label htmlFor="owner">کارفرما</label>
          </div>
          <div className="flex gap-x-1 items-center">
            <input
              className="form-radio text-primary-700 focus:ring-1 focus:outline-none"
              type="radio"
              name="role"
              id="freelancer"
              {...register("role")}
              value="FREELANCER"
              checked={watch("role") === "FREELANCER"}
            />
            <label htmlFor="freelancer">فریلنسر</label>
          </div>
        </div>
        <div>
          {isPending ? (
            <Loader />
          ) : (
            <LargeBtn type={"submit"}>تکمیل اطلاعات</LargeBtn>
          )}
        </div>
      </form>
    </div>
  );
}

export default CompleteProfileForm;
