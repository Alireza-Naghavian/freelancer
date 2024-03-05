import { useState } from "react"
import SendOTPForm from "./SendOTPForm"
import CheckOTPForm from "./CheckOTPForm"

function AuthContainer() {
    const [step,setStep]=useState(1);
    const [phoneNumber, setPhoneNumber] = useState("");
    const renderStep =()=>{
        switch(step){
            case 1:return <SendOTPForm setStep={setStep} phoneNumber={phoneNumber}  setPhoneNumber={setPhoneNumber} onchage={e=>setPhoneNumber(e.target.value)}/>
            case 2:return <CheckOTPForm phoneNumber={phoneNumber}/>
        }
    }
  return (
    <div className="w-full  flex justify-center">
        {renderStep()}
    </div>
  )
}

export default AuthContainer