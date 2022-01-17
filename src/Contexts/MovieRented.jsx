import { createContext, useState } from "react";

export const MovieSelectToRent = createContext();
export const MovieContextRented = ({ children }) => {
  const [boxRented, setBoxRented] = useState(
    JSON.parse(localStorage.getItem("movieRented") || "[]")
  );

  const start = new Date().valueOf();
  const end = start + 864000000;

  const returnValues = { boxRented, setBoxRented, start, end };

  return (
    <MovieSelectToRent.Provider value={returnValues}>
      {children}
    </MovieSelectToRent.Provider>
  );
};
