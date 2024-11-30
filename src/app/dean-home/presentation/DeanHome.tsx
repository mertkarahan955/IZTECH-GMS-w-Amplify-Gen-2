import React from "react";
import { useNavigate } from "react-router-dom";
import { mockGraduationRequests } from "../../../core/data/mock/MockData";
import { GraduationRequest, updateRequestHandler } from "../../../core/data/GraduationRequest/GraduationRequest";
import RequestReview from "../../../core/components/RequestReview";
import NotificationList from "../../../core/components/NotificationList/NotificationList";
import { mockNotifications } from "../../../core/data/mock/MockNotification";
import styles from "./DeanHome.module.css";



const DeanHome: React.FC = () => {
  const navigate = useNavigate();

  // Filter requests assigned to the Dean
  const deanRequests = mockGraduationRequests.filter(
    (req) => req.currentHandler === "Dean"
  );

  const filteredNotifs = mockNotifications.filter((notif) => notif.receiverType === "Dean");

  const handleApprove = (request: GraduationRequest) => {
    navigate("/write-letter", {
      state: {
        requestId: request.id,
        title: request.title,
        details: request.studentName,
        role: "Dean",
        nextHandler: "Student Affairs", // Pass the next handler for the request
      },
    });
  };

  const handleReject = (requestId: string) => {
    updateRequestHandler(requestId, deanRequests, "Dean", "Rejected by Dean");
    alert(`Request #${requestId} has been rejected.`);
  };
  const handleNotificationClick = (id: string) => {
    alert(`Notification clicked: ${id}`);
  };

  return (
    <div className={styles.container}>
    <div>
      <h1>Dean Dashboard</h1>
      <RequestReview
        userRole="Dean"
        requests={deanRequests}
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

export default DeanHome;
