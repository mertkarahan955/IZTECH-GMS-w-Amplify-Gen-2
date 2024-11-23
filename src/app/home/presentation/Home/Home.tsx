
import { useNavigate } from "react-router-dom";
import RequestCard from "../../../../core/components/RequestCard/RequestCard";
import styles from "./Home.module.css";


const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.main}>
          <button
            className={styles.createButton}
            onClick={() => navigate("/create-graduation-request")}
          >
            Create New Graduation Request
          </button>
          <div className={styles.requests}>
            <h2>My Graduation Requests</h2>
            <RequestCard
              title="Spring'25 Graduation Process"
              date="19 Nov 2024"
              time="14:31"
              status="Ongoing"
              onClick={() => alert("Viewing Request Details: Spring'25 Graduation Process")}
            />
            <RequestCard
              title="Spring'2024 Graduation Process"
              date="24 Jan 2024"
              time="16:45"
              status="Declined"
              onClick={() => alert("Viewing Request Details: Spring'2024 Graduation Process")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
