import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./WriteLetter.module.css";
import { updateRequestHandler } from "../../../../core/data/GraduationRequest/GraduationRequest";


const WriteLetter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { requestId, title, details, role, nextHandler } = location.state;

  const [letter, setLetter] = useState("");
  const [signature, setSignature] = useState("");

  const handleSubmit = () => {
    // Simulate letter submission and update request
    updateRequestHandler(requestId, nextHandler, role, letter);

    alert(`Letter submitted for ${details} by ${role}.`);

    // Navigate back to the home page
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <h2>Graduation Request - Write Letter</h2>
      <p>
        <strong>Student:</strong> {details}
      </p>
      <p>
        <strong>Request Title:</strong> {title}
      </p>

      <textarea
        placeholder={`Write a letter as ${role}`}
        value={letter}
        onChange={(e) => setLetter(e.target.value)}
        maxLength={5000}
      />
      <input
        type="text"
        placeholder="Add E-Signature"
        value={signature}
        onChange={(e) => setSignature(e.target.value)}
      />
      <div className ={styles.actions}>
        <button className={styles.backButton} onClick={() => navigate(-1)}> Cancel</button>
      
      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit Letter
      </button></div>
      
    </div>
  );
};

export default WriteLetter;
