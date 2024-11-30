import { GraduationRequest, RequestStatus } from "../GraduationRequest/GraduationRequest";


export const mockGraduationRequests: GraduationRequest[] = [
  new GraduationRequest(
    "req-001",
    "John Doe",
    "Graduation Request Spring 2025",
    "Advisor",
    {advisor: "Advisor Letter: Declined for Graduation Request Spring 2025"},
    RequestStatus.Rejected

  ),
  new GraduationRequest(
    "req-002",
    "Jane Smith",
    "Graduation Request Fall 2024",
    "Secretary",
    { advisor: "Advisor Letter: Approved for Graduation Request Fall 2024" }
  ),
  new GraduationRequest(
    "req-003",
    "Alice Johnson",
    "Graduation Request Spring 2024",
    "Dean",
    {
      advisor: "Advisor Letter: Approved for Graduation Request Spring 2024",
      secretary: "Secretary Letter: Reviewed Graduation Request Spring 2024",
    }
  ),
  new GraduationRequest(
    "req-004",
    "Bob Brown",
    "Graduation Request Winter 2023",
    "Affairs",
    {
      advisor: "Advisor Letter: Approved for Graduation Request Winter 2023",
      secretary: "Secretary Letter: Reviewed Graduation Request Winter 2023",
      dean: "Dean Letter: Approved Graduation Request Winter 2023",
    }
  ),
  new GraduationRequest(
    "req-005",
    "Tom White",
    "Graduation Request Summer 2023",
    "Affairs",
    {
      advisor: "Advisor Letter: Approved for Graduation Request Summer 2023",
      secretary: "Secretary Letter: Reviewed Graduation Request Summer 2023",
      dean: "Dean Letter: Approved Graduation Request Summer 2023",
      affairs: "Student Affairs Letter: Approved Graduation Request Summer 2023",
    },
     RequestStatus.Accepted
  ),
];



