import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LandAnimals.css";

const LandAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/animals/land")
      .then((res) => setAnimals(res.data))
      .catch((err) => console.error("Error fetching animals:", err));
  }, []);

  const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="land-animals-container">
      {/* Navbar */}
      <div className="top-bar">
        <button className="back-button" onClick={() => navigate("/animals")}>
          ← Back to Animals
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search by animal name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h2 className="title">Land Animals Records</h2>

      <div className="table-container">
        <table className="animals-table">
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
              <tr key={animal.id}>
                <td>{animal.id}</td>
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

export default LandAnimals;
