import React from "react";

import styles from "./Clearance.module.css";
import ClearanceCard from "../../../core/components/ClearanceCard/ClearanceCard";

const Clearance: React.FC = () => {
  return (
    <div className={styles.container}>

      {/* Main Content */}
      <div className={styles.content}>
  
        <div className={styles.main}>
          <h1>Clearance Process(s)</h1>
          <ClearanceCard
            title="Spring'25 Clearance Process"
            date="19 Nov 2024"
            time="14:31"
            status="Ongoing"
            approvals={{
              SKS: "Approved",
              Library: "Approved",
              "Alumni Office": "Pending",
              "Registrar Office": "Pending",
              "Dean Office": "Pending",
              "IT Office": "Approved",
            }}
            onSeeRequest={() => alert("View Request Details")}
          />
        </div>
      </div>
    </div>
  );
};

export default Clearance;
