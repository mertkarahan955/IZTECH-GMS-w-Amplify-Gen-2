import { ClearanceRequest, ClearanceStatus, Department } from "../ClearanceRequest/ClearanceRequest";

// Mock Data
export const mockClearanceRequests: ClearanceRequest[] = [
  
  new ClearanceRequest(
    "clr-001",
    "John Doe",
    "Clearance for Graduation 2025",
    {
      [Department.SKS]: ClearanceStatus.Approved,
      [Department.Library]: ClearanceStatus.Pending,
      [Department.Affairs]: ClearanceStatus.Pending,
      [Department.AlumniOffice]: ClearanceStatus.Pending,
      [Department.Rector]: ClearanceStatus.Pending,
    },
    ClearanceStatus.Pending
  ),
  
  new ClearanceRequest(
    "clr-002",
    "Mike Tarter",
    "Clearance for Graduation 2025",
    {
      [Department.SKS]: ClearanceStatus.Approved,
      [Department.Library]: ClearanceStatus.Pending,
      [Department.Affairs]: ClearanceStatus.Rejected,
      [Department.AlumniOffice]: ClearanceStatus.Pending,
      [Department.Rector]: ClearanceStatus.Pending,
    },
    ClearanceStatus.Rejected
  ),
  
];
