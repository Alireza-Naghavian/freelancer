import http from "./httpservices";

export const chageProposalStApi = ( {id, data }) => {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
};
