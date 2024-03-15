import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectServices";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
const useProjects = () => {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  console.log(search);
  const { data, isLoading } = useQuery({
    queryFn: () => getProjectsApi(search||""),
    queryKey: ["projects", queryObject],
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchIntervalInBackground: false,
  });

  const { projects } = data || {};
  return { isLoading, projects };
};

export default useProjects;
