import React from 'react';
import { Link } from 'react-router-dom';
import bandipurImg from './bandipur.jpg';
import dandeliImg from './dandeli.jpg';
import nagarholeImg from './nagarhole.jpg';
import bannerghattaImg from './bannerghatta.jpg';
import bhadraImg from './bhadra.jpg';
import kudremukhImg from './kudremukh.jpg';
import logoImg from './logo.png';     // Replace with your actual logo
import './Forests.css';

const forestsData = [
    { id: 1, name: "Bandipur", location: "Chamarajanagar", image: bandipurImg, link: "/forests/bandipur" },
    { id: 2, name: "Dandeli", location: "Uttara Kannada", image: dandeliImg,link: "/forests/dandeli" },
    { id: 3, name: "Nagarhole", location: "Kodagu", image: nagarholeImg,link: "/forests/nagarhole" },
    { id: 4, name: "Bannerghatta", location: "Bangalore", image: bannerghattaImg,link: "/forests/bannerghatta" },
    { id: 5, name: "Bhadra", location: "Chikkamagaluru", image: bhadraImg },
    { id: 6, name: "Kudremukh", location: "Chikkamagaluru", image: kudremukhImg },
  ];
  

const Forests = () => {
  return (
    <div className="forest-page">

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logoImg} alt="Logo" className="logo-image" />
        </div>
        <div className="navbar-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/animals">Animals</Link>
          <Link to="/waterbodies">Water Bodies</Link>
          <Link to="/minerals">minerals</Link>
          <Link to="/tourism">Tourism</Link>
          <Link to="/community">Community & Workers</Link>
        </div>
      </nav>

      {/* Forests Section */}
      <div className="content">
        <h1 className="title">Forests of Karnataka</h1>
        <div className="forest-grid">
          {forestsData.map((forest) => (
            <Link
              key={forest.id}
              to={`/forests/${forest.id}`}
              className="forest-card"
            >
              <div 
               className="forest-image" 
               style={{ backgroundImage: `url(${forest.image})` }}
                 ></div>

              <div className="forest-info">
                <h2>{forest.name} <span className="forest-id">({forest.id})</span></h2>
                <p>📍 {forest.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forests;
