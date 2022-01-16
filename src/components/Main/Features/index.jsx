import React, { useContext, useMemo, useState } from "react";
import {
  AiFillMessage,
  AiFillDislike,
  AiOutlineHeart,
  AiFillLike,
} from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";
import { UserActive } from "../../../Contexts/UserContext";
import { getMovieByID } from "../../../Selector/selectorByID";

import ComentariesScreen from "../../Comentaries";
import RentedModal from "../../Modals/RentedMovie/RentedModal";

import "./features.css";

const FeaturesMovie = () => {
  const { movieID } = useParams();
  const navigate = useNavigate();
  const { userActive } = useContext(UserActive);

  const movie = useMemo(() => getMovieByID(movieID), [movieID]);
  const { name, year, type, place, votes, synopsis, price, cantidad, image } =
    movie;

  const [showModalRented, setShowModalRented] = useState(false);
  const boxLikes = JSON.parse(localStorage.getItem("movieID") || "[]");
  const boxRented = JSON.parse(localStorage.getItem("movieRented") || "[]");

  const isLikes = boxLikes.some(
    (like) => like.movie__name === name && like.user__uid === userActive?.uid
  );

  const isRented = boxRented.some(
    (rented) => rented.name === name && rented.uid === userActive?.uid
  );

  const sentMain = () => {
    navigate("/");
  };

  return (
    <>
      <div className="features_background"></div>
      <button className="features_btn_return" onClick={sentMain}>
        Salir
      </button>
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
                  <li>Cantidad restante: {cantidad}</li>
                </ul>
              </span>
              <div className="features_buttons">
                {isRented ? (
                  <p className="features_rented">Ya rentaste esta pelicula</p>
                ) : (
                  <button
                    onClick={() => setShowModalRented(true)}
                    className="btn_buy"
                  >
                    Rentar pelicula
                  </button>
                )}
                <button className="btn_buy">Comprar pelicula</button>
              </div>
            </div>
          </div>
        </div>
      </article>
      <ComentariesScreen />
      {showModalRented && (
        <RentedModal
          name={name}
          uid={userActive?.uid}
          id={movieID}
          setShowModalRented={setShowModalRented}
        />
      )}
    </>
  );
};

export default FeaturesMovie;
