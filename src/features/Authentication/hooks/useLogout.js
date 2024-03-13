import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logoutApi } from "../../../services/authServices"
import { useNavigate } from "react-router-dom";

const useLogOut = ()=>{
    const navigate = useNavigate()
    const queryClient = useQueryClient();
 const {isPending:logOutLoading,mutate:logOutUser}=    useMutation({
        mutationFn:logoutApi,
        mutationKey:["user"],
        onSuccess:()=>{
            queryClient.removeQueries();
            navigate("/auth",{replace:true})
       
        }
    })
    return {logOutLoading,logOutUser}
}
export default useLogOut