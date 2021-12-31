import React from "react";

import "./register.css";

const RegisterScreen = () => {
  return (
    <>
      <div className="register__background"></div>
      <div className="register__box">
        <div className="register__view">
          <h2>Register</h2>
          <form>
            <input
              type="text"
              name="fullname"
              placeholder="Ingrese su nombre y apellido..."
              className="input_register"
              autoComplete="off"
            />
            <input
              type="text"
              name="user"
              placeholder="Ingrese su usuario..."
              className="input_register"
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="Ingrese su email..."
              className="input_register"
              autoComplete="off"
            />
            <input
              type="password"
              name="password1"
              placeholder="Ingrese su contraseña"
              className="input_register"
            />
            <input
              type="password"
              name="password2"
              placeholder="confirme su contraseña"
              className="input_register"
            />
            <button className="btn_register">Registrarse</button>
          </form>
          <p className="register_p">Ya tengo una cuenta</p>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
