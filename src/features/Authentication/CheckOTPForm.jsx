import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import LargeBtn from "../../ui/LargeBtn";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import SmallBtn from "../../ui/SmallBtn";
import useTimer from "./hooks/useTimer";
import { CiEdit } from "react-icons/ci";
import Loader from "../../utils/Loader";
const RESEND_TIME = 120;
function CheckOTPForm({ phoneNumber, setStep, resendOtpHandler }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { time } = useTimer(RESEND_TIME);

  const {
    data,
    isPending: isCheckedOtp,
    mutateAsync,
  } = useMutation({
    mutationFn: checkOtp,
  });
  const checkOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber, otp });
      console.log(data.user);
      console.log(data);
      if (data.message.success === false) {
        throw new Error(JSON.stringify(data.message.message));
      }
      if (data.user.isActive) {
        if (data.user.role === "OWNER") return navigate("/owner");
        if (data.user.role === "FREELANCER") return navigate("/freelancer");
      }
      if (!data.user.isActive)
        return navigate("/complete-profile", { replace: true });

      return toast.success([data.message.message]);
    } catch (error) {
      console.log(error);
      if (!error.response) {
        toast.error(JSON.parse(error.message));
      } else {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <div className=" flex flex-col ">
      <div className="flex justify-between">
        <div className=" rounded-xl w-fit h-fit" onClick={() => setStep(1)}>
          <SmallBtn
            mt={`mt-12`}
            mrn={"-mr-10"}
            color={`bg-primary-900`}
            hover={`bg-primary-700 `}
          >
            <HiArrowRight size={22} className="icon" /> <span>بازگشت</span>
          </SmallBtn>
        </div>
        <div
          className=" h-fit w-fit mt-12 -ml-10 cursor-pointer"
          onClick={() => setStep(1)}
        >
          <CiEdit size={28} color="rgb(  92, 124, 255)" />
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-4  ">
        <form
          onSubmit={checkOtpSubmit}
          className="flex flex-col gap-y-3 wf pt-10"
        >
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
              padding: ".5rem 0.2rem",
              borderRadius: "15px",
              textAlign: "center",
              margin: "2px",
              fontSize: "16px",
              color: "#333",
            }}
          />
          {isCheckedOtp ? (
            <Loader />
          ) : (
            <LargeBtn type={"submit"}>ورود/ثبت نام</LargeBtn>
          )}
        </form>
      </div>
      <div className=" flex justify-end items-start  w-full">
        {time > 0 ? (
          <p className="mt-12 -ml-12 text-primary-700 ">
            {time} ثانیه تا ارسال مجدد
          </p>
        ) : (
          <div
            className=" min-h-min mt-12 rounded-xl -ml-12"
            onClick={resendOtpHandler}
          >
            <SmallBtn
              mt={`mt-0`}
              mrn={`-ml-0`}
              color={`bg-secondary-600`}
              hover={`bg-secondary-600`}
            >
              ارسال مجدد کد
            </SmallBtn>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckOTPForm;
