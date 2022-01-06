import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { UserActive } from "../../Contexts/UserContext";
import { BiHome, BiLogIn } from "react-icons/bi";
import profileImg from "../../images/default.png";

import { moviesMood, socialNetwork } from "../../helpers/caracteristcas";
import Features from "./Features";

import "./navbar.css";

const NavbarScreen = () => {
  const { userActive, startLogout } = useContext(UserActive);

  const navigate = useNavigate();

  const [showByID, setShowByID] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const handleShowInfo = (id) => {
    setShowByID(id);
    setShowFeatures(!showFeatures);
  };

  const goToProfile = () => {
    if (userActive) {
      navigate(`/profile`);
    } else {
      return toast.info("Tienes que estar logueado para realizar esta acción", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleClick = (category, type) => {
    if (type !== "Votos") {
      navigate(`movie/${type.toLowerCase()}/${category.toLowerCase()}`);
    } else {
      const newType = category.substring(0, category.length - 1);
      navigate(`movie/${type.toLowerCase()}/${newType.toLowerCase()}`);
    }
  };

  return (
    <>
      <span className="navbar_menu_span">
        <div className="navbar_profile" onClick={goToProfile}>
          {userActive?.photoURL ? (
            <img
              className="navbar_profile_img"
              src={userActive.photoURL}
              alt="Foto de perfil"
            />
          ) : (
            <img
              className="navbar_profile_img"
              src={profileImg}
              alt="Foto de perfil"
            />
          )}
          {userActive?.displayName ? (
            <p>{userActive?.displayName}</p>
          ) : (
            <p>Anonimo</p>
          )}
        </div>
        <GiHamburgerMenu
          onClick={() => setShowNav(!showNav)}
          className="navbar_menu"
        />
      </span>
      <nav
        className={
          showNav
            ? "navbar_container slidingOff"
            : "navbar_container hidden_navbar"
        }
      >
        <div className="navbar_content">
          <button onClick={() => setShowNav(false)} className="close_navbar">
            X
          </button>
          <span className="navbar_title">
            <BiHome className="svg_home" />
          </span>
          <div className="navbar_select_dropdown">
            {moviesMood.map((data) => {
              return (
                <Features
                  key={data.id}
                  {...data}
                  showByID={showByID}
                  showNav={showNav}
                  handleShowInfo={handleShowInfo}
                  handleClick={handleClick}
                  showFeatures={showFeatures}
                />
              );
            })}
          </div>
          <span onClick={startLogout} className="navbar_span_logout">
            <BiLogIn className="logout_svg" />
            <p>Logout</p>
          </span>
          <div className="navbar_links">
            {socialNetwork.map((red) => {
              const RedIcon = red.icon;
              return (
                <a
                  key={red.id}
                  href={red.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <RedIcon className={red.class} />
                </a>
              );
            })}
          </div>
        </div>
      </nav>
      <ToastContainer position="top-right" autoClose={2000} pauseOnFocusLoss />
    </>
  );
};

export default NavbarScreen;
