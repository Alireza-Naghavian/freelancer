import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogOut from "../features/Authentication/hooks/useLogout";
import Loader from "../utils/Loader";
function LogOut() {
  const { logOutLoading, logOutUser } = useLogOut();
  return logOutLoading ? (
    <Loader />
  ) : (
    <button onClick={logOutUser}>
      <HiArrowRightOnRectangle className="text-2xl text-secondary-800 " />
    </button>
  );
}

export default LogOut;
