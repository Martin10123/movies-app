import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "../components/Loggin-in/Login";
import RegisterScreen from "../components/Loggin-in/Register";
import DasboardScreen from "./DasboardScreen";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
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
