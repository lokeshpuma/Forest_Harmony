import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AirAnimals.css';

const AirAnimals = () => {
  const [airAnimals, setAirAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch air animals data on component mount
  useEffect(() => {
    axios.get('http://localhost:5000/animals/air')
      .then(response => {
        setAirAnimals(response.data);
      })
      .catch(error => {
        console.error("Error fetching air animals data", error);
      });
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter animals by name based on search input
  const filteredAnimals = airAnimals.filter(animal => 
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="air-animals-container">
      {/* Navbar */}
     

      {/* Back Button */}
      <div className="back-button">
        <Link to="/animals">Back to Animals</Link>
      </div>

      {/* Header and Search Bar */}
      <header className="air-animals-header">
        <h1>Air Animals Records</h1>
        <input 
          type="text" 
          placeholder="Search by name..." 
          value={searchTerm}
          onChange={handleSearch}
        />
      </header>

      {/* Table of Air Animals */}
      <div className="air-animals-table">
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
            {filteredAnimals.map(animal => (
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

export default AirAnimals;
