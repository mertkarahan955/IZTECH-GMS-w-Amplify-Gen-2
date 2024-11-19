import React from "react";
import styles from "./Header.module.css";
import { useUser } from "../../contexts/UserContext";

import notificationIcon from "../../assets/notification-icon.png"

const Header: React.FC = () => {
  const { user } = useUser(); // Access user data from the context
  const currentDate = new Date().toLocaleString();

  return (
    <div className={styles.header}>
      <h1>Hello, {user?.profile} {user?.name || "Guest"}</h1>
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
