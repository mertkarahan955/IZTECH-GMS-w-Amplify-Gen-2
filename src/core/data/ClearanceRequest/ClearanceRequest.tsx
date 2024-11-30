export enum ClearanceStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
}

export enum Department {
  SKS = "SKS",
  Library = "Library",
  Affairs = "Affairs",
  AlumniOffice = "AlumniOffice",
  Rector = "Rector",
}

export class ClearanceRequest {
  id: string;
  studentName: string;
  title: string;
  departmentStatuses: Partial<Record<Department, ClearanceStatus>>;
  createdAt: string;
  updatedAt: string;
  status: ClearanceStatus;

  constructor(
    id: string,
    studentName: string,
    title: string,
    departmentStatuses: Partial<Record<Department, ClearanceStatus>> = {},
    status: ClearanceStatus = ClearanceStatus.Pending,
    createdAt: string = new Date().toISOString(),
    updatedAt: string = new Date().toISOString()
  ) {
    this.id = id;
    this.studentName = studentName;
    this.title = title;
    this.departmentStatuses = departmentStatuses;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  // Method to update a department's approval status
  updateDepartmentStatus(department: Department, status: ClearanceStatus): void {
    this.departmentStatuses[department] = status;
    this.updatedAt = new Date().toISOString();
    this.updateOverallStatus();
  }

  // Private method to determine overall clearance status
  private updateOverallStatus(): void {
    const statuses = Object.values(this.departmentStatuses);

    if (statuses.includes(ClearanceStatus.Rejected)) {
      this.status = ClearanceStatus.Rejected;
    } else if (Object.keys(this.departmentStatuses).length === Object.keys(Department).length &&
               statuses.every((s) => s === ClearanceStatus.Approved)) {
      this.status = ClearanceStatus.Approved;
    } else {
      this.status = ClearanceStatus.Pending;
    }
  }
}
