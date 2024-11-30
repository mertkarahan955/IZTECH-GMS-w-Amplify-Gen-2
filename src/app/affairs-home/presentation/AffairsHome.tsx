import React from "react";
import RequestReview from "../../../core/components/RequestReview";
import { useNavigate } from "react-router-dom";

import styles from "./AffairsHome.module.css";

import { GraduationRequest, updateRequestHandler } from "../../../core/data/GraduationRequest/GraduationRequest";
import { mockGraduationRequests } from "../../../core/data/mock/MockData";
import NotificationList from "../../../core/components/NotificationList/NotificationList";
import { mockNotifications } from "../../../core/data/mock/MockNotification";
const AffairsHome: React.FC = () => {
  const navigate = useNavigate();

  // Filter requests assigned to the Dean
  const affairsRequest = mockGraduationRequests.filter(
    (req) => req.currentHandler === "Affairs"
  );

  const handleApprove = (request: GraduationRequest) => {
    navigate("/write-letter", {
      state: {
        requestId: request.id,
        title: request.title,
        details: request.studentName,
        role: "Affairs",
        nextHandler: "Affairs", // Pass the next handler for the request
      },
    });
  };

  const handleReject = (requestId: string) => {
    updateRequestHandler(requestId, affairsRequest, "Affairs", "Rejected by Affairs");
    alert(`Request #${requestId} has been rejected.`);
  };

  const filteredNotifs = mockNotifications.filter((notif) => notif.receiverType === "Affairs");

  return (
    <div className={styles.container}>
    <div>
     
      <RequestReview
        userRole="Affairs"
        requests={affairsRequest}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
    <div>
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
    </div>
  );
};

export default AffairsHome;

