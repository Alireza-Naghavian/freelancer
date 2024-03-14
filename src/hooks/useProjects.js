import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectServices";

const useProjects = () => {
  const { data, isLoading } = useQuery({
    queryFn: getProjectsApi,
    queryKey: ["projects"],
  });

  const { projects } = data || {};
  return { isLoading, projects };
};

export default useProjects;
