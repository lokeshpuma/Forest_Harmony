import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Waterfalls.css";

const Waterfalls = () => {
  const navigate = useNavigate();
  const [waterfallsData, setWaterfallsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/waterbodies/waterfalls")
      .then((response) => {
        setWaterfallsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching waterfalls data:", error);
      });
  }, []);

  const filteredData = waterfallsData.filter((item) =>
    item.waterfall_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="waterfalls-container">
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
        <h1>Waterfalls Records</h1>
        <input
          type="text"
          placeholder="Search by waterfall name..."
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
                <th>Waterfall Name</th>
                <th>Height (m)</th>
                <th>Forest ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.waterfall_name}</td>
                  <td>{item.height}</td>
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

export default Waterfalls;
