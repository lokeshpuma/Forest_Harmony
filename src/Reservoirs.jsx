import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Reservoirs.css";

const Reservoirs = () => {
  const navigate = useNavigate();
  const [reservoirsData, setReservoirsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/waterbodies/reservoirs")
      .then((response) => {
        setReservoirsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reservoirs data:", error);
      });
  }, []);

  const filteredData = reservoirsData.filter((item) =>
    item.reservoir_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="reservoirs-container">
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
        <h1>Reservoir Records</h1>
        <input
          type="text"
          placeholder="Search by reservoir name..."
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
                <th>Reservoir Name</th>
                <th>Capacity (ML)</th>
                <th>Forest ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.reservoir_name}</td>
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

export default Reservoirs;
