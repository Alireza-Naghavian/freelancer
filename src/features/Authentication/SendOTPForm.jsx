import { useState } from "react";
import LargeBtn from "../../ui/LargeBtn";
import TextField from "../../ui/TextField";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <form className="space-y-4">
        <div className="flex flex-col  space-y-2 pt-10 mb-2">
          <TextField
          placeholder={"لطفا شماره موبایل را وارد کنید..."}
            value={phoneNumber}
            label={"شماره موبایل"}
            name={"phoneNumber"}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <LargeBtn type={"submit"} >ارسال کد تایید</LargeBtn>
      </form>
    </div>
  );
}

export default SendOTPForm;
