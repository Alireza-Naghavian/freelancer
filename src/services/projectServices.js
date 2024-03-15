import http from "./httpservices";

export const getOwnerProjectApi = () => {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
};

export const removeProjectApi = (id) => {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
};
export const addNewProjectApi = (data) => {
  return http.post(`/project/add`, data).then(({ data }) => data.data);
};
export function editProjectApi({ id, newProject }) {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
}

export function editStatusProjectApi({ id, data }) {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
}

export const getSingleProjectApi = (id) => {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
};

export const getProjectsApi = (qs) => {
  return http.get(`/project/list/${qs? qs : ""}`).then(({ data }) => data.data);
};
