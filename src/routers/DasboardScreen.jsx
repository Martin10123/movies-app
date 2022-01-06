import React from "react";
import { Routes, Route } from "react-router-dom";

import FeaturesMovie from "../components/Main/Features";
import MainScreen from "../components/Main/Main";
import ViewMovie from "../components/Main/ViewMovie";

const DasboardScreen = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="movie/:type/:category" element={<ViewMovie />} />
      <Route path="movie/:movieID" element={<FeaturesMovie />} />
      <Route path="*" element={<h1>Esta pagina no existe</h1>} />
    </Routes>
  );
};

export default DasboardScreen;
