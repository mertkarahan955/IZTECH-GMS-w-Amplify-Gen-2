import React from "react";
import styles from "./RequestReview.module.css";
import { GraduationRequest } from "../data/GraduationRequest/GraduationRequest";



interface RequestReviewProps {
  userRole: "Advisor" | "Secretary" | "Dean" | "Affairs";
  requests: GraduationRequest[]; // Use the GraduationRequest class
  onApprove: (request: GraduationRequest) => void;
  onReject: (requestId: string) => void;
}

const RequestReview: React.FC<RequestReviewProps> = ({
  userRole,
  requests,
  onApprove,
  onReject,
}) => {
  return (
    <div className={styles.container}>
      <h2>{userRole} - Pending Requests</h2>
      {requests.length === 0 ? (
        <p>No requests available.</p>
      ) : (
        <div className={styles.requestsList}>
          {requests.map((request) => (
            <div key={request.id} className={styles.requestCard}>
              <h3>{request.title}</h3>
              <p>
                <strong>Student:</strong> {request.studentName}
              </p>
              <p>
                <strong>Current Handler:</strong> {request.currentHandler}
              </p>
              <p>
                <strong>Status:</strong> {request.status}
              </p>
              {Object.keys(request.letters).map((role) => (
                <p key={role}>
                  <strong>{role.charAt(0).toUpperCase() + role.slice(1)}'s Letter:</strong>{" "}
                  {request.letters[role as keyof typeof request.letters]}
                </p>
              ))}
              <div className={styles.actions}>
                <button
                  className={styles.approveButton}
                  onClick={() => onApprove(request)}
                >
                  Review
                </button>
                <button
                  className={styles.rejectButton}
                  onClick={() => onReject(request.id)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestReview;
