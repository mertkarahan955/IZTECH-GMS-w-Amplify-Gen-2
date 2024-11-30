import React from "react";
import styles from "./NotificationList.module.css";
import { LocalNotification } from "../../data/mock/MockNotification";


interface NotificationListProps {
  notifications: LocalNotification[];
  onNotificationClick: (id: string) => void; // Action when a notification is clicked
}

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  onNotificationClick,
}) => {
  return (
    <div className={styles.container}>
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications available.</p>
      ) : (
        <ul className={styles.list}>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`${styles.notification} ${
                notification.read ? styles.read : styles.unread
              }`}
              onClick={() => onNotificationClick(notification.id)}
            >
              <div className={styles.header}>
                <span className={styles.title}>{notification.title}</span>
                <span className={styles.timestamp}>
                  {new Date(notification.timestamp).toLocaleString()}
                </span>
              </div>
              {notification.description && (
                <p className={styles.description}>
                  {notification.description}
                </p>
              )}
              <span className={`${styles.type} ${styles[notification.type.toLowerCase()]}`}>
                {notification.type}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationList;
