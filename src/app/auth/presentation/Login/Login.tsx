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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {setUser} = useUser();
  const navigate = useNavigate();

  

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      
      const signInOutput= await DI.loginUseCase.login(email, password);
   console.log(signInOutput);

     const user = await DI.getUserUseCase.getUser();
      setUser(user);
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
