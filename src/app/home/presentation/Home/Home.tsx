import { useNavigate } from "react-router-dom";
import RequestCard from "../../../../core/components/RequestCard/RequestCard";
import NotificationList from "../../../../core/components/NotificationList/NotificationList"; // Import NotificationList
import styles from "./Home.module.css";
import { DI } from "../../../../core/injection/DependencyInjection";
import { GraduationRequest, RequestStatus } from "../../../../core/data/GraduationRequest/GraduationRequest";
import { mockGraduationRequests } from "../../../../core/data/mock/MockData";
import { mockNotifications } from "../../../../core/data/mock/MockNotification";


const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateGraduationRequest = () => {
    const newRequest = new GraduationRequest(
      "req-006", // Unique ID
      "New Student", // Student Name
      "Graduation Request Spring 2025", // Title
      "Advisor", // Current Handler
      {}, // Letters
      RequestStatus.Pending
    );

    DI.createGraduationRequest.createGraduationRequest(newRequest);
    console.log("Graduation Request Created:", newRequest);
  };

  const filteredNotifs = mockNotifications.filter((notif) => notif.receiverType === "Student");

  return (
    <div className={styles.container}>
      {/* Left Side: Main Content */}
      <div className={styles.content}>
        <div className={styles.main}>
          {/* Button for Graduation Request */}
          <button
            className={styles.createButton}
            onClick={handleCreateGraduationRequest}
          >
            Create New Graduation Request
          </button>

          {/* Button for Clearance Request */}
          <button
            className={`${styles.createButton} ${styles.clearanceButton}`} // Optional: Use a separate style
            onClick={() => navigate("/create-clearance-request")}
          >
            Create New Clearance Request
          </button>

          <div className={styles.requests}>
            <h2>My Graduation Requests</h2>

            {/* Dynamically Render Graduation Requests */}
            {mockGraduationRequests.map((request) => (
              <RequestCard
                key={request.id}
                title={request.title}
                date={new Date().toLocaleDateString()} // Use a formatted date
                time={new Date().toLocaleTimeString()} // Use a formatted time
                status={request.status}
                onClick={() =>
                  alert(`Viewing Request Details: ${request.title}`)
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Notifications */}
      <div className={styles.sidebar}>
        <NotificationList
          notifications={filteredNotifs}
          onNotificationClick={(id) =>
            alert(`Notification clicked: ${id}`)
          }
        />
      </div>
    </div>
  );
};

export default Home;
