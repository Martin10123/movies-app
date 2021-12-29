import React from "react";

import "./modal.css";

const ModalScreen = () => {
  return (
    <div className="modal">
      <div className="modal_content">
        <div className="modal_info">
          <h2>Por favor registrase</h2>
          <p>Si quieres realizar esta acción antes tienes que estar suscrito</p>
          <div className="modal_buttons">
            <button className="btn btn_color_green">Registrarse</button>
            <button className="btn btn_color">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalScreen;
