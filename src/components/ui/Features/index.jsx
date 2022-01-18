import React from "react";

import "./featuresUi.css";

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
  handleClick,
}) => {
  const Icono = icon;

  return (
    <div className="navbar_dropdown" onClick={() => handleShowInfo(id)}>
      <Icono className={classSvg} />
      <p>{type}</p>
      {
        <ul
          className={
            showByID === id && showFeatures
              ? `${classCom} active`
              : `${classCom}`
          }
        >
          {options.map((option, i) => (
            <li onClick={() => handleClick(option, type)} key={i}>
              {option}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Features;
