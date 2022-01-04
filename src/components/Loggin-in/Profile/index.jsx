import React from "react";
import { useParams } from "react-router-dom";
import profileImg from "../../../images/wars.jpg";

import "./profile.css";

const ProfileScreen = () => {
  const params = useParams();
  console.log(params);

  return (
    <section className="user_container">
      <button className="user_close">Salir</button>
      <div className="user_box">
        <img className="user_img" src={profileImg} alt="" />
        <h1>Martin Elias</h1>
      </div>
      <article className="user_content_info">
        <section className="user_personal_info">
          <span className="user_desc">
            <strong>Nombre:</strong>
            <p>Martin Elias</p>
          </span>
          <span className="user_desc">
            <strong>Email:</strong>
            <p>Martin@gmail.com</p>
          </span>
          <span className="user_desc">
            <strong>Celular:</strong>
            <p>300-683-0624</p>
          </span>
          <span className="user_desc">
            <strong>Dirección:</strong>
            <p>Torices</p>
          </span>
          <span className="user_desc">
            <strong>Sexo:</strong>
            <p>Masculino</p>
          </span>
        </section>
        <section className="user_info_movies">
          <div className="contain_ul_movies">
            <strong>Peliculas rentadas: </strong>
            <ul>
              <li>- Spiderman</li>
              <li>- Goku</li>
            </ul>
          </div>
          <div className="contain_ul_movies">
            <strong>Peliculas que te gustan: </strong>
            <ul>
              <li>- Spiderman</li>
              <li>- Goku</li>
            </ul>
          </div>
        </section>
      </article>
    </section>
  );
};

export default ProfileScreen;
