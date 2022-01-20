import AppRouter from "./routers/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext";
import { MovieContextRented } from "./Contexts/MovieRented";
import { MovieOpinionsContext } from "./Contexts/MovieOpinions";

import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <UserContext>
        <MovieContextRented>
          <MovieOpinionsContext>
            <AppRouter />
          </MovieOpinionsContext>
        </MovieContextRented>
      </UserContext>
    </BrowserRouter>
  );
}

export default App;
