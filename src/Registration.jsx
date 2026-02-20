import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation
import "./Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate(); // Initialize navigation hook

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:5000/register", formData);
      alert(response.data.message); // Show success message
      navigate("/login"); // Navigate to login page after successful registration
    } catch (error) {
      alert("Registration failed: " + error.response.data.message); // Show error message
    }
  };

  return (
    <div className="registration-container">
      <div className="glass-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Register</button>
          <p style={{ marginBottom: "1rem" }}>
          Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
