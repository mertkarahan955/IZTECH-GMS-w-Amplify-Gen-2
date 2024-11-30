import { useNavigate } from "react-router-dom";
import { mockGraduationRequests } from "../../../core/data/mock/MockData";
import { GraduationRequest, updateRequestHandler } from "../../../core/data/GraduationRequest/GraduationRequest";
import RequestReview from "../../../core/components/RequestReview";
import NotificationList from "../../../core/components/NotificationList/NotificationList"; // Import NotificationList
import styles from "./AdvisorHome.module.css"; // Create or update a CSS file for styling
import { mockNotifications } from "../../../core/data/mock/MockNotification";

const AdvisorHome: React.FC = () => {
  const navigate = useNavigate();

  // Filter requests assigned to the Advisor
  const advisorRequests = mockGraduationRequests.filter(
    (req) => req.currentHandler === "Advisor"
  );

  const filteredNotifs = mockNotifications.filter((notif) => notif.receiverType === "Advisor");

  const handleApprove = (request: GraduationRequest) => {
    navigate("/write-letter", {
      state: {
        requestId: request.id,
        title: request.title,
        details: request.studentName,
        role: "Advisor",
        nextHandler: "Secretary", // Pass the next handler for the request
      },
    });
  };

  const handleReject = (requestId: string) => {
    updateRequestHandler(requestId, advisorRequests, "Advisor", "Rejected by Advisor");
    alert(`Request #${requestId} has been rejected.`);
  };

  const handleNotificationClick = (id: string) => {
    alert(`Notification clicked: ${id}`);
  };

  return (
    <div className={styles.container}>
      {/* Main Content */}
      <div className={styles.content}>
        <h1>Advisor Dashboard</h1>
        <RequestReview
          userRole="Advisor"
          requests={advisorRequests}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>

      {/* Notifications Sidebar */}
      <div className={styles.sidebar}>
        <NotificationList
          notifications={filteredNotifs}
          onNotificationClick={handleNotificationClick}
        />
      </div>
    </div>
  );
};

export default AdvisorHome;
