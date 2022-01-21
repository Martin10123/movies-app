import React, { useContext } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { UserActive } from "../../Contexts/UserContext";

import dateTime from "../../helpers/datePicker";

const CardMovie = ({ opinion, handleLike, handleDisLike }) => {
  const { userActive } = useContext(UserActive);

  const isLike = opinion.likes.includes(userActive?.uid);
  const isDislike = opinion.disLikes.includes(userActive?.uid);

  return (
    <div key={opinion.opinion} className="comentaries_content">
      <div className="comentaries_card">
        <h2>{opinion.user.name}</h2>
        <p
          className={
            opinion.opinion.length > 80
              ? "comentari_opinion_large"
              : "comentari_opinion"
          }
        >
          {opinion.opinion}
        </p>
        <p className="opinion_date">{dateTime(opinion.date)}</p>
        <span className="comentaries_buttons">
          <span
            onClick={() => handleLike(userActive?.uid, opinion.id, isLike)}
            className={
              isDislike ? "span_btn_like btn_like_no" : "span_btn_like"
            }
            disabled="disabled"
          >
            <AiFillLike className="comentaries_svg svg_green" />
            {opinion.likes.length}
          </span>

          <span
            onClick={() =>
              handleDisLike(userActive?.uid, opinion.id, isDislike)
            }
            className={
              isLike ? "span_btn_disLike btn_like_no" : "span_btn_disLike"
            }
            disabled="disabled"
          >
            <AiFillDislike className="comentaries_svg svg_red" />
            {opinion.disLikes.length}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CardMovie;
