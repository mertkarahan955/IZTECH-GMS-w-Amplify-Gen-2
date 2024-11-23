import React from "react";
import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
  title: string;
  date: string;
  time: string;
  status: string;
  details: string;
  onApprove: () => void;
  onDecline: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  date,
  time,
  status,
  details,
  onApprove,
  onDecline,
}) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{details}</p>
      <p>
        {date} - {time}
      </p>
      <p className={styles.Ongoing}>Status: {status}</p>
      <div className={styles.actions}>
        <button className={styles.approveButton} onClick={onApprove}>
          Approve
        </button>
        <button className={styles.declineButton} onClick={onDecline}>
          Decline
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
