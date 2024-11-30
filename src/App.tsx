
import { BrowserRouter as Router } from "react-router-dom";

import { UserProvider } from "./core/contexts/UserContext";
import AppRoutes from "./core/router/Router";


export default function App() {
  return (
    <UserProvider>
      <Router>
        <AppRoutes/>
      </Router>
    </UserProvider>
  );
}
