import moviesFalse from "../movieFalse";

export const getMovieByID = (name) => {
  return moviesFalse.find((Movie) => Movie.name === name);
};
