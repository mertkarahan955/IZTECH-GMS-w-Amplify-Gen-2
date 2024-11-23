import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Drawer.module.css";

import Logo from "../../../../public/assets/iztech-logo.png";
import { DI } from "../../injection/DependencyInjection";

interface DrawerProps {
  navLinks: { label: string; href: string }[];
}

const Drawer: React.FC<DrawerProps> = ({ navLinks}) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
  try {
    await localStorage.clear();
    await DI.signOutUseCase.logout();
    navigate("/login");
  } catch (error) {
    
  }
  };

  return (
    <div className={styles.drawer}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
        <h2>Graduation Management System</h2>
      </div>

      {/* Navigation Links */}
      <nav className={styles.nav}>
        {navLinks.map((link, index) => (
          <NavLink
          key={index}
          to={link.href}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
        >
          {link.label}
        </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default Drawer;
