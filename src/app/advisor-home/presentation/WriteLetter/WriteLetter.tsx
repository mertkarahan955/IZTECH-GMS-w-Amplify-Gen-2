import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./WriteLetter.module.css";

const WriteLetter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, details } = location.state || {}; // Get data from navigation
  
  const [letter, setLetter] = useState("");
  const [signature, setSignature] = useState("");

  const handleSubmit = () => {
    // Add logic to submit the letter
    alert("Letter submitted: " + "\nLetter:" + letter + "\nSignature: " + signature);
    
    navigate("/advisor-home"); // Navigate back to the home page after submission
  };

  return (
    <div className={styles.container}>
      <h2>Graduation Request</h2>
      <p>
        <strong>Student Info:</strong> {details || "300201050"}
      </p>
      <p>
        <strong>Graduation Title:</strong> {title || "2025 Graduation Request"}
      </p>
      <p className={styles.link}>Student Transcript</p>

      <div className={styles.letterSection}>
        <h3>Graduation Application Letter</h3>
        <textarea
          placeholder="Start typing Application Letter to Department Secretary"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          maxLength={5000}
        />
        <p>{letter.length}/5000</p>

        <input
          type="text"
          placeholder="Add E-Signature"
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
        />
      </div>

      <div className={styles.actions}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Back
        </button>
        <button className={styles.submitButton} onClick={handleSubmit}>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default WriteLetter;
