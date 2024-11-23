import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GraduationRequest.module.css";

const CreateGraduationRequest: React.FC = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title.trim()) {
      // Add logic to save the graduation request, e.g., API call
      console.log("Graduation Request Created:", title);
      alert("Graduation Request Created Successfully");
      navigate("/home"); // Navigate back to home
    } else {
      alert("Title is required");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Create Graduation Request</h1>
      <div className={styles.form}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter request title"
            className={styles.input}
          />
        </label>
        <button onClick={handleSubmit} className={styles.submitButton}>
          Submit Request
        </button>
        <button onClick={() => navigate("/home")} className={styles.cancelButton}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CreateGraduationRequest;
