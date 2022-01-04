import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserActive } from "../Contexts/UserContext";

const PublicRoute = ({ children }) => {
  const { userActive } = useContext(UserActive);

  return userActive ? <Navigate to="/" /> : children;
};

export default PublicRoute;
