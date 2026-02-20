import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Rivers.css";

const Rivers = () => {
  const navigate = useNavigate();
  const [riversData, setRiversData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/waterbodies/rivers")
      .then((response) => {
        setRiversData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rivers data:", error);
      });
  }, []);

  const filteredData = riversData.filter((item) =>
    item.river_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.discharge.toString().includes(searchTerm)
  );

  return (
    <div className="rivers-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/animals">Animals</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/forests">Forests</a></li>
        </ul>
      </nav>

      {/* Header */}
      <div className="header">
        <h1>River Records</h1>
        <input
          type="text"
          placeholder="Search by river name or discharge..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Back button */}
      <div className="back-button">
        <button onClick={() => navigate("/waterbodies")}>Back to Water Bodies</button>
      </div>

      {/* Scrollable content */}
      <div className="main-content">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>River Name</th>
                <th>Discharge (m³/s)</th>
                <th>Forest ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.river_name}</td>
                  <td>{item.discharge}</td>
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

export default Rivers;
