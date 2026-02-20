import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./WaterAnimals.css";

const WaterAnimals = () => {
  const [waterAnimals, setWaterAnimals] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch water animals data from backend
  useEffect(() => {
    const fetchWaterAnimals = async () => {
      try {
        const response = await axios.get("http://localhost:5000/animals/water");
        setWaterAnimals(response.data);
      } catch (error) {
        console.error("Error fetching water animals data:", error);
      }
    };

    fetchWaterAnimals();
  }, []);

  // Filter water animals by name
  const filteredAnimals = waterAnimals.filter((animal) =>
    animal.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="water-animals-container">
     

      {/* Title and Search */}
      <header className="water-animals-header">
        <h1>Water Animals Records</h1>
        <input
          type="text"
          placeholder="Search by animal name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      {/* Back Button */}
      <div className="back-button">
        <Link to="/animals">Back to Animals</Link>
      </div>

      {/* Water Animals Table */}
      <div className="water-animals-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Species</th>
              <th>Population</th>
              <th>Forest ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnimals.map((animal) => (
              <tr key={animal.water_animal_id}>
                <td>{animal.water_animal_id}</td>
                <td>{animal.name}</td>
                <td>{animal.species}</td>
                <td>{animal.population}</td>
                <td>{animal.forest_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaterAnimals;
