import moviesFalse from "../movieFalse";

export const getMovieByID = (name) => {
  return moviesFalse.find((Movie) => Movie.name === name);
};

// const Movie = useMemo(() => getMovieByID(MovieeId), [MovieeId]);
