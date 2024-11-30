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
  new ClearanceRequest(
    "clr-003",
    "Mark Smith",
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
  
];
export interface UserLibraryData {
  id: string; // Student ID
  studentName: string;
  borrowedBooks: string[]; // List of borrowed book titles
  overdueBooks: string[]; // List of overdue books
  fines: number; // Total fines due
}

export const mockUserLibraryData: UserLibraryData[] = [
  {
    id: "1",
    studentName: "John Doe",
    borrowedBooks: ["Introduction to Algorithms", "The Pragmatic Programmer"],
    overdueBooks: ["Clean Code"],
    fines: 20, // $20
  },
  {
    id: "2",
    studentName: "Mark Smith",
    borrowedBooks: ["Artificial Intelligence: A Modern Approach"],
    overdueBooks: [],
    fines: 0, // No fines
  },
];
