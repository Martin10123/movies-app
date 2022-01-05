import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginScreen from "../components/Loggin-in/Login";
import ProfileScreen from "../components/Loggin-in/Profile";
import RegisterScreen from "../components/Loggin-in/Register";
import DasboardScreen from "./DasboardScreen";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
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
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfileScreen />
          </PrivateRoute>
        }
      />
      <Route path="/*" element={<DasboardScreen />} />
    </Routes>
  );
};

export default AppRouter;
