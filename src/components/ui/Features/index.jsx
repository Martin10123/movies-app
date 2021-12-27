import React from "react";

import "./features.css";

const Features = ({
  id,
  icon,
  classCom,
  classSvg,
  type,
  options,
  handleShowInfo,
  showByID,
  showFeatures,
}) => {
  const Icono = icon;

  return (
    <div className="navbar_dropdown" onClick={() => handleShowInfo(id)}>
      <Icono className={classSvg} />
      <p>{type}</p>
      {showByID === id && showFeatures && (
        <ul className={`${classCom}`}>
          {options.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Features;
