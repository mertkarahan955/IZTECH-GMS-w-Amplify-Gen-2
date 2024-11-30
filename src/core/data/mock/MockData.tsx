import { GraduationRequest, RequestStatus } from "../GraduationRequest/GraduationRequest";


export const mockGraduationRequests: GraduationRequest[] = [
  new GraduationRequest(
    "req-005",
    "Tom White",
    "Graduation Request Summer 2023",
    "Affairs",
    { dean: " Approved Graduation Request Summer 2023",
      advisor: "Approved for Graduation Request Summer 2023",
      secretary: "Reviewed Graduation Request Summer 2023",
      
    },
     RequestStatus.Rejected
  ),
  new GraduationRequest(
    "req-005",
    "Tom White",
    "Graduation Request Summer 2023",
    "Advisor",
    {student: "I've created a graduation request for Summer 2023"},
     RequestStatus.Pending
  ),
  new GraduationRequest(
    "req-006",
    "Tom White",
    "Graduation Request Summer 2023",
    "Secretary",
    {advisor: "Approved for Graduation Request Summer 2023"},
     RequestStatus.Pending
  ),
  new GraduationRequest(
    "req-007",
    "Tom White",
    "Graduation Request Summer 2023",
    "Dean",
    {secretary: "Approved for Graduation Request Summer 2023", 
     advisor : "Approved for Graduation Request Summer 2023"},
     RequestStatus.Pending
  ),
];



