import useProjects from "../../hooks/useProjects";
import Loader from "../../utils/Loader";
import DashBoardHeader from "../owner/DashBoardHeader"
import useProposals from "../proposals/hooks/useProposals"
import Stats from "./Stats";
import useUserList from "./hooks/UseUsersList";

function AdminDashBoard() {
    const {isLoading,proposals} = useProposals();
    const {isLoading:isLoading_2,projects} = useProjects();
    const {isLoading:isLoading_3,users} = useUserList();
    if(isLoading||isLoading_2||isLoading_3)return <Loader/>
  return (
    <div>
        <DashBoardHeader/>
        <Stats projects={projects.length} proposals={proposals.length} users={users.length} /> 
    </div>
  )
}

export default AdminDashBoard