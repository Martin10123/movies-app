import React, { useContext } from "react";
import { AiFillMessage, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { UserActive } from "../../../Contexts/UserContext";

const SectionOfCard = ({ movie, setShowMovie }) => {
  const { userActive } = useContext(UserActive);
  const navigate = useNavigate();

  const goToMovieComplete = () => {
    if (userActive) {
      navigate(`movie/${movie.name}`);
      setShowMovie(false);
    } else {
      setShowMovie(true);
    }
  };

  return (
    <>
      <div className="main_card">
        <div className="main_img">
          <img src={movie.image} alt="img wars" />
        </div>
        <div className="main_card_info">
          <span className="main_span_info_date">
            <span className="main_date">{movie.year}</span>
            <span className="main_svgs">
              <AiFillMessage className="svg" />
              <AiOutlineHeart className="svg" />
            </span>
          </span>
          <div className="main_description">
            <h3>{movie.name}</h3>
            <p className="main_title_movie">{movie.synopsis}</p>

            <p onClick={goToMovieComplete} className="main_btn_more">
              ver más...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOfCard;
