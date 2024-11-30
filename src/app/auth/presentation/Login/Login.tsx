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
      // Call the login use case with email, password, and role
      const signInOutput = await DI.loginUseCase.login(email, password,role);

      console.log("Login Output:", signInOutput);
      console.log("Selected Role:", role);

      // Fetch user details and set in UserContext
      const user = await DI.getUserUseCase.getUser();

      setUser({ ...user}); // Add role to user object

      // Navigate based on role
      if (user.profile === "Student") {
        navigate("/home", { replace: true }); // Navigate to student home
      } else if (role === "Staff") {
        switch (user.profile) {
          case "Advisor":
            navigate("/advisor-home", { replace: true });
            break;
          case "Secretary":
            navigate("/secretary-home", { replace: true });
            break;
          case "Dean":
            navigate("/dean-home", { replace: true });
            break;
          case "Affairs":
            navigate("/affairs-home", { replace: true });
            break;
        
          default:
            console.log("Invalid role:", user.profile);
            navigate("/", { replace: true });
            break;
        }
      }
      else if(role === "Organizations"){
       
          navigate("/organizations-home", { replace: true });
        
      }
    } catch (err: any) {
      console.error("Login Error:", err);
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
            className={`${styles.tab} ${
              role === "Student" ? styles.activeTab : ""
            }`}
            onClick={() => setRole("Student")}
          >
            Student
          </button>
          <button
            className={`${styles.tab} ${
              role === "Staff" ? styles.activeTab : ""
            }`}
            onClick={() => setRole("Staff")}
          >
            University Staff
          </button>
          <button
            className={`${styles.tab} ${
              role === "Organizations" ? styles.activeTab : ""
            }`}
            onClick={() => setRole("Organizations")}
          >
            Organizations
          </button>
        </div>

        {/* E-Devlet Button */}
        <button onClick={() => DI.signOutUseCase.logout()} className={styles.edevletButton}>
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
{/* Check Diploma Button */}
<div className={styles.checkDiplomaContainer}>
  <button
    className={`${styles.textButton}`}
    onClick={() => navigate('/validate-diploma')}
  >
    Check Validated Diploma
  </button>
</div>
      </div>
    </div>
  );
};

export default Login;
