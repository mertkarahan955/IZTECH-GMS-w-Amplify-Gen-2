import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ReviewClearance.module.css";
import { mockUserLibraryData } from "../../../core/data/mock/MockClearance";
import { ClearanceStatus, Department } from "../../../core/data/ClearanceRequest/ClearanceRequest";

const ReviewClearance: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { request } = location.state; // Extract the request details from the state

  // Fetch the library data for the student
  const libraryData = mockUserLibraryData.find(
    (data) => data.studentName === request.studentName
  );

  const handleApprove = () => {
    request.departmentStatuses[Department.Library] = ClearanceStatus.Approved;
    alert(`Library approved clearance for: ${request.studentName}`);
    navigate(-1); // Navigate back to the previous page
  };

  const handleDeny = () => {
    request.departmentStatuses[Department.Library] = ClearanceStatus.Rejected;
    alert(`Library denied clearance for: ${request.studentName}`);
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className={styles.container}>
      <h1>Review Clearance</h1>
      <p>
        <strong>Request ID:</strong> {request.id}
      </p>
      <p>
        <strong>Student:</strong> {request.studentName}
      </p>
      <p>
        <strong>Title:</strong> {request.title}
      </p>
      <p>
        <strong>Library Data:</strong>
      </p>
      {libraryData ? (
        <div className={styles.libraryData}>
          <p>
            <strong>Borrowed Books:</strong>{" "}
            {libraryData.borrowedBooks.length > 0
              ? libraryData.borrowedBooks.join(", ")
              : "No borrowed books."}
          </p>
          <p>
            <strong>Overdue Books:</strong>{" "}
            {libraryData.overdueBooks.length > 0
              ? libraryData.overdueBooks.join(", ")
              : "No overdue books."}
          </p>
          <p>
            <strong>Total Fines:</strong> ${libraryData.fines.toFixed(2)}
          </p>
        </div>
      ) : (
        <p>No library data found for this student.</p>
      )}

      {/* Approve/Deny Buttons */}
      <div className={styles.actions}>
        <button className={styles.approveButton} onClick={handleApprove}>
          Approve
        </button>
        <button className={styles.denyButton} onClick={handleDeny}>
          Deny
        </button>
      </div>
    </div>
  );
};

export default ReviewClearance;
