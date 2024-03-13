import { useState } from "react";
import LargeBtn from "../../ui/LargeBtn";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import Loader from "../../utils/Loader";
import { useForm } from "react-hook-form";
import ValidTextField from "../../ui/ValidTextField";

function SendOTPForm({ register, submitPhoneNumber, isSendingOtp }) {
  return (
    <div>
      <form className="space-y-4" onSubmit={submitPhoneNumber}>
        <div className="flex flex-col  space-y-2 pt-10 mb-2">
          <ValidTextField
            placeholder={"لطفا شماره موبایل را وارد کنید..."}
            register={register}
            label={"شماره موبایل"}
            name={"phoneNumber"}
            mt={`mt-20`}
            spaceY={`space-y-8`}
          />
        </div>
        {isSendingOtp ? (
          <Loader />
        ) : (
          <LargeBtn type={"submit"}>ارسال کد تایید</LargeBtn>
        )}
      </form>
    </div>
  );
}

export default SendOTPForm;
