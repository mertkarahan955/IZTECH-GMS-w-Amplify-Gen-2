
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.tsx";
import Home from "./components/Home/Home.tsx"; // Create a simple Home component
import { UserProvider } from "./contexts/UserContext.tsx";
export default function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}