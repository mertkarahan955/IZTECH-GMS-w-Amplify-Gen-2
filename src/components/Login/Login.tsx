import React, { useState, FormEvent } from "react";
import styles from "./Login.module.css";
import Logo from "../../assets/iztech-logo.png";
import EdevletIcon from "../../assets/edevlet-icon.png";
import { InputField } from "../InputField";
import { PasswordField } from "../PasswordField";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { login } from "../../api/auth";
import { useUser } from "../../contexts/UserContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // React Router navigation hook
  const {fetchAndSetUser} = useUser();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent page refresh
    setError(null); // Reset errors
    setLoading(true); // Show loading state

    try {
      await login(email, password);
      await fetchAndSetUser();
      navigate("/home");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during sign-in.");
    } finally {
      setLoading(false); // Hide loading state
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.loginCard}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <h2 className={styles.title}>Login</h2>

        {/* E-Devlet Button */}
        <button className={styles.edevletButton}>
          <img src={EdevletIcon} alt="E-Devlet" />
          Log in with E-Devlet
        </button>

        <div className={styles.separator}>
          <span>OR</span>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <InputField
            label="Your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordField
            label="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className={styles.error}>{error}</p>}

          <button
            type="submit"
            className={`${styles.loginButton} ${
              email && password ? styles.activeButton : ""
            }`}
            disabled={!email || !password || loading}
          >
            {loading ? "Signing in..." : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
