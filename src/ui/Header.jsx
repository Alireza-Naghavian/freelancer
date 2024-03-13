import useUser from "../features/Authentication/hooks/useUser"
import useOwnerProjects from "../features/projects/useOwnerProjects";

function Header() {
  const {data}= useUser();
  return (
    <div className="col-span-8 row-span-2 bg-red-200">header </div>
  )
}

export default Header