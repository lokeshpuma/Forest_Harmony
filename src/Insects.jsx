import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Insects.css';  // Ensure your CSS file is in the correct location

const Insects = () => {
  const [insectData, setInsectData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Fetch insect data from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/insects')  // Make sure this is the correct backend endpoint
      .then((response) => {
        setInsectData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching insects data:', error);
      });
  }, []);

  // Filtered insect data based on search term
  const filteredData = insectData.filter((item) =>
    item.insect_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.habitat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="insects-container">
     

      <header className="insects-header">
        <h1>Insects Records</h1>
        <input
          type="text"
          placeholder="Search by name or habitat"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <button onClick={() => navigate('/animals')}>Back to Animals</button>

      <div className="insects-table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Habitat</th>
              <th>Quantity</th>
              <th>Forest ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.insect_name}</td>
                <td>{item.habitat}</td>
                <td>{item.quantity}</td>
                <td>{item.forest_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Insects;
