import React, { useState } from "react";
import styles from "./ClearanceRequest.module.css";

const CreateClearanceRequest: React.FC = () => {
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    // Validate input
    if (!reason.trim() || !details.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    // Simulate API call
    console.log("Submitting clearance request:", { reason, details });
    setSuccess(true);
  };

  return (
    <div className={styles.container}>
      <h1>Create Clearance Request</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Reason Field */}
        <label htmlFor="reason">Reason for Clearance:</label>
        <input
          type="text"
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter reason for clearance"
          className={styles.input}
        />

        {/* Details Field */}
        <label htmlFor="details">Additional Details:</label>
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Provide additional details"
          className={styles.textarea}
        ></textarea>

        {/* Error Message */}
        {error && <p className={styles.error}>{error}</p>}

        {/* Success Message */}
        {success && <p className={styles.success}>Clearance request submitted successfully!</p>}

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          Submit Clearance Request
        </button>
      </form>
    </div>
  );
};

export default CreateClearanceRequest;
