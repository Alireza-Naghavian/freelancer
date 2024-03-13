import UserAvatar from "../features/Authentication/UserAvatar";
import useUser from "../features/Authentication/hooks/useUser"
import useOwnerProjects from "../features/projects/useOwnerProjects";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const {isLoading}= useUser();
  return (
    <div className="col-span-8 row-span-1 bg-secondary-200">
        <div className={`container xl:max-w-screen-2xl py-8 flex items-center justify-between px-12 ${isLoading ? "blur-sm opacity-30":""}`}>
          <HeaderMenu/>
          <UserAvatar/>
        </div>
       </div>
  )
}

export default Header