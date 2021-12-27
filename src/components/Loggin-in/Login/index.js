import React from "react";

import "./login.css";

const LoginScreen = () => {
  return (
    <>
      <div className="login__background"></div>
      <div className="login__box">
        <div className="login__view">
          <h2>Login</h2>
          <form>
            <input
              className="login_input"
              name="email"
              type="text"
              placeholder="Ingrese su email..."
              autoComplete="off"
            />
            <input
              className="login_input"
              name="password"
              type="password"
              placeholder="Ingrese su contraseña"
              autoComplete="off"
            />
            <button className="btn_login">Login</button>
          </form>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
          <p className="login_p">No tengo una cuenta</p>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
