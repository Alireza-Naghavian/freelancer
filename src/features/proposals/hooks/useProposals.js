import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../../services/proposalServices";

const useProposals = () => {
  var log = 29;
  const loger = ()=>{
    console.log(log);
    var log = 30
  }
loger()
  const { data, isLoading } = useQuery({
    queryFn: getProposalsApi,
    queryKey:["proposlas"],
    retry:false
  });
  const { proposals } = data || {};
  return { isLoading, proposals };
};
export default useProposals;
