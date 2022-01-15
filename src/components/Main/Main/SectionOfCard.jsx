import React from "react";
import { AiFillMessage, AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SectionOfCard = ({
  movie,
  setShowMovie,
  likeToMovie,
  userActive,
  boxLikes,
  removeLikeToMovie,
}) => {
  const navigate = useNavigate();

  const goToMovieComplete = () => {
    if (userActive) {
      navigate(`movie/${movie.name}`);
      setShowMovie(false);
    } else {
      setShowMovie(true);
    }
  };

  const isLikes = boxLikes.some(
    (element) =>
      element.movie__name === movie.name &&
      element.user__uid === userActive?.uid
  );

  return (
    <>
      <div className="main_card">
        <div className="main_img">
          <img src={movie.image} alt="img wars" />
        </div>
        <div className="main_card_info">
          <span className="main_span_info_date">
            <span className="main_date">{movie.year}</span>
            {userActive && (
              <span className="main_svgs">
                <AiFillMessage className="svg" />
                {isLikes ? (
                  <FcLike
                    className="svg"
                    onClick={() => removeLikeToMovie(movie.id)}
                  />
                ) : (
                  <AiOutlineHeart
                    className="svg"
                    onClick={() =>
                      likeToMovie(movie.name, userActive?.uid, movie.id)
                    }
                  />
                )}
              </span>
            )}
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
