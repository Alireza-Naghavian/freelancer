import Loader from "../../utils/Loader"
import useOwnerProjects from "../projects/useOwnerProjects"
import DashBoardHeader from "./DashBoardHeader"
import Stats from "./Stats"

function DashBoardLayout() {
     const {isLoading,projects} =useOwnerProjects()
     if(isLoading) return <Loader/>
  return (
    <div>
        <DashBoardHeader/>
        <Stats projects={projects}/>
    </div>
  )
}

export default DashBoardLayout