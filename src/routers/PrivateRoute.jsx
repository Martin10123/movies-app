import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserActive } from "../Contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { userActive } = useContext(UserActive);

  return userActive ? children : <Navigate to="/" />;
};

export default PrivateRoute;
