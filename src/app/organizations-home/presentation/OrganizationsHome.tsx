import React from "react";
import styles from "./OrganizationsHome.module.css";

import {ClearanceStatus, Department } from "../../../core/data/ClearanceRequest/ClearanceRequest";
import { mockClearanceRequests } from "../../../core/data/mock/MockClearance";

const OrganizationsHome: React.FC = () => {
  const handleApprove = (requestId: string, department: Department) => {
    const request = mockClearanceRequests.find((req) => req.id === requestId);
    if (request) {
      request.departmentStatuses[department] = ClearanceStatus.Approved;
      alert(`Approved by ${department} for request: ${request.title}`);
    }
  };

  const handleReject = (requestId: string, department: Department) => {
    const request = mockClearanceRequests.find((req) => req.id === requestId);
    if (request) {
      request.departmentStatuses[department] = ClearanceStatus.Rejected;
      alert(`Rejected by ${department} for request: ${request.title}`);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Organization Dashboard</h1>
      {mockClearanceRequests.map((request) => (
        <div key={request.id} className={styles.requestCard}>
          <h2>{request.title}</h2>
          <p>
            <strong>Student:</strong> {request.studentName}
          </p>
          <p>
            <strong>Status:</strong> {request.status}
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(Department).map((dept) => (
                <tr key={dept}>
                  <td>{dept}</td>
                  <td>{request.departmentStatuses[dept as Department]}</td>
                  <td>
                    <button
                      className={styles.approveButton}
                      onClick={() => handleApprove(request.id, dept as Department)}
                      disabled={request.departmentStatuses[dept as Department] === ClearanceStatus.Approved}
                    >
                      Approve
                    </button>
                    <button
                      className={styles.rejectButton}
                      onClick={() => handleReject(request.id, dept as Department)}
                      disabled={request.departmentStatuses[dept as Department] === ClearanceStatus.Rejected}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default OrganizationsHome;
