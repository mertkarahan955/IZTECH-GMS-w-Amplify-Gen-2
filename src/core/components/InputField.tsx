import React from "react";

import styles from "../../app/auth/presentation/Login/Login.module.css";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange }) => (
  <div className={styles.inputFieldContainer}>
    <label className={styles.label}>{label}</label>
    <input
      type={type}
      className={styles.inputField}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);
