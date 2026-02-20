import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DataManagement.css';

const DataManagement = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Back Button and Title */}
      <div className="top-bar">
        <button className="back-btn" onClick={() => navigate("/dashboard")}>←Dashboard</button>
        <h1 className="main-title">Forest Data Management & Monitoring</h1>
      </div>

      {/* Data Sources */}
      <div className="section section-green">
        <h2 className="section-title">📊 Data Sources</h2>
        <ul className="section-list">
          <li>Government Wildlife Census Reports</li>
          <li>Forest Department Official Databases</li>
          <li>IoT-based sensors and drones in forest zones</li>
          <li>Community reporting via mobile applications</li>
          <li>Manual field surveys conducted by forest officers</li>
          <li>Satellite monitoring and GIS mapping tools</li>
        </ul>
      </div>

      {/* Handling Missing Data */}
      <div className="section section-blue">
        <h2 className="section-title">🚫 Handling Missing Data</h2>
        <ul className="section-list">
          <li>Placeholder shown as “Not Available” where data is missing</li>
          <li>Rangers or Admins prompted to verify and upload missing entries</li>
          <li>Timestamp highlights last updated time for accuracy</li>
          <li>Alerts generated for key fields with missing or outdated data</li>
        </ul>
      </div>

      {/* Tracking and Updating */}
      <div className="section section-orange">
        <h2 className="section-title">🔁 Tracking and Updating</h2>
        <ul className="section-list">
          <li>Authorized users can submit regular updates with credentials</li>
          <li>Audit logs track changes with editor details</li>
          <li>Notifications sent for periodic data review</li>
          <li>Version history stored for each data point</li>
        </ul>
      </div>
      <div className='section-title'>
      <p className='title'>The data that we feed into this webpage are the data which are collected from the above given information.which will be changing as we get the details from the forest management. </p>
      </div>
    </>
  );
};

export default DataManagement;
