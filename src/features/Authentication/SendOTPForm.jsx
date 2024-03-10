import { useState } from "react";
import LargeBtn from "../../ui/LargeBtn";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import Loader from "../../utils/Loader";
import { useForm } from "react-hook-form";

function SendOTPForm({
  phoneNumber,
  setPhoneNumber,
  submitPhoneNumber,
  isSendingOtp,
}) 

{
  const {register}= useForm()
  return (
    <div>
      <form className="space-y-4" onSubmit={submitPhoneNumber}>
        <div className="flex flex-col  space-y-2 pt-10 mb-2">
          <TextField
            placeholder={"لطفا شماره موبایل را وارد کنید..."}
            value={phoneNumber}
            label={"شماره موبایل"}
            name={"phoneNumber"}
            onChange={(e) => setPhoneNumber(e.target.value)}
            mt={`mt-20`}
            spaceY={`space-y-8`}
            register={register}
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
