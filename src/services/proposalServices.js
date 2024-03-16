import http from "./httpservices";

export const chageProposalStApi = ({ proposalId, ...data }) => {
  return http.patch(`/proposal/${proposalId}`, data).then(({ data }) => data.data);
};

export const getProposalsApi = () => {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
};
export const sendProposalApi = ( data) => {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
};
