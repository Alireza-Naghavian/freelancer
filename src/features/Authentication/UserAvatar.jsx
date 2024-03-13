import LogOut from "../../ui/LogOut";
import useUser from "./hooks/useUser";

function UserAvatar() {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="flex items-center gap-x-2 text-secondary-200">
      <div className="ml-2 flex items-center">
        <LogOut />
      </div>
      <img
        src="../public/user.jpg"
        className="w-10 h-10 rounded-full object-cover origin-center "
        alt=""
      />
      <span className="text-gray-800 flex items-center mt-2">{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
