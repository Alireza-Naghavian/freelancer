import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../../services/proposalServices";

const useProposals = () => {
  const { data, isLoading } = useQuery({
    queryFn: getProposalsApi,
    queryKey:["proposlas"],
    retry:false
  });
  const { proposals } = data || {};
  return { isLoading, proposals };
};
export default useProposals;
