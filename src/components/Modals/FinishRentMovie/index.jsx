import React from "react";

import "./finishRent.css";

const FinishRentMovie = ({ boxRented, movie, start, end, navigate }) => {
  const endProcessRent = () => {
    console.log(movie);
    boxRented.filter(
      (movieRented, i) => movieRented.name === movie && boxRented.splice(i, 1)
    );
    // navigate(0);
  };

  return (
    <div className="finish_movie">
      <div className="finish_content_movie">
        <div className="finish_info">
          <h3>Gracias por rentar {movie}. Gracias por elegirnos</h3>
          <p>
            Fecha registrada <br /> ({start} -- {end})
          </p>
          <button onClick={endProcessRent}>Salir</button>
        </div>
      </div>
    </div>
  );
};

export default FinishRentMovie;
