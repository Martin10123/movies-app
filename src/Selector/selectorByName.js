import moviesFalse from "../movieFalse";

export const getMovieByName = (name, category) => {
  let newWord = name.charAt(0).toUpperCase();

  const nameMovie = newWord + name.slice(1);

  if (category === "tipos") {
    return moviesFalse.filter((Movie) => Movie.type.includes(nameMovie));
  } else if (category === "votos") {
    return moviesFalse.filter((Movie) =>
      name === "mayor a 90"
        ? Movie.votes.positivos > "90%"
        : Movie.votes.positivos < "90%"
    );
  } else if (category === "año") {
    return moviesFalse.filter((Movie) =>
      name === "las más reciente" ? Movie.year > 2020 : Movie.year < 2021
    );
  } else if (category === "precio") {
    return moviesFalse.filter((Movie) =>
      name === "menores a 5.00"
        ? Movie.price <= "$5.000"
        : Movie.price >= "$5.000"
    );
  } else if (category === "renta") {
    return moviesFalse.filter((Movie) =>
      name === "rentados" ? Movie.rented === true : Movie.rented === false
    );
  }
};
