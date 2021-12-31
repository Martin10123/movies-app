import React from "react";
import {
  AiFillMessage,
  AiFillDislike,
  AiOutlineHeart,
  AiFillLike,
} from "react-icons/ai";
import img1 from "../../../images/wars.jpg";

import ComentariesScreen from "../../Comentaries";

import "./features.css";

const FeaturesMovie = () => {
  return (
    <>
      <div className="features_background"></div>
      <article className="features_box">
        <div className="features_content">
          <div className="feature_content_info">
            <div className="features_img">
              <img src={img1} alt="" className="img_movie" />
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
                    92%
                  </p>
                  <p>
                    <AiFillDislike className="features_svg svg_red" />
                    22%
                  </p>
                </span>
              </div>
              <h2>Rapidos y Furiosos</h2>
              <span className="features_description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus a vitae dolorem cumque cupiditate aliquid
                  doloremque neque quasi libero nam asperiores, perspiciatis
                  tempore! Ab atque illo hic commodi, inventore aut?
                </p>
                <ul className="features_ul">
                  <li>year: 2021</li>
                  <li>type: acción, ficción, terror</li>
                  <li>Place: Estados Unidos</li>
                  <li>price: $2.500</li>
                  <li>rented: No</li>
                  <li>cantidad restante: 10</li>
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
