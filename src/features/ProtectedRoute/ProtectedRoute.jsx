import React, { useEffect } from "react";
import useAuthrize from "../Authentication/hooks/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/Loader";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isAuthorized, isLoading, user } = useAuthrize();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access");
  }, [navigate, isAuthenticated, isAuthorized]);
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loader />
      </div>
    );
  if (isAuthenticated & isAuthorized) return children; 
}

export default ProtectedRoute;
