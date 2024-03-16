import React from "react";
import { useForm } from "react-hook-form";
import ValidTextField from "../../../ui/ValidTextField";
import Loader from "../../../utils/Loader";
import LargeBtn from "../../../ui/LargeBtn";
import useCreateProposal from "./hooks/useCreateProposal";
import { useQueryClient } from "@tanstack/react-query";

function CreateProposalForm({ setOpenReq, projectId }) {
    const queryClient  = useQueryClient();
  const { createProposal, loadingCreate } = useCreateProposal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitReq = (data) => {
    console.log({...data,projectId});
    createProposal({...data,projectId},{onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:["proposals"]})
        setOpenReq(false)
    }})

  };
  return (
    <form className="space-y-5" onSubmit={handleSubmit(submitReq)}>
      <ValidTextField
        label={"توضیحات درخواست"}
        placeholder={"توضیحات درخواست خود  را بنویسید..."}
        register={register}
        required
        name={"description"}
        spaceY={"space-y-2"}
        validationSchema={{
          required: "پر کردن این فیلد الزامی است",
          minLength: {
            value: 10,
            message: "تعداد کاراکتر باید بیشتر از ۱۰ عدد باشد",
          },
        }}
        errors={errors}
      />
      <ValidTextField
        label={"قیمت مد نظر"}
        placeholder={"مبلغ پیشنهادی خود را وارد کنید..."}
        register={register}
        required
        type="number"
        name={"price"}
        spaceY={"space-y-2"}
        validationSchema={{
          required: "پر کردن این فیلد الزامی است",
        }}
        errors={errors}
      />
      <ValidTextField
        label={"زمان مورد نیاز"}
        placeholder={"زمان مورد نیاز برای تکمیل پروژه را وارد نمایید.."}
        register={register}
        required
        type="number"
        name={"duration"}
        spaceY={"space-y-2"}
        validationSchema={{
          required: "پر کردن این فیلد الزامی است",
        }}
        errors={errors}
      />
      <div className="">
        {loadingCreate ? (
          <Loader />
        ) : (
          <LargeBtn type={"submit"}>ارسال درخواست</LargeBtn>
        )}
      </div>
    </form>
  );
}

export default CreateProposalForm;
