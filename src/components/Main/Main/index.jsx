import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import { responsive } from "../../../helpers/caracteristcas";

import moviesFalse from "../../../movieFalse";
import SectionOfCard from "./SectionOfCard";
import NavbarScreen from "../../ui";
import HeaderScreen from "../../Header";
import InformationScreen from "../Information";
import ModalScreen from "../../Modals";

import FooterScreen from "../../Footer";

import "./main.css";

const MainScreen = () => {
  const [showMovie, setShowMovie] = useState(false);

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
                  />
                )
            )}
          </Carousel>
        </section>

        <InformationScreen />
      </main>
      <FooterScreen />
      {showMovie && <ModalScreen setShowMovie={setShowMovie} />}
    </>
  );
};

export default MainScreen;
