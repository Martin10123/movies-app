import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8Eae0wOpJvnC11a3lmKA2CtvUj8MijDM",
  authDomain: "posters-movies.firebaseapp.com",
  projectId: "posters-movies",
  storageBucket: "posters-movies.appspot.com",
  messagingSenderId: "88321570660",
  appId: "1:88321570660:web:ba009e42afe5f8bcdb6c71",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { db, provider, auth };
