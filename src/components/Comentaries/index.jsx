import React, { useContext } from "react";

import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

import { OpinionsContext } from "../../Contexts/MovieOpinions";
import { UserActive } from "../../Contexts/UserContext";
import { db } from "../../Firebase/firebaseConfig";
import { useForm } from "../../hooks/useForm";
import CardMovie from "./CardMovie";

import "./comentaries.css";

const ComentariesScreen = ({ movie_id }) => {
  const { userActive } = useContext(UserActive);
  const { boxOpinions } = useContext(OpinionsContext);

  const [valueOpinion, handleSentValue, reset] = useForm({
    opinion: "",
  });

  const { opinion } = valueOpinion;

  const sentInfoOpinion = async (e) => {
    e.preventDefault();

    const objectWithInfo = {
      opinion,
      movie__id: movie_id,
      user: { uid: userActive?.uid, name: userActive?.displayName },
      likes: [],
      disLikes: [],
      date: new Date().getTime(),
    };

    try {
      await addDoc(collection(db, "opinions"), objectWithInfo);
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  const handleLike = async (uuidUser, idMovie, isLike) => {
    try {
      await updateDoc(doc(db, "opinions", idMovie), {
        likes: isLike ? arrayRemove(uuidUser) : arrayUnion(uuidUser),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisLike = async (uuidUser, idMovie, isDislike) => {
    try {
      await updateDoc(doc(db, "opinions", idMovie), {
        disLikes: isDislike ? arrayRemove(uuidUser) : arrayUnion(uuidUser),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="comentaries_box">
      <h1>comentarios</h1>
      <form onSubmit={sentInfoOpinion} className="comentaries_form" action="">
        <textarea name="opinion" value={opinion} onChange={handleSentValue} />
        <button type="submit" className="comentaries_button">
          Enviar
        </button>
      </form>
      <section className="comentaries_box_message">
        <h1>Opiniones</h1>
        {boxOpinions.map(
          (opinion) =>
            opinion.movie__id === movie_id && (
              <CardMovie
                key={opinion.id}
                opinion={opinion}
                handleLike={handleLike}
                handleDisLike={handleDisLike}
              />
            )
        )}
      </section>
    </section>
  );
};

export default ComentariesScreen;
