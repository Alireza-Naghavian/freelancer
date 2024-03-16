import { Outlet } from "react-router-dom"
import Header from "../ui/Header"

function AppLayOut({children}) {
  return (
    <div className="grid grid-cols-10 grid-rows-12" >
      {children}
      <Header/>
        <div className="col-span-8 row-span-12  ">
            <div className=" max-w-screen-xl"></div>
             <Outlet/>
             </div>
    </div>
  )
}

export default AppLayOut