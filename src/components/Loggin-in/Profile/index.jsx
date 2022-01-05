import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserActive } from "../../../Contexts/UserContext";

import profile from "../../../images/world.jpg";

import "./profile.css";

const ProfileScreen = () => {
  const { userActive, startLogout } = useContext(UserActive);

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };

  return (
    <section className="user_container">
      <div className="user_container_butons">
        <button className="user_close" onClick={goToMain}>
          Salir
        </button>
        <button className="user_logout" onClick={startLogout}>
          Cerrar session
        </button>
      </div>
      <div className="user_box">
        {userActive?.photoURL ? (
          <img className="user_img" src={userActive?.photoURL} alt="" />
        ) : (
          <img className="user_img" src={profile} alt="" />
        )}
        <h1>{userActive?.displayName}</h1>
      </div>
      <article className="user_content_info">
        <section className="user_personal_info">
          <span className="user_desc">
            <strong>Nombre:</strong>
            <p>{userActive?.displayName}</p>
          </span>
          <span className="user_desc">
            <strong>Email:</strong>
            <p>{userActive?.email}</p>
          </span>
          <span className="user_desc">
            <strong>Celular:</strong>
            {userActive?.phoneNumber ? (
              <p>{userActive?.phoneNumber}</p>
            ) : (
              <p>No se registro un número telefonico</p>
            )}
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
