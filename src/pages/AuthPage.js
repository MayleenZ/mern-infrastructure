import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LogInForm";
import { useState } from "react";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  // sign up
  return (
    <div>
      <h1>Auth page</h1>

      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign up" : "Login"}
      </button>


      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </div>
  );
}

export default AuthPage;
