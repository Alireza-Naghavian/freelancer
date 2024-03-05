import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";
function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const {  mutateAsync, isPending:isSendingOtp } = useMutation({
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
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
          isSendingOtp={isSendingOtp}
            phoneNumber={phoneNumber}
            submitPhoneNumber={submitPhoneNumber}
            setPhoneNumber={setPhoneNumber}
            onchage={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            resendOtpHandler={submitPhoneNumber}
          />
        );
    }
  };
  return <div className="w-full  flex justify-center">{renderStep()}</div>;
}

export default AuthContainer;
