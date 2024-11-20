import React, { useState, FormEvent } from "react";
import styles from "./Login.module.css";
import Logo from "../../../../../public/assets/iztech-logo.png";
import EdevletIcon from "../../../../../public/assets/edevlet-icon.png";

import { InputField } from "../../../../core/components/InputField";
import { PasswordField } from "../../../../core/components/PasswordField";
import { DI } from "../../../../core/injection/DependencyInjection";
import { useUser } from "../../../../core/contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<string>("Student"); // Default role: Student
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { setUser } = useUser();
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const signInOutput = await DI.loginUseCase.login(email, password, role);

      console.log("Login Output:", signInOutput);
      console.log("Selected Role:", role);

      const user = await DI.getUserUseCase.getUser();
      setUser({ ...user, profile: role }); // Assign role dynamically
      navigate("/home", { replace: true });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during sign-in.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.loginCard}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <h2 className={styles.title}>Login</h2>

        {/* TabBar for Role Selection */}
        <div className={styles.tabBar}>
          <button
            className={`${styles.tab} ${role === "Student" ? styles.activeTab : ""}`}
            onClick={() => setRole("Student")}
          >
            Student
          </button>
          <button
            className={`${styles.tab} ${role === "University Staff" ? styles.activeTab : ""}`}
            onClick={() => setRole("University Staff")}
          >
            University Staff
          </button>
        </div>

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
          {/* Email Field */}
          <InputField
            label="Your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Field */}
          <PasswordField
            label="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className={styles.error}>{error}</p>}

          {/* Submit Button */}
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
