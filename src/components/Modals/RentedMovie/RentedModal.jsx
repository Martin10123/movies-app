import React, { useState } from "react";

import "./rentedModal.css";

const RentedModal = ({ name, setShowModalRented, start, end }) => {
  const [next, setNext] = useState(0);

  const nextPage = () => {
    if (next === 1) {
      return;
    } else {
      setNext((next) => next + 1);
    }
  };

  return (
    <div className="modal_rented">
      <div className="modal_rented_content">
        <div className="modal_rented_info" onClick={nextPage}>
          <h2 className={next === 0 ? "modal_title" : "none"}>
            Acabas de rentarar la pelicula {name}
          </h2>
          <p className={next === 0 ? "modal_rented_p" : "none"}>
            presiona en cualquier lugar blanco
          </p>

          <div className={next === 1 ? "modal_content_form" : "none"}>
            <h2>Fecha</h2>
            <div className="modal_info_date">
              <p className="modal_data_start">Desde {start}</p>
              <p className="modal_data_start">Hasta {end}</p>
            </div>
            <button
              onClick={() => setShowModalRented(false)}
              className="btn_modal_true"
              type="submit"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentedModal;
