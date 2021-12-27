import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiHome, BiStar } from "react-icons/bi";

import { moviesMood, socialNetwork } from "../../helpers/caracteristcas";

import "./navbar.css";
import Features from "./Features";

const NavbarScreen = () => {
  const [showByID, setShowByID] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const handleShowInfo = (id) => {
    setShowByID(id);
    setShowFeatures(!showFeatures);
  };

  return (
    <>
      <span onClick={() => setShowNav(!showNav)} className="navbar_menu_span">
        <GiHamburgerMenu className="navbar_menu" />
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
                  showFeatures={showFeatures}
                />
              );
            })}
          </div>
          <span className="navbar_span_favorite">
            <BiStar className="star_svg" />
            <p>Favorites</p>
          </span>
          <div className="navbar_links">
            {socialNetwork.map((red) => {
              const RedIcon = red.icon;
              return (
                <a key={red.id} href={red.link}>
                  <RedIcon className={red.class} />
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarScreen;
