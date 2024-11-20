import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import Login from "../../app/auth/presentation/Login/Login";
import Home from "../../app/home/presentation/Home/Home";

// PrivateRoute Component for protecting routes
const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useUser();

  return user ? children : <Navigate to="/" replace />;
};

// AppRoutes Component
const AppRoutes: React.FC = () => {
  const { loading } = useUser();

  if (loading) {
    // Show a loading spinner or placeholder while user state is initializing
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Private Route */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      {/* Catch-All Redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
