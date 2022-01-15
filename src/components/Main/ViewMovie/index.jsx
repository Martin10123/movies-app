import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserActive } from "../../../Contexts/UserContext";
import { getMovieByName } from "../../../Selector/selectorByName";
import ModalScreen from "../../Modals";

import "./viewMovie.css";

const ViewMovie = () => {
  const { userActive } = useContext(UserActive);
  const [showMovie, setShowMovie] = useState(false);
  const { type, category } = useParams();
  const navigate = useNavigate();

  const movieFilter = getMovieByName(category, type);

  const goToViewAloneMovie = (name) => {
    userActive
      ? navigate(`/movie/${name}`) && setShowMovie(false)
      : setShowMovie(true);
  };

  return (
    <>
      <div className="view_movie_color"></div>
      <Link to="/" className="view_movie_btn_return">
        Regresar
      </Link>
      <section className="view_movie_card" style={{ transition: "3s ease" }}>
        <h1>
          Filtrado por: {type} ({category})
        </h1>
        <div className="view_movie_contain_cards">
          {movieFilter.length > 0 ? (
            movieFilter.map((movie) => {
              return (
                <article key={movie.id} className="view_movie_content">
                  <div className="view_movie_info">
                    <div className="view_movie_img">
                      <img src={movie.image} alt="" />
                    </div>
                    <div className="view_movie_desc">
                      <h2>{movie.name}</h2>
                      <p>{movie.synopsis}</p>
                    </div>
                    <div className="view_movie_buttons">
                      <button
                        className="view_movie_btn btn_view_more"
                        onClick={() => goToViewAloneMovie(movie.name)}
                      >
                        Ver
                      </button>
                      <button className="view_movie_btn btn_rented_movie">
                        Comprar
                      </button>
                      <p className="btn_count_movie">
                        Cantidad: {movie.cantidad}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="showAlertMessage">
              <h1>No hay de esta categoria</h1>
            </div>
          )}
        </div>
      </section>
      {showMovie && <ModalScreen setShowMovie={setShowMovie} />}
    </>
  );
};

export default ViewMovie;
