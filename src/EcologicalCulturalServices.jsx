import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./EcologicalCulturalServices.css";

const EcologicalCulturalServices = () => {
  const [servicesData, setServicesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Fetch ecological and cultural services data
  useEffect(() => {
    axios.get("http://localhost:5000/resources/ecological-cultural-services")
      .then((response) => {
        setServicesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ecological and cultural services data:", error);
      });
  }, []);

  // Filtered data based on search term
  const filteredData = servicesData.filter((item) =>
    item.service_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.service_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="services-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/animals">Animals</a></li>
          <li><a href="/waterbodies">Water Bodies</a></li>
        </ul>
      </nav>

      {/* Header */}
      <div className="header">
        <h1>Ecological and Cultural Services</h1>
        <input
          type="text"
          placeholder="Search by service name or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Back Button */}
      <div className="back-button">
        <button onClick={() => navigate("/resources")}>Back to Resources</button>
      </div>

      {/* Scrollable Content */}
      <div className="main-content">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Service Name</th>
                <th>Description</th>
                <th>Service Type</th>
                <th>Metric Tons CO₂/year</th>
                <th>Forest ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.service_name}</td>
                  <td>{item.description}</td>
                  <td>{item.service_type}</td>
                  <td>{item.quantity}</td>
                  <td>{item.forest_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EcologicalCulturalServices;
