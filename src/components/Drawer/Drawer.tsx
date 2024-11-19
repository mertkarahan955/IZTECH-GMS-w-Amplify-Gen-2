import React from "react";
import styles from "./Drawer.module.css";


import Logo from "../../assets/iztech-logo.png";
import { logout } from "../../api/auth";

const Drawer: React.FC = () => {

  return (
    <div className={styles.drawer}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo"/>
        <h2>Graduation Management System </h2>
      </div>
      <nav className={styles.nav}>
        <a href="#">Dashboard</a>
        <a href="#">Graduation Requests</a>
        <a href="#">Schedule</a>
        <a href="#">Clearance</a>
        <a href="#">FAQ</a>
      </nav>
      <button className={styles.logoutButton} onClick={logout}>Log Out</button>
    </div>
  );
};

export default Drawer;
