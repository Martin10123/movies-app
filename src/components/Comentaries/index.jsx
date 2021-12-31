import React from "react";

const ComentariesScreen = () => {
  return (
    <section className="comentaries_box">
      <h1>comentarios</h1>
      <form className="comentaries_form" action="">
        <textarea name="textarea" id="" cols="30" rows="10" />
        <button className="comentaries_button">Enviar</button>
      </form>
      <section className="comentaries_box_message">
        <div className="comentaries_content">
          <div className="comentaries_card">
            <h2>Martin Elias</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              porro repellat eius iure blanditiis, illo itaque dolorum
              aspernatur nostrum maiores corrupti illum ratione beatae id
              voluptate facere. Ab, libero odit.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ComentariesScreen;
