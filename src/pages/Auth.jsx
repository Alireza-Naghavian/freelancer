import AuthContainer from "../features/Authentication/AuthContainer";
import CheckOTPForm from "../features/Authentication/CheckOTPForm";
import SendOTPForm from "../features/Authentication/SendOTPForm";

function Auth() {
  return (
      <div className="container xl:max-w-screen-xl ">
    <div className="shadow-2xl max-w-lg mx-auto mt-10 flex justify-center items-start  h-[500px] bg-gray-800  text-white rounded-lg">
      <AuthContainer />
    </div>
      </div>
  );
}

export default Auth;
