import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export const UserActive = createContext();

export const UserContext = ({ children }) => {
  const [userActive, setUserActive] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  try {
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { displayName, email, emailVerified, photoURL, uid } = user;
          setUserActive({ displayName, email, emailVerified, photoURL, uid });
          setAuthenticated(true);
          setLoading(false);
        }
      });
    }, []);
  } catch (error) {
    console.log(error);
  }

  const userGoogle = {
    userActive,
    loading,
    authenticated,
  };

  return (
    <UserActive.Provider value={userGoogle}>{children}</UserActive.Provider>
  );
};
