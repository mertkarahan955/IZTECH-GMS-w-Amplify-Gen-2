import React from "react";
import RequestReview from "../../../core/components/RequestReview";
import { useNavigate } from "react-router-dom";
import { mockGraduationRequests } from "../../../core/data/mock/MockData";
import { GraduationRequest, updateRequestHandler } from "../../../core/data/GraduationRequest/GraduationRequest";
import styles from "./SecretaryHome.module.css";
import { mockNotifications } from "../../../core/data/mock/MockNotification";
import NotificationList from "../../../core/components/NotificationList/NotificationList";


const SecretaryHome: React.FC = () => {
  const navigate = useNavigate();

  // Filter requests assigned to the Dean
  const secretaryRequests = mockGraduationRequests.filter(
    (req) => req.currentHandler === "Secretary"
  );

  const handleApprove = (request: GraduationRequest) => {
    navigate("/write-letter", {
      state: {
        requestId: request.id,
        title: request.title,
        details: request.studentName,
        role: "Secretary",
        nextHandler: "Dean", // Pass the next handler for the request
      },
    });
  };

  const filteredNotifs = mockNotifications.filter((notif) => notif.receiverType === "Secretary");
  const handleReject = (requestId: string) => {
    updateRequestHandler(requestId, secretaryRequests, "Secretary", "Rejected by Secretary");
    alert(`Request #${requestId} has been rejected.`);
  };

  return (
    <div className = {styles.container} >

    <div>
      <h1>Secretary Dashboard</h1>
      <RequestReview
        userRole="Secretary"
        requests={secretaryRequests}
        onApprove={handleApprove}
        onReject={handleReject}
      />
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

export default SecretaryHome;
