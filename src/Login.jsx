import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      if (response.data.success) {
        alert(response.data.message);
        navigate("/dashboard");
      } else {
        alert(response.data.message); // Wrong credentials
      }
    } catch (error) {
      alert("Error occurred while logging in");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-background">

      <div className="login-container">
        <div className="glass-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
            <p style={{ marginTop: "0.75rem", textAlign: "center" }}>
              Admin/Officer? <Link to="/forestofficers">Officer Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
