import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { UserActive } from "../Contexts/UserContext";

import LoginScreen from "../components/Loggin-in/Login";
import RegisterScreen from "../components/Loggin-in/Register";
import DasboardScreen from "./DasboardScreen";
// import LoadingPage from "../components/Loading";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  // const { loading } = useContext(UserActive);

  // if (loading) {
  //   return <LoadingPage />;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterScreen />
            </PublicRoute>
          }
        />
        <Route path="/*" element={<DasboardScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
