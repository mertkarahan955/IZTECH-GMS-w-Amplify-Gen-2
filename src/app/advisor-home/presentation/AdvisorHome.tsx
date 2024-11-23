
import Drawer from "../../../core/components/Drawer/Drawer";
import ReviewCard from "../../../core/components/ReviewCard/ReviewCard";
import styles from "./AdvisorHome.module.css";

const AdvisorHome: React.FC = () => {
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
              onApprove={() => alert("Request Approved")}
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


const AdvisorDrawer = () => (
  <Drawer

    navLinks={[
      { label: "Dashboard", href: "/advisor-dashboard" },
      { label: "Review Requests", href: "/review-requests" },
      { label: "Reports", href: "/reports" },
    ]}
  />
);
