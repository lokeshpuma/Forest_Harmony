import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Animals.css";

const Animals = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  return (
    <div className="animals-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/waterbodies">Water Bodies</Link></li>
          <li><Link to="/forests">Forests</Link></li>
        </ul>
      </nav>

      {/* Title */}
      <header className="animals-header">
        <h1>Animals Records</h1>
      </header>

      {/* Animal Divs */}
      <div className="animals-categories">
        <div className="animal-card land" onClick={() => navigate("/land-animals")}>
          <h2>Land Animals</h2>
        </div>
        <div className="animal-card water" onClick={() => navigate("/water-animals")}>
          <h2>Water Animals</h2>
        </div>
        <div className="animal-card air" onClick={() => navigate("/air-animals")}>
          <h2>Air Animals</h2>
        </div>
        <div className="animal-card insects" onClick={() => navigate("/insects-animals")}>
          <h2>Insects</h2>
        </div>
      </div>

      {/* About Animal Protection */}
      <section className="animal-protection-info">
        <h3>Protecting Animals and Their Habitats</h3>
        <p>
          Animals play a crucial role in maintaining the balance of ecosystems. It is important to protect their habitats, which are often being destroyed due to urbanization and deforestation.
        </p>
        <ul>
          <li>Educate the public about the importance of wildlife conservation.</li>
          <li>Establish protected areas like national parks and wildlife sanctuaries.</li>
          <li>Support anti-poaching laws and wildlife protection initiatives.</li>
          <li>Encourage sustainable practices to reduce human impact on habitats.</li>
          <li>Promote research and conservation projects that focus on endangered species.</li>
        </ul>
      </section>
    </div>
  );
};

export default Animals;
