import React, { useState } from "react";
import validator from "validator";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useForm } from "../../../hooks/useForm";

import "./register.css";
import { auth } from "../../../Firebase/firebaseConfig";

const RegisterScreen = () => {
  const [showError, setShowError] = useState("");
  const navigate = useNavigate();
  const [registerValue, handleInputChange] = useForm({
    fullname: "",
    user: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { fullname, user, email, password1, password2 } = registerValue;

  const sentMain = () => {
    navigate("/");
  };

  const isFormValid = () => {
    if (fullname.trim().length < 4) {
      setShowError("El nombre debe de tener más de cuatro digitos");
      return false;
    } else if (!validator.isEmail(email)) {
      setShowError("Su email no es correcto");
      return false;
    } else if (password1 !== password2 || password1.length < 6) {
      setShowError(
        "Su contraseña debe de tener mas de 6 digitos y deben ser iguales"
      );
      return false;
    }

    return true;
  };

  const sentRegisterForm = async (e) => {
    e.preventDefault();

    if (isFormValid()) {
      const infoUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password1
      );

      await updateProfile(auth.currentUser, {
        displayName: fullname,
      });

      console.log(infoUser);
    }
  };

  return (
    <>
      <div className="register__background"></div>
      <button className="register_btn_return" onClick={sentMain}>
        X
      </button>
      <div className="register__box">
        <div className="register__view">
          <h2>Register</h2>
          <form onSubmit={sentRegisterForm}>
            <input
              type="text"
              name="fullname"
              placeholder="Ingrese su nombre y apellido..."
              className="input_register"
              autoComplete="off"
              required
              value={fullname}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="user"
              placeholder="Ingrese su usuario..."
              className="input_register"
              autoComplete="off"
              required
              value={user}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Ingrese su email..."
              className="input_register"
              autoComplete="off"
              required
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password1"
              placeholder="Ingrese su contraseña"
              className="input_register"
              required
              value={password1}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password2"
              placeholder="confirme su contraseña"
              className="input_register"
              required
              value={password2}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn_register">
              Registrarse
            </button>
            <p className="show_error_register">{showError}</p>
          </form>
          <Link to="/login">
            <p className="register_p">Ya tengo una cuenta</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
