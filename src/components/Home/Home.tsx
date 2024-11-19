
import styles from "./Home.module.css";
import Drawer from "../../components/Drawer/Drawer";
import Header from "../../components/Header/Header";
import RequestCard from "../../components/RequestCard/RequestCard";

import { fetchUserAttributes } from 'aws-amplify/auth';
import { User } from "../../interfaces/User";
import { useState } from "react";


const Home: React.FC = () => {


  return (
    <div className={styles.container}>
      {/* Left Drawer */}
      <Drawer />

      {/* Main Content */}
      <div className={styles.content}>
        <Header />
        <div className={styles.main}>
          <button className={styles.createButton}>Create New Graduation Request</button>
          <div className={styles.requests}>
            <h2>My Graduation Requests</h2>
            <RequestCard
              title="Spring'25 Graduation Process"
              date="19 Nov 2024"
              time="14:31"
              status="Ongoing"
              onClick={() => alert("Request Details")}
            />
            <RequestCard
              title="Spring'2024 Graduation Process"
              date="24 Jan 2024"
              time="16:45"
              status="Declined"
              onClick={() => alert("Request Details")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
