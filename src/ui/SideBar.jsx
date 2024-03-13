import { HiCollection, HiHome } from "react-icons/hi";

import CustomNavLink from "./CustomNavLink";

function SideBar({children}) {
  return (
    <div className="col-span-2 shadow-lg shadow-slate-500/20 row-span-12 bg-secondary-0 border-gray-200 p-4 border-l  min-h-screen">
      <ul className="flex flex-col gap-y-4">
      {/* <li>
          <CustomNavLink address={"dashboard"}>
            <HiHome className="icon" />
            <span>داشبورد</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink address={"projects"}>
            <HiCollection className="icon" />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li> */}
   {children}
      </ul>
    </div>
  );
}

export default SideBar;
