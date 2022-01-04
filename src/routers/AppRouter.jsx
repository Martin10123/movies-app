import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../components/Loggin-in/Login";

import RegisterScreen from "../components/Loggin-in/Register";
import DasboardScreen from "./DasboardScreen";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />

        <Route path="/*" element={<DasboardScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
