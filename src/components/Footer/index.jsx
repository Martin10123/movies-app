import React from "react";

import { BsWhatsapp, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import "./footer.css";

const FooterScreen = () => {
  return (
    <footer className="footer">
      <div className="footer_login">
        <h2>¿Aún no te has suscrito?</h2>
        <ul>
          <Link to="/login">
            <li>Ingrese con su cuenta</li>
          </Link>
          <Link to="/register">
            <li>Registrese</li>
          </Link>
        </ul>
      </div>
      <div className="footer_contact">
        <h2>Encuentranos en</h2>
        <span className="footer_contact_socials">
          <a
            href="https://wa.link/2995b6"
            className="social_network"
            rel="noreferrer"
            target="_blank"
          >
            <BsWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/martinelias1012"
            className="social_network"
            rel="noreferrer"
            target="_blank"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/martinelias1012/"
            className="social_network"
            rel="noreferrer"
            target="_blank"
          >
            <BsInstagram />
          </a>
          <a
            href="https://github.com/Martin10123"
            className="social_network"
            rel="noreferrer"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            href="mailto:martinsimarra4@gmail.com?"
            className="social_network"
            rel="noreferrer"
            target="_blank"
          >
            <SiGmail />
          </a>
        </span>
      </div>
      <div className="footer_message">
        <h2>Dejanos un mensaje</h2>
        <form action="">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" autoComplete="off" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" autoComplete="off" />
          <label htmlFor="textarea">Mensaje</label>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            autoComplete="off"
          />
          <button type="submit" onClick={(e) => e.preventDefault()}>
            Enviar
          </button>
        </form>
      </div>
    </footer>
  );
};

export default FooterScreen;
