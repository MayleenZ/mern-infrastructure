import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LogInForm/LogInForm";
import styles from "./AuthPage.module.css"
import Logo from "../../components/Logo/Logo";
function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  // sign up
  return (
    <div className ={styles.AuthPage}>
      <Logo />
      <h3 onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign up" : "Login"}
      </h3>


      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </div>
  );
}

export default AuthPage;
