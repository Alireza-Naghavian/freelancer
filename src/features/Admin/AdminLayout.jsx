import React from "react";
import AppLayOut from "../../pages/AppLayOut";
import SideBar from "../../ui/SideBar";
import CustomNavLink from "../../ui/CustomNavLink";
import { HiCollection, HiHome, HiUser } from "react-icons/hi";

function AdminLayout() {
  return (
    <AppLayOut>
      <SideBar>
        <CustomNavLink address={"dashboard"}>
          <HiHome className="icon" />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink address={"users"}>
          <HiUser className="icon" />
          <span>کاربران</span>
        </CustomNavLink>
        <CustomNavLink address={"projects"}>
          <HiCollection className="icon" />
          <span>پروژه ها</span>
        </CustomNavLink>
        <CustomNavLink address={"proposal"}>
          <HiCollection className="icon" />
          <span>پروپوزال ها</span>
        </CustomNavLink>
      </SideBar>
    </AppLayOut>
  );
}

export default AdminLayout;
