import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../context/userContext";

import AuthService from "../services/authService";

const Logout = () => {
  const { fetchCurrentUser } = useCurrentUser();

  useEffect(() => {
    AuthService.logout();
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return <Navigate to="/" replace />;
};

export default Logout;
