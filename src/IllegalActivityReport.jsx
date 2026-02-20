// src/pages/IllegalActivityReport.jsx
import React, { useState } from 'react';
import './IllegalActivityReport.css';

const IllegalActivityReport = () => {
  const [formData, setFormData] = useState({
    reporter_name: '',
    contact: '',
    location: '',
    activity_type: '',
    description: '',
    photo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, photo: files[0] }); // Handle the photo file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    // Append each field from formData to the FormData object
    Object.entries(formData).forEach(([key, val]) => {
      if (val) data.append(key, val);  // Only append fields with values
    });

    try {
      const res = await fetch('http://localhost:5000/report', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      alert(result.message || 'Report submitted!');
    } catch (error) {
      alert('Error submitting report.');
      console.error(error); // optional: for debugging
    }
  }; // ✅ Closing brace for the handleSubmit function

  return (
    <div className="report-page">
      <nav className="navbar">
        Illegal Activity Reporting System
      </nav>

      <div className="report-container">
        <h2>Report Suspicious Activity</h2>
        <p>
          Forest conservation relies on the vigilance of people like you. If you witness illegal logging,
          poaching, or any other suspicious activity, please report it here. Your report will be kept confidential and
          reviewed by forest authorities.
        </p>

        <form onSubmit={handleSubmit} className="report-form">
          <input 
            type="text" 
            name="reporter_name" 
            placeholder="Your Name" 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="contact" 
            placeholder="Contact Info (Phone or Email)" 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="location" 
            placeholder="Location of Activity" 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="activity_type" 
            placeholder="Type of Activity (e.g., Poaching)" 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="description" 
            placeholder="Describe the incident..." 
            rows="4" 
            onChange={handleChange} 
            required 
          ></textarea>
          
          {/* File input for image upload */}
          <input 
            type="file" 
            name="photo" 
            accept="image/*" 
            onChange={handleChange} 
          />
          
          <button type="submit">Submit Report</button>
        </form>
      </div>
    </div>
  );
};

export default IllegalActivityReport;
