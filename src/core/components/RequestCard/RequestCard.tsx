import React from "react";
import styles from "./RequestCard.module.css";
import { RequestStatus } from "../../data/GraduationRequest/GraduationRequest";

interface RequestCardProps {
  title: string;
  date: string;
  time: string;
  status: RequestStatus;
  onClick: () => void;
}

const RequestCard: React.FC<RequestCardProps> = ({ title, date, time, status, onClick }) => {
  return (
    <div className={`${styles.card} ${status == RequestStatus.Pending ? styles.ongoing : status == RequestStatus.Accepted ? styles.accepted : styles.declined}`}>
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
