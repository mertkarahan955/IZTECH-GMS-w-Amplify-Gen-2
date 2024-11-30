import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import styles from "./OrganizationsHome.module.css";

import { ClearanceRequest, ClearanceStatus} from "../../../core/data/ClearanceRequest/ClearanceRequest";
import { mockClearanceRequests } from "../../../core/data/mock/MockClearance";

const OrganizationsHome: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Filter requests for the Library department with status Pending
  const libraryPendingRequests = mockClearanceRequests.filter(
    (req) => req.status === ClearanceStatus.Pending
  );

  const handleReview = (request: ClearanceRequest) => {
    // Navigate to the Review Clearance page with request details
    navigate("/review-clearance", {
      state: { request },
    });
  };

  return (
    <div className={styles.container}>
      <h1>Library Dashboard</h1>
      {libraryPendingRequests.length === 0 ? (
        <p>No clearance requests pending for the Library.</p>
      ) : (
        libraryPendingRequests.map((request) => (
          <div key={request.id} className={styles.requestCard}>
            <h2>{request.title}</h2>
            <p>
              <strong>Student:</strong> {request.studentName}
            </p>
            <p>
              <strong>Status:</strong> {request.status}
            </p>
            <div className={styles.actions}>
              <button
                className={styles.reviewButton}
                onClick={() => handleReview(request)}
              >
                Review
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrganizationsHome;
