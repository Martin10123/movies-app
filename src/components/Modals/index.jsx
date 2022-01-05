import React from "react";
import { useNavigate } from "react-router-dom";

import "./modal.css";

const ModalScreen = ({ setShowMovie }) => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="modal">
      <div className="modal_content">
        <div className="modal_info">
          <h2>No estas logueado</h2>
          <p>
            Si quieres realizar esta acción antes tienes que estar registrado a
            esta pagina, la buena
          </p>
          <div className="modal_buttons">
            <button
              className="btn_modal btn_color_green"
              onClick={goToRegister}
            >
              Registrarse
            </button>
            <button
              className="btn_modal btn_color"
              onClick={() => setShowMovie(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalScreen;
