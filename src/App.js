import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import { UserContext } from "./Contexts/UserContext";

import "react-multi-carousel/lib/styles.css";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <UserContext>
        <AppRouter />
      </UserContext>
    </BrowserRouter>
  );
}

export default App;
