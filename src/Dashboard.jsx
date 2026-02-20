import React from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "./logo.png";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="navbar-logo">
          <img src={logoImg} alt="Logo" className="logo-image" />
        </div>
        <h1>Forest Management System</h1>
      </header>

      <div className="dashboard-cards">
        <div className="card" onClick={() => navigate("/animals")}>
          <h2>Animals</h2>
        </div>
        <div className="card" onClick={() => navigate("/resources")}>
          <h2>Resources</h2>
        </div>
        <div className="card" onClick={() => navigate("/waterbodies")}>
          <h2>Water Bodies</h2>
        </div>
        <div className="card" onClick={() => navigate("/forests")}>
          <h2>Forests</h2>
        </div>
        <div className="card" onClick={() => navigate("/minerals")}>
          <h2>Minerals</h2>
        </div>
        <div className="card" onClick={() => navigate("/tourism")}>
          <h2>Tourism</h2>
        </div>
        <div className="card" onClick={() => navigate("/community")}>
          <h2>Community & Workers</h2>
        </div>
        <div className="card" onClick={() => navigate("/datamanagement")}>
          <h2>Data Management</h2>
        </div>
        <div className="card" onClick={() => navigate("/illegalactivityreport")}>
          <h2>Illegal Activity Report</h2>
        </div>
        <div className="card" onClick={() => navigate("/forestofficers")}>
          <h2>Forest Officers</h2>
        </div>
      </div>

      <section className="dashboard-info">
        <p>
          Forest management is crucial for preserving biodiversity, preventing deforestation, and maintaining ecological balance. It plays an essential role in educating the public on sustainable practices and conservation.
        </p>

        <p><strong>How You Can Participate:</strong></p>
        <ul>
          <li>Join community forest watch groups or awareness programs.</li>
          <li>Volunteer for tree plantation drives and wildlife surveys.</li>
          <li>Educate others about the importance of forest conservation.</li>
          <li>Support local and national policies that protect forests.</li>
        </ul>

        <p><strong>People Involved in Forest Management:</strong></p>
        <ul>
          <li>Forest Department Officers and Rangers</li>
          <li>Wildlife Biologists and Ecologists</li>
          <li>Environmental NGOs and Activists</li>
          <li>Local Communities and Volunteers</li>
          <li>Policy Makers and Urban Planners</li>
        </ul>

        <p>
          Through effective forest planning and public involvement, we can ensure a greener and healthier future for coming generations. Together, we can protect these valuable ecosystems.
        </p>
      </section>
    </div>
  );
};

export default Dashboard;
