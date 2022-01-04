import React from "react";
import Carousel from "react-multi-carousel";
import { responsive } from "../../../helpers/caracteristcas";
import "react-multi-carousel/lib/styles.css";

import SectionOfCard from "./SectionOfCard";
import NavbarScreen from "../../ui";
import HeaderScreen from "../../Header";
import InformationScreen from "../Information";

import FooterScreen from "../../Footer";
import moviesFalse from "../../../movieFalse";

import "./main.css";

const MainScreen = () => {
  return (
    <>
      <NavbarScreen />
      <HeaderScreen />
      <main className="main_box">
        <section className="main_section_all_movie">
          <h1>Peliculas</h1>
          <div className="main_info_map">
            {moviesFalse.map((movie) => (
              <SectionOfCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        <section className="main_section_info">
          <h1>Peliculas recomendadas</h1>
          <Carousel responsive={responsive} infinite={true} draggable={false}>
            {moviesFalse.map(
              (movie) =>
                movie.votes.positivos >= "90%" && (
                  <SectionOfCard key={movie.id} movie={movie} />
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
                  <SectionOfCard key={movie.id} movie={movie} />
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
                  <SectionOfCard key={movie.id} movie={movie} />
                )
            )}
          </Carousel>
        </section>

        <InformationScreen />
      </main>
      <FooterScreen />
    </>
  );
};

export default MainScreen;
