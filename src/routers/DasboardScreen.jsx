import React from "react";
import { Routes, Route } from "react-router-dom";

// import ProfileScreen from "../components/Loggin-in/Profile";
import FeaturesMovie from "../components/Main/Features";
import MainScreen from "../components/Main/Main";
import ViewMovie from "../components/Main/ViewMovie";

const DasboardScreen = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="movie/category" element={<ViewMovie />} />
      <Route path="movie/:movieID" element={<FeaturesMovie />} />
      {/* <Route path="profile" element={<ProfileScreen />} /> */}
      <Route path="*" element={<h1>Esta pagina no existe</h1>} />
    </Routes>
  );
};

export default DasboardScreen;
