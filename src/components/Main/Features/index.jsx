import React, { useMemo } from "react";
import {
  AiFillMessage,
  AiFillDislike,
  AiOutlineHeart,
  AiFillLike,
} from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieByID } from "../../../Selector/selectorByID";

import ComentariesScreen from "../../Comentaries";

import "./features.css";

const FeaturesMovie = () => {
  const { movieID } = useParams();
  const navigate = useNavigate();

  const movie = useMemo(() => getMovieByID(movieID), [movieID]);
  const {
    name,
    year,
    type,
    Place,
    votes,
    synopsis,
    price,
    rented,
    cantidad,
    image,
  } = movie;

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
                  <AiOutlineHeart className="features_svg" />
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
                  <li>year: {year}</li>
                  <li>type: {type.map((type) => type.concat(", "))}</li>
                  <li>Place: {Place}</li>
                  <li>price: {price}</li>
                  <li>rented: {rented ? "Si" : "No"}</li>
                  <li>cantidad restante: {cantidad}</li>
                </ul>
              </span>
              <div className="features_buttons">
                <button className="btn_buy">Rentar pelicula</button>
                <button className="btn_buy">Comprar pelicula</button>
              </div>
            </div>
          </div>
        </div>
      </article>
      <ComentariesScreen />
    </>
  );
};

export default FeaturesMovie;
