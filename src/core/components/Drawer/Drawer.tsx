import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Drawer.module.css";

import Logo from "../../../../public/assets/iztech-logo.png";
import { DI } from "../../injection/DependencyInjection";

const Drawer: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await DI.signOutUseCase.logout(); // Perform the logout logic
      navigate("/", { replace: true }); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className={styles.drawer}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
        <h2>Graduation Management System</h2>
      </div>
      <nav className={styles.nav}>
        <a href="#">Dashboard</a>
        <a href="#">Graduation Requests</a>
        <a href="#">Schedule</a>
        <a href="#">Clearance</a>
        <a href="#">FAQ</a>
      </nav>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Drawer;
