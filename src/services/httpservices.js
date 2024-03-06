import axios from "axios";
const Base_url = "http://localhost:5000/api";
const app = axios.create({
  baseURL: Base_url,
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

// app.interceptors.request.use(
//   (res) => res,
//   (err) => Promise.reject(err)
// );
// app.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     const original_config = err.config;
//     if (err.response.status === 401 && !original_config.retry ) { // we put retry property to send one req to backend and avoid from infinite loop
//       original_config.retry = true; // set true to cut infinite loop
//       try {
//         const { data } = await axios.get(`${Base_url}/use/refresh-token`, {
//           withCredentials: true,
//         });
//         console.log(data);
//         if (data) return app(original_config);

//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(err);
//   }
// );

export default http;
