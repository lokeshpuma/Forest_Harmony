import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TourismRecords.css";

const TourismRecords = () => {
  const [tourismData, setTourismData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/tourism")
      .then((res) => res.json())
      .then((data) => setTourismData(data))
      .catch((err) => console.error("Error fetching tourism data:", err));
  }, []);

  const filteredData = tourismData.filter((item) =>
    item.forest_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tourism-records-container">
      <h1>Tourism Records</h1>

      <button className="back-button" onClick={() => navigate("/tourism")}>
        Back to Tourism
      </button>

      <input
        type="text"
        placeholder="Search by forest name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <table className="tourism-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Forest ID</th>
            <th>Forest Name</th>
            <th>Location</th>
            <th>Tourism Allowed</th>
            <th>Activities</th>
            <th>Visitor Count/Year</th>
            <th>Impact Assessment</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.forest_id}</td>
              <td>{item.forest_name}</td>
              <td>{item.location}</td>
              <td>{item.tourism_allowed}</td>
              <td>{item.activities}</td>
              <td>{item.visitor_count}</td>
              <td>{item.impact_assessment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TourismRecords;
