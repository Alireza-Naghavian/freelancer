import http from "./httpservices";

export const chageProposalStApi = ({ id, data }) => {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
};

export const getProposalsApi = () => {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
};
