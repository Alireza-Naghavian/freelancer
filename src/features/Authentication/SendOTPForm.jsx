import { useState } from "react";
import LargeBtn from "../../ui/LargeBtn";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import Loader from "../../utils/Loader";

function SendOTPForm({ setStep,phoneNumber,setPhoneNumber }) {
  
  const { data, error, mutateAsync, isPending } = useMutation({
    mutationFn: getOtp,
  });
  const submitPhoneNumber = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber: phoneNumber });
      console.log(data);
      toast.success(data.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setStep(1);
    } finally {
      
    }
  };
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
          />
        </div>
      {isPending ? <Loader/> :<LargeBtn type={"submit"}>ارسال کد تایید</LargeBtn>}
      </form>
    </div>
  );
}

export default SendOTPForm;
