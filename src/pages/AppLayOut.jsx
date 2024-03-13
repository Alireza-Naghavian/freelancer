import { Outlet } from "react-router-dom"
import Header from "../ui/Header"
import SideBar from "../ui/SideBar"

function AppLayOut() {
  return (
    <div className="grid grid-cols-10 grid-rows-12" >
        <SideBar/>
    <Header/>
        <div className="col-span-8 row-span-12  ">
            <div className=" max-w-screen-xl"></div>
             <Outlet/>
             </div>
    </div>
  )
}

export default AppLayOut