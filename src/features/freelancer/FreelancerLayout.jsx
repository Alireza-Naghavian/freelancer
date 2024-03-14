import React from 'react'
import AppLayOut from '../../pages/AppLayOut'
import SideBar from '../../ui/SideBar'
import CustomNavLink from '../../ui/CustomNavLink'
import { HiCollection, HiHome } from 'react-icons/hi'
import { IoDocument } from "react-icons/io5";
function FreelancerLayout() {
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
      <CustomNavLink address={"proposals"}>
      <IoDocument  className='icon'/>
        <span>پروپوزال ها</span>
      </CustomNavLink>
    </SideBar>
  </AppLayOut>
  )
}

export default FreelancerLayout