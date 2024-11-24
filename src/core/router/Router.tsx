import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import Login from "../../app/auth/presentation/Login/Login";
import Home from "../../app/home/presentation/Home/Home";
import AdvisorHome from "../../app/advisor-home/presentation/AdvisorHome";
import CreateGraduationRequest from "../../app/home/presentation/GraduationRequest/GraduationRequest";
import Layout from "../components/Layout/Layout";
import Clearance from "../../app/clearance/presentation/Clearance";
import WriteLetter from "../../app/advisor-home/presentation/WriteLetter/WriteLetter";
import ValidateDiploma from "../components/ValidateDiploma/ValidateDiploma";

// PrivateRoute Component for protecting routes and role-based navigation
const PrivateRoute: React.FC<{ children: JSX.Element; role?: string }> = ({ children, role }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/" replace />; // Redirect to login if not authenticated
  }

  // Check role-based access
  if (role && user.profile !== role) {
    console.log("Role Mismatch:", user.profile, role);
    return <Navigate to="/" replace />; // Redirect if role mismatch
  }

  return children;
};

// AppRoutes Component
const AppRoutes: React.FC = () => {
  const { loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />
      <Route path= "validate-diploma" element={<ValidateDiploma/>}/>

      {/* Private Routes */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        {/* Child Routes inside the Layout */}
        <Route
          path="home"
          element={
            <PrivateRoute role="Student">
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="create-graduation-request"
          element={
            <PrivateRoute role="Student">
              <CreateGraduationRequest />
            </PrivateRoute>
          }
        />
        <Route
          path="advisor-home"
          element={
            <PrivateRoute role="Staff">
              <AdvisorHome />
            </PrivateRoute>
          }
        />
        <Route path ="write-letter" element = {
          <PrivateRoute role="Staff">
            <WriteLetter/>
          </PrivateRoute>
        }/>
        <Route path= "clearance" element= {
          <PrivateRoute role="Student">
            <Clearance/>
          </PrivateRoute>
        }/>
      </Route>

      {/* Catch-All Redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
