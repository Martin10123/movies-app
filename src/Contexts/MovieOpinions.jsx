import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../Firebase/firebaseConfig";

export const OpinionsContext = createContext();

export const MovieOpinionsContext = ({ children }) => {
  const [boxOpinions, setBoxOpinions] = useState([]);

  useEffect(() => {
    const unSuscribed = onSnapshot(collection(db, "opinions"), (doc) => {
      const dataMovie = doc.docs.map((data) => {
        return {
          id: data.id,
          ...data.data(),
        };
      });
      setBoxOpinions(dataMovie);
    });

    return () => {
      unSuscribed();
    };
  }, []);

  const returns = {
    boxOpinions,
  };

  return (
    <OpinionsContext.Provider value={returns}>
      {children}
    </OpinionsContext.Provider>
  );
};
