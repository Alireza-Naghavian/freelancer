import CheckOTPForm from "../features/Authentication/CheckOTPForm"
import SendOTPForm from "../features/Authentication/SendOTPForm"

function Auth() {
  return (
    <div className="w-full  flex justify-center">
        <SendOTPForm/>
        {/* <CheckOTPForm/> */}
    </div>
  )
}

export default Auth