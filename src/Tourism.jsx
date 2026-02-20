import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Tourism.css";

const Tourism = () => {
  const navigate = useNavigate();

  const handleViewTourismData = () => {
    navigate("/tourism-records");
  };

  return (
    <div className="tourism-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/animals">Animals</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/waterbodies">Water Bodies</Link></li>
          <li><Link to="/minerals">Minerals</Link></li>
          <li><Link to="/forests">Forests</Link></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="header">
        <h1>Tourism in Karnataka's Forests</h1>
        <p className="subtitle">Explore the beauty, biodiversity, and cultural richness</p>
      </header>

      {/* View Tourism Data Button */}
      <div className="view-tourism-section">
        <button className="view-button" onClick={handleViewTourismData}>
          View Tourism Data
        </button>
      </div>

      {/* Description Section */}
      <section className="info-section">
        <div className="info-card">
          <h3 className="section-title">Introduction to Tourism</h3>
          <p>
            Tourism in Karnataka's forests offers a unique opportunity to explore rich biodiversity,
            lush landscapes, and cultural heritage. National parks and wildlife sanctuaries attract
            thousands of visitors every year. Activities such as safaris, trekking, bird-watching,
            and eco-tourism help raise awareness and support conservation efforts. Responsible tourism
            also contributes to local economies and job creation. Forest departments regulate tourism
            to ensure minimal environmental impact. Proper visitor education and infrastructure
            development can balance ecological preservation and public engagement. Karnataka continues
            to promote eco-friendly tourism for sustainable forest management.
          </p>
        </div>

        <div className="info-card">
          <h3 className="section-title">Economic and Social Impact</h3>
          <p>
            In recent years, forest tourism in Karnataka has become a significant contributor to the state's economy, generating substantial revenue through park entry fees, safari bookings, guided tours, and eco-lodges. Popular destinations like Bandipur, Nagarhole, and Dandeli attract both domestic and international tourists, supporting a growing hospitality and transport sector in surrounding areas. The Government of Karnataka, in collaboration with the Karnataka Forest Department and Karnataka Eco-tourism Development Board, has introduced various schemes to promote sustainable tourism—such as the Jungle Lodges and Resorts initiative, which offers eco-friendly accommodation and experiences within forest zones. Skill development programs for local communities are also being implemented to create employment in guiding, hospitality, and conservation-related services.
          </p>
        </div>

        <div className="info-card">
          <h3 className="section-title">Future of Forest Tourism</h3>
          <p>
            To further improve forest tourism, the government is investing in digital ticketing systems, interpretation centers, wildlife awareness campaigns, and better road and safety infrastructure. Plans are also underway to integrate tourism with environmental education, allowing visitors to gain deeper insights into conservation practices. Through balanced development and policy support, Karnataka aims to become a national leader in eco-tourism and forest conservation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Tourism;
