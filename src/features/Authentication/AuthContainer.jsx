import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import useTimer from "./hooks/useTimer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";
const RESEND_TIME = 12;
function AuthContainer() {
  const navigate = useNavigate();
  const {user} =useUser();
   const [step, setStep] = useState(1);
  const { getValues, register, handleSubmit } = useForm();
  const { time } = useTimer(RESEND_TIME);
  const { mutateAsync, isPending: isSendingOtp } = useMutation({
    mutationFn: getOtp,
  });

  useEffect(()=>{
    if(user) navigate("/",{replace:true})
  },[navigate,user])
  const submitPhoneNumber = async (data) => {
    if (time == 0) {
      setStep(2);
    }
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setStep(1);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            register={register}
            submitPhoneNumber={handleSubmit(submitPhoneNumber)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            setStep={setStep}
            phoneNumber={getValues("phoneNumber")}
            resendOtpHandler={submitPhoneNumber}
          />
        );
    }
  };
  return <div className="w-full  flex justify-center">{renderStep()}</div>;
}

export default AuthContainer;
