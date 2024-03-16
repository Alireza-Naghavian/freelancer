import { useQuery } from "@tanstack/react-query"
import { getSingleProjectApi } from "../../../services/projectServices"
import { useParams } from "react-router-dom"

const useSingleProjectData = ()=>{
const {id} = useParams();
  const {isPending:isProjectLoading,data,}=  useQuery({
        queryKey:["singleProject",id], // with put id in this field we always have unique key for each project
        queryFn:()=>getSingleProjectApi(id), //we have send id in a callback function  to  prevent infinite loop
    })
    const {project}  = data || {}
    return {isProjectLoading,project}
}


export default useSingleProjectData
