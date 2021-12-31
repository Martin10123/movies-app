import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../components/Loggin-in/Login";
import ProfileScreen from "../components/Loggin-in/Profile";
import RegisterScreen from "../components/Loggin-in/Register";
import FeaturesMovie from "../components/Main/Features";
import MainScreen from "../components/Main/Main";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="/" element={<MainScreen />}>
          <Route path=":name" element={<ProfileScreen />} />
          <Route path=":movieID" element={<FeaturesMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
