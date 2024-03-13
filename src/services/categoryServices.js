import http from "./httpservices";

export const getCategoryApi = () => {
  return http.get("/category/list").then(({ data }) => data.data);
};
