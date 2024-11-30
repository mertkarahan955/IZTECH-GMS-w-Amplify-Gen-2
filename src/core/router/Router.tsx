import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import Login from "../../app/auth/presentation/Login/Login";
import Home from "../../app/home/presentation/Home/Home";
import AdvisorHome from "../../app/advisor-home/presentation/AdvisorHome";
import Layout from "../components/Layout/Layout";
import Clearance from "../../app/clearance/presentation/Clearance";
import WriteLetter from "../../app/advisor-home/presentation/WriteLetter/WriteLetter";
import ValidateDiploma from "../components/ValidateDiploma/ValidateDiploma";
import SecretaryHome from "../../app/secretary-home/presentation/SecretaryHome";
import DeanHome from "../../app/dean-home/presentation/DeanHome";
import AffairsHome from "../../app/affairs-home/presentation/AffairsHome";
import OrganizationsHome from "../../app/organizations-home/presentation/OrganizationsHome";
import ReviewClearance from "../../app/organizations-home/presentation/ReviewClearance";
import GraduationList from "../../app/affairs-home/presentation/GraduationList";
import BeraatBelgesiList, {groupedStudents} from "../../app/affairs-home/presentation/BeraatBelgesi";

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
        <Route path= "organizations-home" element = {
        <PrivateRoute>
          <OrganizationsHome/>
        </PrivateRoute>
      }/>
        
        <Route path= "review-clearance" element = {
        <PrivateRoute>
          <ReviewClearance/>
        </PrivateRoute>
      }/>

        <Route path= "graduation-list" element = {
        <PrivateRoute>
          <GraduationList/>
        </PrivateRoute>
      }/>
      <Route path= "beraat-belgesi" element = {
        <PrivateRoute>
          <BeraatBelgesiList groupedStudents={groupedStudents}/>
        </PrivateRoute>
      }/>
        <Route
          path="home"
          element={
            <PrivateRoute role="Student">
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="advisor-home"
          element={
            <PrivateRoute role="Advisor">
              <AdvisorHome />
            </PrivateRoute>
          }
        />
        <Route
          path="secretary-home"
          element={
            <PrivateRoute role="Secretary">
              <SecretaryHome />
            </PrivateRoute>
          }
        />
        <Route
          path="dean-home"
          element={
            <PrivateRoute role="Dean">
              <DeanHome />
            </PrivateRoute>
          }
        />
        <Route
          path="affairs-home"
          element={
            <PrivateRoute role="Affairs">
              <AffairsHome />
            </PrivateRoute>
          }
        />
        <Route path ="write-letter" element = {
          <PrivateRoute>
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
