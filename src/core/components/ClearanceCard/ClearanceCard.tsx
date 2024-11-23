import React from "react";
import styles from "./ClearanceCard.module.css";

interface ClearanceCardProps {
  title: string;
  date: string;
  time: string;
  status: string;
  approvals: { [key: string]: string };
  onSeeRequest: () => void;
}

const ClearanceCard: React.FC<ClearanceCardProps> = ({
  title,
  date,
  time,
  status,
  approvals,
  onSeeRequest,
}) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <div className={styles.approvals}>
        {Object.entries(approvals).map(([office, approval], index) => (
          <div key={index} className={styles.approvalRow}>
            <span className={styles.office}>{office}:</span>
            <span className={styles.approval}>{approval}</span>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.dateTime}>
          <span>{time}</span> | <span>{date}</span>
        </div>
        <div className={styles.status}>Status: {status}</div>
        <button className={styles.requestButton} onClick={onSeeRequest}>
          See Request
        </button>
      </div>
    </div>
  );
};

export default ClearanceCard;
