import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { UserActive } from "../../../Contexts/UserContext";
import { responsive } from "../../../helpers/caracteristcas";

import moviesFalse from "../../../movieFalse";
import SectionOfCard from "./SectionOfCard";
import NavbarScreen from "../../ui";
import HeaderScreen from "../../Header";
import InformationScreen from "../Information";

import FooterScreen from "../../Footer";
import ModalScreen from "../../Modals/RestringModal";

import "./main.css";

const MainScreen = () => {
  const { userActive } = useContext(UserActive);
  const [showMovie, setShowMovie] = useState(false);
  const [boxLikes, setBoxLikes] = useState(
    JSON.parse(localStorage.getItem("movieLikes") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("movieLikes", JSON.stringify(boxLikes));
  }, [boxLikes]);

  const likeToMovie = (movie__name, user__uid, movie__id) => {
    const movieUser = { movie__name, user__uid, movie__id };
    setBoxLikes((movie) => [...movie, movieUser]);
  };

  const removeLikeToMovie = (movie__name, user__uid) => {
    boxLikes.filter(
      (movie, i) =>
        movie.movie__name === movie__name &&
        movie.user__uid === user__uid &&
        boxLikes.splice(i, 1)
    );
  };

  return (
    <>
      <NavbarScreen />
      <HeaderScreen />
      <main className="main_box">
        <section id="peliculas" className="main_section_all_movie">
          <h1>Peliculas</h1>
          <div className="main_info_map">
            {moviesFalse.map((movie) => (
              <SectionOfCard
                key={movie.id}
                movie={movie}
                setShowMovie={setShowMovie}
                likeToMovie={likeToMovie}
                userActive={userActive}
                boxLikes={boxLikes}
                removeLikeToMovie={removeLikeToMovie}
              />
            ))}
          </div>
        </section>

        <section id="peliculas_recomendadas" className="main_section_info">
          <h1>Peliculas recomendadas</h1>
          <Carousel responsive={responsive} infinite={true} draggable={false}>
            {moviesFalse.map(
              (movie) =>
                movie.votes.positivos >= "90%" && (
                  <SectionOfCard
                    key={movie.id}
                    movie={movie}
                    setShowMovie={setShowMovie}
                    likeToMovie={likeToMovie}
                    userActive={userActive}
                    boxLikes={boxLikes}
                    removeLikeToMovie={removeLikeToMovie}
                  />
                )
            )}
          </Carousel>
        </section>
        <section className="main_section_info">
          <h1>Peliculas más recientes</h1>
          <Carousel responsive={responsive} infinite={true}>
            {moviesFalse.map(
              (movie) =>
                movie.year >= 2019 && (
                  <SectionOfCard
                    key={movie.id}
                    movie={movie}
                    setShowMovie={setShowMovie}
                    likeToMovie={likeToMovie}
                    userActive={userActive}
                    boxLikes={boxLikes}
                    removeLikeToMovie={removeLikeToMovie}
                  />
                )
            )}
          </Carousel>
        </section>
        <section className="main_section_info">
          <h1>Peliculas en estrenos</h1>
          <Carousel responsive={responsive} infinite={true}>
            {moviesFalse.map(
              (movie) =>
                movie.year > 2020 && (
                  <SectionOfCard
                    key={movie.id}
                    movie={movie}
                    setShowMovie={setShowMovie}
                    likeToMovie={likeToMovie}
                    userActive={userActive}
                    boxLikes={boxLikes}
                    removeLikeToMovie={removeLikeToMovie}
                  />
                )
            )}
          </Carousel>
        </section>

        <InformationScreen />
      </main>
      <FooterScreen />
      {showMovie && (
        <ModalScreen setShowMovie={setShowMovie} likeToMovie={likeToMovie} />
      )}
    </>
  );
};

export default MainScreen;
