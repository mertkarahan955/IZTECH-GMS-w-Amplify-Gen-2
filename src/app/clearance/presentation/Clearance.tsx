import React, { useState } from "react";

import styles from "./Clearance.module.css";
import ClearanceCard from "../../../core/components/ClearanceCard/ClearanceCard";
import { mockClearanceRequests } from "../../../core/data/mock/MockClearance";
import { ClearanceRequest, ClearanceStatus, Department } from "../../../core/data/ClearanceRequest/ClearanceRequest";
import { DI } from "../../../core/injection/DependencyInjection";


const Clearance: React.FC = () => {
  const [clearanceRequests] = useState(mockClearanceRequests); // State for clearance requests
  const createGraduationRequest = DI.createClearanceRequest;
  const handleClearanceRequest = () => {
    const req = new ClearanceRequest(
      `req-${Date.now()}`,
      "Elizabeth King",
      "Clearance for Graduation 2023",
      {
        [Department.SKS]: ClearanceStatus.Rejected, // Rejected by SKS
        [Department.Library]: ClearanceStatus.Pending,
        [Department.Affairs]: ClearanceStatus.Pending,
        [Department.AlumniOffice]: ClearanceStatus.Pending,
        [Department.Rector]: ClearanceStatus.Pending,
      },
      ClearanceStatus.Rejected
    ); 
    createGraduationRequest.createClearanceRequest(req);
    

  }
  return (
    <div className={styles.container}>
      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.main}>
        
        {/* Button for Clearance Request */}
        <button
            className={`${styles.createButton} ${styles.clearanceButton}`} // Optional: Use a separate style
            onClick={handleClearanceRequest}>
            Create New Clearance Request
          </button>
          <h1>Clearance Process(s)</h1>

          {/* Dynamically Render Clearance Requests */}
          {clearanceRequests.map((request) => (
            <ClearanceCard
              key={request.id}
              title={request.title}
              date={new Date(request.createdAt).toLocaleDateString()} // Format the date
              time={new Date(request.createdAt).toLocaleTimeString()} // Format the time
              status={request.status}
              approvals={request.departmentStatuses}
              onSeeRequest={() => alert(`View Request Details for: ${request.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clearance;
