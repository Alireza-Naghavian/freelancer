import { useState } from "react";
import OTPInput from "react-otp-input";
import LargeBtn from "../../ui/LargeBtn";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authServices";
import toast from "react-hot-toast";

function CheckOTPForm({phoneNumber}) {
  const [otp, setOtp] = useState("");
 const {data,isPending,error,mutateAsync} = useMutation({
    mutationFn: checkOtp
  })
  const checkOtpSubmit = async(e)=>{
    e.preventDefault();
    try {
      const data = await mutateAsync({phoneNumber,otp})
      console.log(data.message);
      if(data.message.success === false) throw new Error(data.message.message)
     return toast.success([data.message.message])
    } catch (error) {
      toast.error(error.message)
      console.log(error);
    }
  }
  return (
    <div className="w-full flex justify-center items-center mt-20  ">
      <form onSubmit={checkOtpSubmit} className="flex flex-col gap-y-3 wf pt-10">
        <p className="font-VazirBold  text-white mb-12 text-2xl mr-3 ">
          کد تایید را وارد کنید
        </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex  justify-center flex-row-reverse"
          inputStyle={{
            width: "2.5rem",
            padding:".5rem 0.2rem",
            borderRadius: "15px",
            textAlign: "center",
            margin: "2px",
            fontSize: "16px",
            color: "#333",
          }}
        />
        <LargeBtn type={"submit"} >ورود/ثبت نام</LargeBtn>
      </form>
    </div>
  );
}

export default CheckOTPForm;