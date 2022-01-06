import { createContext } from "react";

export const CategoryContext = createContext();

export const CategoryContextMovie = () => {
  try {
  } catch (error) {
    console.log(error);
  }

  return <CategoryContext.Provider value=""></CategoryContext.Provider>;
};
