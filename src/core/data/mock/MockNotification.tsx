// Role Type
export type Role =  "Student"  | "Advisor" | "Secretary" | "Dean" | "Affairs";

// Notification Types
export enum NotificationType {
  GraduationRequest = "Graduation Request",
  Approval = "Approval",
  Rejection = "Rejection",
  General = "General",
}

// Notification Interface
export interface LocalNotification {
  id: string;
  title: string;
  description?: string;
  timestamp: string; // ISO format date-time string
  type: NotificationType;
  read: boolean; // Indicates if the notification is read
  receiverType: Role; // Specifies the role of the recipient
}

// Mock Notifications
export const mockNotifications: LocalNotification[] = [
  {
    id: "1",
    title: "New Graduation Request Submitted",
    description: "John Doe submitted a new graduation request.",
    timestamp: new Date().toISOString(),
    type: NotificationType.GraduationRequest,
    read: false,
    receiverType: "Advisor", // Notification for Advisor
  },
  {
    id: "2",
    title: "Graduation Request Approved",
    description: "A graduation request has sent by Advisor",
    timestamp: new Date().toISOString(),
    type: NotificationType.Approval,
    read: true,
    receiverType: "Secretary", // Notification for Secretary
  },
  {
    id: "3",
    title: "Graduation Request Received",
    description: "Secretary has sent a graduation request to you.",
    timestamp: new Date().toISOString(),
    type: NotificationType.GraduationRequest,
    read: false,
    receiverType: "Dean", // Notification for Dean
  },
  {
    id: "4",
    title: "Final Approval",
    description: "The graduation request has been finalized for approval by Student Affairs.",
    timestamp: new Date().toISOString(),
    type: NotificationType.Approval,
    read: false,
    receiverType: "Affairs", // Notification for Student Affairs
  },
  {
    id: "5",
    title: "Graduation Declined",
    description: "Your graduation request has been declined by Dean.",
    timestamp: new Date().toISOString(),
    type: NotificationType.Rejection,
    read: false,
    receiverType: "Student", // Notification for Student Affairs
  },
];
