import React, { useState } from 'react';
import './OfficerLogin.css';
import { useNavigate } from 'react-router-dom';


const OfficerLogin = () => {
  const [username, setUsername] = useState('');
  const [officerId, setOfficerId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
        const res = await fetch('http://localhost:5000/api/forestofficers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, officer_id: officerId, password }),
          });
          
  
      const data = await res.json();
  
      if (data.success) {
        navigate('/officer-dashboard');
      } else {
        alert(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Error connecting to server');
    }
  };
  

  return (
    <div className="officer-login-container">
      <div className="login-box">
       
        <h2>Higher Officer Login</h2>
        <div className="login-form">
          <label>Username</label>
          <input
            type="text"
            value={username}
            placeholder="Enter officer name"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Officer ID</label>
          <input
            type="text"
            value={officerId}
            placeholder="Enter officer ID"
            onChange={(e) => setOfficerId(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default OfficerLogin;
