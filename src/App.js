import AppRouter from "./routers/AppRouter";
import { UserContext } from "./Contexts/UserContext";

import "./app.css";

function App() {
  return (
    <UserContext>
      <AppRouter />
    </UserContext>
  );
}

export default App;
