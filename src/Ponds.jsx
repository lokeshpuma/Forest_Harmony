import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Ponds.css";

const Ponds = () => {
  const navigate = useNavigate();
  const [pondsData, setPondsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/waterbodies/ponds")
      .then((response) => {
        setPondsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ponds data:", error);
      });
  }, []);

  const filteredData = pondsData.filter((item) =>
    item.pond_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ponds-container">
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
        <h1>Pond Records</h1>
        <input
          type="text"
          placeholder="Search by pond name..."
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
                <th>Pond Name</th>
                <th>Capacity (ML)</th>
                <th>Forest ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.pond_name}</td>
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

export default Ponds;
