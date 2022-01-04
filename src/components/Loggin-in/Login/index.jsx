import React, { useState } from "react";
import validator from "validator";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

import { auth, provider } from "../../../Firebase/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import "./login.css";

const LoginScreen = () => {
  const [showError, setShowError] = useState("");
  const navigate = useNavigate();
  const [loginValue, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = loginValue;

  const sentMain = () => {
    navigate("/");
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      setShowError("Su email no es correcto");
      return false;
    } else if (password.length < 6) {
      setShowError("Su contraseña debe de tener mas de 6 digitos");
      return false;
    }

    return true;
  };

  const sentInfoLogin = (e) => {
    e.preventDefault();
    try {
      if (isFormValid()) {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setShowError(errorCode);
            setShowError(errorMessage);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const startLoginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login__background"></div>
      <button className="login_btn_return" onClick={sentMain}>
        X
      </button>
      <div className="login__box">
        <div className="login__view">
          <h2>Login</h2>
          <form onSubmit={sentInfoLogin}>
            <input
              className="login_input"
              name="email"
              type="text"
              placeholder="Ingrese su email..."
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
            <input
              className="login_input"
              name="password"
              type="password"
              placeholder="Ingrese su contraseña"
              autoComplete="off"
              value={password}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn_login">
              Login
            </button>
          </form>
          <div className="google-btn" onClick={startLoginWithGoogle}>
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
          <p className="btn_show_error">{showError}</p>
          <Link to="/register">
            <p className="login_p">No tengo una cuenta</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
