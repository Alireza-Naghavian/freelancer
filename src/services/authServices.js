import http from "./httpservices";

export const getOtp = (data) => {
  return http.post("/user/get-otp", data);
};

export const checkOtp = (data) => {
  return http.post("/user/check-otp", data);
};
