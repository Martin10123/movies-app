import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  AiFillMessage,
  AiFillDislike,
  AiOutlineHeart,
  AiFillLike,
} from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { Link, useParams } from "react-router-dom";
import { MovieSelectToRent } from "../../../Contexts/MovieRented";
import { UserActive } from "../../../Contexts/UserContext";
import dateTime from "../../../helpers/datePicker";
import { getMovieByID } from "../../../Selector/selectorByID";
import load from "../../../images/load.svg";

import ComentariesScreen from "../../Comentaries";
import RentedModal from "../../Modals/RentedMovie/RentedModal";

import "./features.css";

const FeaturesMovie = () => {
  const { movieID } = useParams();
  const movie = useMemo(() => getMovieByID(movieID), [movieID]);

  const { boxRented, setBoxRented, dateFinishMovie, start, end } =
    useContext(MovieSelectToRent);
  const { userActive } = useContext(UserActive);
  const [showModalRented, setShowModalRented] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [boxBuyMovie, setBoxBuyMovie] = useState(
    JSON.parse(localStorage.getItem("movieBuy") || "[]")
  );

  const { name, year, type, place, votes, synopsis, price, cantidad, image } =
    movie;

  const boxLikes = JSON.parse(localStorage.getItem("movieLikes") || "[]");

  useEffect(() => {
    localStorage.setItem("movieRented", JSON.stringify(boxRented));
    localStorage.setItem("movieBuy", JSON.stringify(boxBuyMovie));
  }, [boxRented, boxBuyMovie]);

  const newStartDate = dateTime(start);
  const newEndDate = dateTime(end);

  // Funcion para rentar la pelicula

  const startRentMovie = () => {
    setShowModalRented(true);
    setBoxRented((moviesRented) => [
      ...moviesRented,
      {
        name,
        uid: userActive?.uid,
        start: newStartDate,
        end: newEndDate,
      },
    ]);
  };

  // Filtros para saber si la pelicula esta incluida en array de objectos donde se estan guardando en el localstorage

  const isLikes = boxLikes.some(
    (like) => like.movie__name === name && like.user__uid === userActive?.uid
  );

  console.log(boxLikes);

  const isRented = boxRented.some((rented) => rented.name === name);

  const isRentedUser = boxRented.some(
    (rented) => rented.name === name && rented.uid === userActive?.uid
  );

  const dateReturnMovie = boxRented.filter(
    (movieEnd) => movieEnd.name === name && movieEnd.end
  );

  // Condición para saber si ya la pelicula expiro, aún falta terminar que se borre del localstorage cuando se finaliza el tiempo

  if (dateTime(dateFinishMovie) === dateReturnMovie[0]?.end) {
    boxRented.filter(
      (movie, i) => movie.name === name && boxRented.splice(i, 1)
    );
    // navigate(0);
  }

  // Condición para saber si ya la pelicula fue comprada

  const isBuyUser = boxBuyMovie.some(
    (buy) => buy.name === name && buy.uid === userActive?.uid
  );

  const movieBouthg = boxBuyMovie.filter((movie) => movie.name === name);

  const cantidadRestante = cantidad - movieBouthg.length;

  // Funcion para comprar la pelicula

  const startBuyMovie = () => {
    setShowLoader(true);
    setTimeout(() => {
      if (cantidadRestante !== 0) {
        setBoxBuyMovie((moviesBuy) => [
          ...moviesBuy,
          { name, uid: userActive?.uid },
        ]);
      }
      setShowLoader(false);
    }, 3500);
  };

  return (
    <>
      <div className="features_background"></div>
      <Link to="/" className="features_btn_return">
        Salir
      </Link>
      <article className="features_box">
        <div className="features_content">
          <div className="feature_content_info">
            <div className="features_img">
              <img src={image} alt="" className="img_movie" />
            </div>
            <div className="features_desc">
              <div className="features_date">
                <span className="features_svg_comment">
                  <AiFillMessage className="features_svg" />
                  {isLikes ? (
                    <FcLike className="features_svg" />
                  ) : (
                    <AiOutlineHeart className="features_svg" />
                  )}
                </span>
                <span className="features_svg_popular">
                  <p>
                    <AiFillLike className="features_svg  svg_green" />
                    {votes.positivos}
                  </p>
                  <p>
                    <AiFillDislike className="features_svg svg_red" />
                    {votes.negativos}
                  </p>
                </span>
              </div>
              <h2>{name}</h2>
              <span className="features_description">
                <p>{synopsis}</p>
                <ul className="features_ul">
                  <li>Year: {year}</li>
                  <li>Type: {type.map((type) => type.concat(", "))}</li>
                  <li>Place: {place}</li>
                  <li>Price: {price}</li>
                  <li>Rented: {isRented ? "Si" : "No"}</li>
                  <li>Cantidad restante: {cantidadRestante}</li>
                </ul>
              </span>
              <div className="features_buttons">
                {isRented ? (
                  <p className="features_rented">
                    {isRentedUser
                      ? "Ya rentaste esta pelicula"
                      : "Ya fue rentada"}
                  </p>
                ) : (
                  <button className="btn_buy" onClick={startRentMovie}>
                    Rentar pelicula
                  </button>
                )}
                {isBuyUser ? (
                  <p className="features_rented">Ya compraste esta pelicula</p>
                ) : cantidadRestante === 0 ? (
                  <p className="features_rented">
                    Lo siento ya no hay de esta pelicula
                  </p>
                ) : (
                  <button className="btn_buy" onClick={startBuyMovie}>
                    Comprar pelicula
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
      <ComentariesScreen movie_id={name} />
      {showModalRented && (
        <RentedModal
          name={name}
          uid={userActive?.uid}
          id={movieID}
          setShowModalRented={setShowModalRented}
          boxRented={boxRented}
          setBoxRented={setBoxRented}
          start={newStartDate}
          end={newEndDate}
        />
      )}

      {showLoader && (
        <div className="loader_buy">
          <h1>Comprando la pelicula {name}</h1>
          <img src={load} alt="load" />
        </div>
      )}
    </>
  );
};

export default FeaturesMovie;
