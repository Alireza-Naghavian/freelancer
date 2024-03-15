import { useLocation } from "react-router-dom";
import useUser from "./useUser";

const useAuthrize = () => {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();
  let isAuthenticated = false;
  if (user) isAuthenticated = true;
  let isAuthorized = false;

  //junior model
  //   if (pathname.includes("owner")) {
  //     if (user && user.role === "OWNER") isAuthorized = true;
  //   }
  //   if (pathname.includes("freelancer")) {
  //     if (user && user.role === "FREELANCER") isAuthorized = true;
  //   }
  //   if (pathname.includes("admin")) {
  //     if (user && user.role === "ADMIN") isAuthorized = true;
  //   }

  // professional model
  const ROLES = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };
  const desiredRole = pathname.split("/").at(1);
  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAuthorized = true;
  }
  return { isLoading, isAuthenticated, isAuthorized, user };
};
export default useAuthrize;