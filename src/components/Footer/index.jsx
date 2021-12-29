import React from "react";

import { BsWhatsapp, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import "./footer.css";

const FooterScreen = () => {
  return (
    <footer className="footer">
      <div className="footer_login">
        <h2>¿Aún no te has suscrito?</h2>
        <ul>
          <li>Ingrese con su cuenta</li>
          <li>Registrese</li>
        </ul>
      </div>
      <div className="footer_contact">
        <h2>Encuentranos en</h2>
        <span className="footer_contact_socials">
          <a href="a" className="social_network">
            <BsWhatsapp />
          </a>
          <a href="a" className="social_network">
            <BsFacebook />
          </a>
          <a href="a" className="social_network">
            <BsInstagram />
          </a>
          <a href="a" className="social_network">
            <BsGithub />
          </a>
          <a href="a" className="social_network">
            <SiGmail />
          </a>
        </span>
      </div>
      <div className="footer_message">
        <h2>Dejanos un mensaje</h2>
        <form action="">
          <input type="text" name="name" placeholder="Su nombre..." />
          <input type="email" name="email" placeholder="Su email..." />
          <textarea
            name="textarea"
            id=""
            cols="30"
            rows="10"
            placeholder="Su mensaje..."
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </footer>
  );
};

export default FooterScreen;
