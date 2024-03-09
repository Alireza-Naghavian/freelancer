import http from "./httpservices";

const getOwnerProjectApi = () => {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
};
export default getOwnerProjectApi;
