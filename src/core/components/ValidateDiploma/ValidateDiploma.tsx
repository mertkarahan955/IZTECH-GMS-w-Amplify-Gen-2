import React, { useState } from "react";
import styles from "./ValidateDiploma.module.css";

const ValidateDiploma: React.FC = () => {
  const [diplomaID, setDiplomaID] = useState("");
  const [studentName, setStudentName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleValidate = async () => {
    setLoading(true);
    setResult(null);

    // Simulate diploma validation API call
    setTimeout(() => {
      if (diplomaID === "12345" && studentName === "300201050") {
        setResult("The diploma is valid.");
      } else {
        setResult("Invalid diploma details. Please try again.");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Validate Your Diploma</h1>
      <p className={styles.description}>
        Enter your diploma details below to validate its authenticity.
      </p>

      <div className={styles.form}>
        <label className={styles.label} htmlFor="diplomaID">
          Diploma ID
        </label>
        <input
          id="diplomaID"
          type="text"
          value={diplomaID}
          onChange={(e) => setDiplomaID(e.target.value)}
          placeholder="Enter your diploma ID"
          className={styles.input}
        />

        <label className={styles.label} htmlFor="studentName">
          Student Number
        </label>
        <input
          id="studentName"
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Enter the student's number"
          className={styles.input}
        />

        <button
          onClick={handleValidate}
          className={`${styles.button} ${loading ? styles.disabled : ""}`}
          disabled={loading || !diplomaID || !studentName}
        >
          {loading ? "Validating..." : "Validate Diploma"}
        </button>
      </div>

      {result && <p className={styles.result}>{result}</p>}
    </div>
  );
};

export default ValidateDiploma;
