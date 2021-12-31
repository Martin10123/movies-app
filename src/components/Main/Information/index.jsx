import React, { useState } from "react";
import { informationAbout } from "../../../helpers/caracteristcas";

import "./information.css";

const InformationScreen = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [idToShow, setIdToShow] = useState(0);

  const handleShowInfo = (id) => {
    setIdToShow(id);
    setShowInfo(!showInfo);
  };

  return (
    <article className="info_box">
      <h1>Información</h1>
      <div className="info_content">
        <div className="info_info_about">
          <ul className="info_ul">
            {informationAbout.map((info) => {
              return (
                <div className="info_div_content" key={info.id}>
                  <li onClick={() => handleShowInfo(info.id)}>{info.title}</li>
                  <p
                    className={
                      idToShow === info.id && showInfo
                        ? "info_p "
                        : "info_p_hidden"
                    }
                  >
                    {info.desc}
                  </p>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default InformationScreen;
