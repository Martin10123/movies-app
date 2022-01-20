import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

import dateTime from "../../helpers/datePicker";

const CardMovie = ({ opinion, handleLike, handleDisLike }) => {
  const isLike = opinion.likes.includes(opinion.user.uid);
  const isDislike = opinion.disLikes.includes(opinion.user.uid);

  console.log(opinion);

  return (
    <div key={opinion.opinion} className="comentaries_content">
      <div className="comentaries_card">
        <h2>{opinion.user.name}</h2>
        <p>{opinion.opinion}</p>
        <p className="opinion_date">{dateTime(opinion.date)}</p>
        <span className="comentaries_buttons">
          {!isDislike && (
            <span
              onClick={() => handleLike(opinion.user.uid, opinion.id, isLike)}
            >
              <AiFillLike className="comentaries_svg svg_green" />
              {opinion.likes.length}
            </span>
          )}

          {!isLike && (
            <span
              onClick={() =>
                handleDisLike(opinion.user.uid, opinion.id, isDislike)
              }
            >
              <AiFillDislike className="comentaries_svg svg_red" />
              {opinion.disLikes.length}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default CardMovie;
