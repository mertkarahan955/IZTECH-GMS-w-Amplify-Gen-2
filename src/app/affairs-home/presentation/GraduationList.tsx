import React from "react";
import styles from "./GraduationList.module.css";

// Graduation Type Enum
export enum GraduationType {
  Honor = "Honor",
  HigherHonor = "Higher Honor",
  Normal = "Normal",
}

// Student Interface
export interface Student {
  studentId: string;
  name: string;
  department: string;
  major: string;
  gpa: number;
  graduationType: GraduationType;
  beraatBelgesi?: boolean;
}
export const mockStudents: Student[] = [
  // Computer Science Department
  {
    studentId: "cs001",
    name: "Alice Johnson",
    department: "Computer Science",
    major: "Software Engineering",
    gpa: 3.95,
    graduationType:GraduationType.HigherHonor,
  },
  {
    studentId: "cs002",
    name: "Bob Brown",
    department: "Computer Science",
    major: "Artificial Intelligence",
    gpa: 3.89,
    graduationType: GraduationType.HigherHonor,
  },
  {
    studentId: "cs003",
    name: "Charlie Green",
    department: "Computer Science",
    major: "Cybersecurity",
    gpa: 3.85,
    graduationType: GraduationType.Honor,
  },
  {
    studentId: "cs004",
    name: "David White",
    department: "Computer Science",
    major: "Software Engineering",
    gpa: 3.70,
    graduationType: GraduationType.Normal,
  },

  // Electrical Engineering Department
  {
    studentId: "ee001",
    name: "Emily Davis",
    department: "Electrical Engineering",
    major: "Control Systems",
    gpa: 3.92,
    graduationType: GraduationType.HigherHonor,
  },
  {
    studentId: "ee002",
    name: "Frank Wright",
    department: "Electrical Engineering",
    major: "Power Systems",
    gpa: 3.85,
    graduationType: GraduationType.HigherHonor,
  },
  {
    studentId: "ee003",
    name: "Grace Hall",
    department: "Electrical Engineering",
    major: "Microelectronics",
    gpa: 3.82,
    graduationType: GraduationType.Honor,
  },
  {
    studentId: "ee004",
    name: "Hannah King",
    department: "Electrical Engineering",
    major: "Signal Processing",
    gpa: 3.60,
    graduationType:GraduationType.Normal,
  },
];
// Mock Data
const mockGraduationList: Student[] = [
  {
    studentId: "20231001",
    name: "John Doe",
    department: "Computer Science",
    major: "Artificial Intelligence",
    gpa: 3.9,
    graduationType: GraduationType.HigherHonor,
  },
  {
    studentId: "20231002",
    name: "Jane Smith",
    department: "Mechanical Engineering",
    major: "Robotics",
    gpa: 3.5,
    graduationType: GraduationType.Honor,
  },
  {
    studentId: "20231003",
    name: "Alice Johnson",
    department: "Business Administration",
    major: "Finance",
    gpa: 3.7,
    graduationType: GraduationType.Honor,
  },
  {
    studentId: "20231004",
    name: "Bob Brown",
    department: "Electrical Engineering",
    major: "Electronics",
    gpa: 3.3,
    graduationType: GraduationType.Normal,
  },
  {
    studentId: "20231005",
    name: "Tom White",
    department: "Computer Science",
    major: "Data Science",
    gpa: 3.8,
    graduationType: GraduationType.HigherHonor,
  },
];

const GraduationList: React.FC = () => {
  // Sort the students by GPA in descending order
  const sortedGraduationList = [...mockGraduationList].sort(
    (a, b) => b.gpa - a.gpa
  );

  return (
    <div className={styles.container}>
      <h1>Graduation List</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Student ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Major</th>
            <th>GPA</th>
            <th>Graduation Type</th>
          </tr>
        </thead>
        <tbody>
          {sortedGraduationList.map((student, index) => (
            <tr key={student.studentId}>
              <td>{index + 1}</td>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.major}</td>
              <td>{student.gpa.toFixed(2)}</td>
              <td>{student.graduationType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GraduationList;
