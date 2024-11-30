import React from "react";
import { mockStudents } from "./GraduationList";
import styles from "./BeraatBelgesi.module.css";

interface Student {
  studentId: string;
  name: string;
  department: string;
  major: string;
  gpa: number;
  graduationType: "Honor" | "Higher Honor" | "Normal";
  beraatBelgesi?: boolean;
}

interface BeraatBelgesiListProps {
  groupedStudents: Record<string, Student[]>; // Grouped students by department
}

const BeraatBelgesiList: React.FC<BeraatBelgesiListProps> = ({ groupedStudents }) => {
  const winners = Object.entries(groupedStudents).map(([department, students]) => {
    // Sort students by GPA and select the top student
    const topStudent = [...students].sort((a, b) => b.gpa - a.gpa)[0];
    return { department, student: topStudent };
  });

  return (
    <div className={styles.container}>
      {winners.length === 0 ? (
        <p>No students eligible for Beraat Belgesi.</p>
      ) : (
        winners.map(({ department, student }) => (
          <div key={department} className={styles.winnerCard}>
            <h2>Department: {department}</h2>
            <p>
              <strong>Name:</strong> {student.name}
            </p>
            <p>
              <strong>Major:</strong> {student.major}
            </p>
            <p>
              <strong>GPA:</strong> {student.gpa.toFixed(2)}
            </p>
            <p>
              <strong>Graduation Type:</strong> {student.graduationType}
            </p>
            <p style={{ color: "green", fontWeight: "bold" }}>🎓 Beraat Belgesi Winner</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BeraatBelgesiList;
export  const groupedStudents = mockStudents.reduce<Record<string, Student[]>>((acc, student) => {
  acc[student.department] = acc[student.department] || [];
  acc[student.department].push(student);
  return acc;
}, {});