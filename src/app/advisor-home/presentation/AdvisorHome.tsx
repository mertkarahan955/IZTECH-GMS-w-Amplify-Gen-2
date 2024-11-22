
import { useNavigate } from "react-router-dom";
import ReviewCard from "../../../core/components/ReviewCard/ReviewCard";
import styles from "./AdvisorHome.module.css";

const AdvisorHome: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.main}>
          <h1>Advisor Dashboard</h1>
        <div className={styles.ongoing}>
            <h2>Graduation Requests to Review</h2>
            <ReviewCard
              title="Student: John Doe"
              date="19 Nov 2024"
              time="14:31"
              status="Ongoing"
              details="Spring'25 Graduation Request"
              onApprove={()=> navigate("/write-letter")}
              onDecline={() => alert("Request Declined")}
            />
            <ReviewCard
              title="Student: Jane Smith"
              date="24 Jan 2024"
              time="16:45"
              status="Ongi"
              details="Spring'2024 Graduation Request"
              onApprove={() => alert("Request Approved")}
              onDecline={() => alert("Request Declined")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorHome;


