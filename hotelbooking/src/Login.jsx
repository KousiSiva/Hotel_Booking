import React, { useState, useEffect } from "react";
import { signInWithGoogle } from "./Firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Header from "./Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = "login-page";
    return () => {
      document.body.className = "";
    };
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/rooms");
    } catch (error) {
      console.error("Google login failed", error);
    }
  };

  const handleEmailLogin = () => {
    if (email === "kousi@gmail.com" && password === "Kousima123") {
      
      navigate("/rooms");
    } else if (email === "admin@gmail.com" && password === "admin123") {
     
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn" onClick={handleEmailLogin}>
          Login
        </button>
        <div className="divider">or</div>
        <button className="btn google" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>
      </div>
    </>
  );
};

export default Login;
