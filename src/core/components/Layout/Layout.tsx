import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
import { useUser } from "../../contexts/UserContext";




const Layout: React.FC = () => {
  const { user } = useUser(); 

  const navLinks =
    user?.profile === "Student"
      ? [
          { label: "Home", href: "/home" },
          { label: "Clearance", href: "/clearance" },
        ]
      : user?.profile === "Affairs"
      ? [
          { label: "See Graduation List", href: "/advisor-home" },
          { label: "See Beraat Belgeleri", href: "/review-requests" },
          { label: "See Graduation Certificates", href: "/review-requests" }
        ]
      : []; 

  return (
    <div className={styles.layoutContainer}>
      {/* Drawer */}
      <Drawer navLinks={navLinks}/>

      {/* Main Content */}
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>
          <Outlet /> {/* Renders the active route's content */}
        </main>
      </div>
    </div>
  );
};

export default Layout;


