import React from "react";
import { useParams } from "react-router-dom";
import wars from "../../../images/wars.jpg";

import "./viewMovie.css";

const ViewMovie = () => {
  const params = useParams();
  console.log(params);

  return (
    <>
      <div className="view_movie_color"></div>
      <section className="view_movie_card">
        <h1>Filtrado por: año (2020) </h1>
        <div className="view_movie_contain_cards">
          <article className="view_movie_content">
            <div className="view_movie_info">
              <div className="view_movie_img">
                <img src={wars} alt="" />
              </div>
              <div className="view_movie_desc">
                <h2>Matrix</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam error iusto vel! Tenetur veniam odio ipsum rerum
                  temporibus sunt alias autem repellat ex. Error itaque fuga
                  minima consectetur molestiae tenetur.
                </p>
              </div>
              <div className="view_movie_buttons">
                <button className="view_movie_btn btn_view_more">Ver</button>
                <button className="view_movie_btn btn_rented_movie">
                  Rentar
                </button>
                <button className="view_movie_btn btn_count_movie">
                  Cantidad
                </button>
              </div>
            </div>
          </article>
          <article className="view_movie_content">
            <div className="view_movie_info">
              <div className="view_movie_img">
                <img src={wars} alt="" />
              </div>
              <div className="view_movie_desc">
                <h2>Matrix</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam error iusto vel! Tenetur veniam odio ipsum rerum
                  temporibus sunt alias autem repellat ex. Error itaque fuga
                  minima consectetur molestiae tenetur.
                </p>
              </div>
              <div className="view_movie_buttons">
                <button className="view_movie_btn btn_view_more">Ver</button>
                <button className="view_movie_btn btn_rented_movie">
                  Rentar
                </button>
                <button className="view_movie_btn btn_count_movie">
                  Cantidad
                </button>
              </div>
            </div>
          </article>
          <article className="view_movie_content">
            <div className="view_movie_info">
              <div className="view_movie_img">
                <img src={wars} alt="" />
              </div>
              <div className="view_movie_desc">
                <h2>Matrix</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam error iusto vel! Tenetur veniam odio ipsum rerum
                  temporibus sunt alias autem repellat ex. Error itaque fuga
                  minima consectetur molestiae tenetur.
                </p>
              </div>
              <div className="view_movie_buttons">
                <button className="view_movie_btn btn_view_more">Ver</button>
                <button className="view_movie_btn btn_rented_movie">
                  Rentar
                </button>
                <button className="view_movie_btn btn_count_movie">
                  Cantidad
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default ViewMovie;
