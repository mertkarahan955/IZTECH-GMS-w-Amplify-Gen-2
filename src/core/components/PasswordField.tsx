import React, { useState } from "react";
import styles from  "../../app/auth/presentation/Login/Login.module.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PasswordFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({ label, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className={styles.inputFieldContainer}>
      <label className={styles.label}>{label}</label>
      <div className={styles.passwordInput}>
        <input
          type={showPassword ? "text" : "password"}
          className={styles.inputField}
          value={value}
          onChange={onChange}
          required
        />
        <button
          type="button"
          className={styles.togglePassword}
          onClick={togglePasswordVisibility}
          aria-label="Toggle Password Visibility"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </button>
      </div>
    </div>
  );
};
