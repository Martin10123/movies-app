import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

import "./comentaries.css";

const ComentariesScreen = () => {
  return (
    <section className="comentaries_box">
      <h1>comentarios</h1>
      <form className="comentaries_form" action="">
        <textarea name="textarea" />
        <button type="submit" className="comentaries_button">
          Enviar
        </button>
      </form>
      <section className="comentaries_box_message">
        <h1>Opiniones</h1>
        <div className="comentaries_content">
          <div className="comentaries_card">
            <h2>Martin Elias</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              porro repellat eius iure blanditiis, illo itaque dolorum
              aspernatur nostrum maiores corrupti illum ratione beatae id
              voluptate facere. Ab, libero odit.
            </p>
            <p>hace 3 horas</p>
            <span className="comentaries_buttons">
              <span>
                <AiFillLike className="comentaries_svg svg_green" />
                {10}
              </span>
              <span>
                <AiFillDislike className="comentaries_svg svg_red" />
                {14}
              </span>
            </span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ComentariesScreen;
