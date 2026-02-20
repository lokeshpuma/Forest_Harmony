import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Lakes.css";

const Lakes = () => {
  const navigate = useNavigate();
  const [lakesData, setLakesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/waterbodies/lakes")
      .then((response) => {
        setLakesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lakes data:", error);
      });
  }, []);

  const filteredData = lakesData.filter((item) =>
    item.lake_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.capacity.toString().includes(searchTerm)
  );

  return (
    <div className="lakes-container">
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
        <h1>Lake Records</h1>
        <input
          type="text"
          placeholder="Search by name or capacity..."
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
                <th>Lake Name</th>
                <th>Capacity (ML)</th>
                <th>Forest ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.lake_name}</td>
                  <td>{item.capacity}</td>
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

export default Lakes;
