import { useState } from "react";
import OTPInput from "react-otp-input";
import LargeBtn from "../../ui/LargeBtn";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");
  return (
    <div className="w-full flex justify-center items-center mt-20  ">
      <form className="flex flex-col gap-y-3 wf pt-10">
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
