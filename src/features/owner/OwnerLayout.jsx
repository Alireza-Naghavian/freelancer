import React from "react";
import AppLayOut from "../../pages/AppLayOut";
import SideBar from "../../ui/SideBar";
import CustomNavLink from "../../ui/CustomNavLink";
import { HiHome } from "react-icons/hi2";
import { HiCollection } from "react-icons/hi";

function OwnerLayout() {
  return (
    <AppLayOut>
      <SideBar>
        <CustomNavLink address={"dashboard"}>
          <HiHome className="icon" />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink address={"projects"}>
          <HiCollection className="icon" />
          <span>پروژه ها</span>
        </CustomNavLink>
      </SideBar>
    </AppLayOut>
  );
}

export default OwnerLayout;
