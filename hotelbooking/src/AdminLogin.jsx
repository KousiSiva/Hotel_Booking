import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import Header from "./Header";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = "login-page";
    return () => {
      document.body.className = "";
    };
  }, []);

  const handleAdminLogin = () => {
    if (email === "admin@example.com" && password === "admin123") {
      console.log("Admin logged in");
      localStorage.setItem("adminLoggedIn", "true"); 
      navigate("/admin");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <h2>Admin Login</h2>
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
        <button className="btn" onClick={handleAdminLogin}>
          Login
        </button>
      </div>
    </>
  );
};

export default AdminLogin;
