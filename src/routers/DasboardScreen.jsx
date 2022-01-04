import React from "react";
import { Routes, Route } from "react-router-dom";

import ProfileScreen from "../components/Loggin-in/Profile";
import FeaturesMovie from "../components/Main/Features";
import MainScreen from "../components/Main/Main";
import ViewMovie from "../components/Main/ViewMovie";

const DasboardScreen = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />}>
        <Route path="category" element={<ViewMovie />} />
      </Route>
      <Route path="movie/:movieID" element={<FeaturesMovie />} />
      <Route path="profile/:name" element={<ProfileScreen />} />
      <Route path="*" element={<MainScreen />} />
    </Routes>
  );
};

export default DasboardScreen;
