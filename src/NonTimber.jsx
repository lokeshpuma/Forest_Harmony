import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./NonTimber.css";

const NonTimber = () => {
  const navigate = useNavigate();
  const [nonTimberData, setNonTimberData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch non-timber data on load
  useEffect(() => {
    axios.get("http://localhost:5000/resources/non-timber")
      .then((response) => {
        setNonTimberData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching non-timber data:", error);
      });
  }, []);

  // Filtered data based on search
  const filteredData = nonTimberData.filter((item) =>
    item.non_timber_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="non-timber-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/animals">Animals</a></li>
          <li><a href="/waterbodies">Water Bodies</a></li>
          <li><a href="/forests">Forests</a></li>
        </ul>
      </nav>

      {/* Header */}
      <div className="header">
        <h1>Non-Timber Resources</h1>
        <input
          type="text"
          placeholder="Search by name or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Back button */}
      <div className="back-button">
        <button onClick={() => navigate("/resources")}>Back to Resources</button>
      </div>

      {/* Scrollable content */}
      <div className="main-content">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Forest ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.non_timber_name}</td>
                  <td>{item.type}</td>
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

export default NonTimber;
