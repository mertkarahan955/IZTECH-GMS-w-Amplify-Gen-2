import React from "react";
import styles from "./RequestCard.module.css";

interface RequestCardProps {
  title: string;
  date: string;
  time: string;
  status: "Ongoing" | "Declined";
  onClick: () => void;
}

const RequestCard: React.FC<RequestCardProps> = ({ title, date, time, status, onClick }) => {
  return (
    <div className={`${styles.card} ${status === "Ongoing" ? styles.ongoing : styles.declined}`}>
      <h3>{title}</h3>
      <p>
        <strong>Time:</strong> {time}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p className={styles.status}>
        <strong>Status:</strong> {status}
      </p>
      <button onClick={onClick}>See Request</button>
    </div>
  );
};

export default RequestCard;
