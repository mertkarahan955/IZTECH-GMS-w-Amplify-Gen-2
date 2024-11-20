import React from "react";
import styles from "./Header.module.css";



import notificationIcon from  "../../../../public/assets/iztech-logo.png"
import { useUser } from "../../contexts/UserContext";

const Header: React.FC = () => {

  const { user } = useUser();

  const currentDate = new Date().toLocaleString();
  

  return (
    <div className={styles.header}>
      <h1>Hello, { user ? user.profile : ""} { user ? user.name : "Guest"  }</h1>
      <div className={styles.info}>
        <p>{currentDate}</p>
        <div className={styles.icons}>
          <button>
            <img src={notificationIcon} alt="Notifications" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
