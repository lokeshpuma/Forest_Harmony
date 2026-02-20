import React from "react";
import { Link } from "react-router-dom";
import "./Minerals.css";

const mineralData = [
  {
    forest: "Kudremukh",
    area: "600.32 sq km",
    minerals: [
      { name: "Iron Ore", quantity: "High (Mining banned now)", quantityFigure: 1000000, unit: "tons" },
      { name: "Manganese", quantity: "Moderate", quantityFigure: 500000, unit: "tons" }
    ],
    className: "kudremukh"
  },
  {
    forest: "Dandeli",
    area: "866.41 sq km",
    minerals: [
      { name: "Bauxite", quantity: "Moderate", quantityFigure: 300000, unit: "tons" },
      { name: "Limestone", quantity: "Low", quantityFigure: 100000, unit: "tons" }
    ],
    className: "dandeli"
  },
  {
    forest: "Bhadra",
    area: "492.46 sq km",
    minerals: [
      { name: "Bauxite", quantity: "Moderate", quantityFigure: 200000, unit: "tons" },
      { name: "Quartz", quantity: "Moderate", quantityFigure: 150000, unit: "tons" }
    ],
    className: "bhadra"
  },
  {
    forest: "Bannerghatta",
    area: "260.51 sq km",
    minerals: [
      { name: "Quartz", quantity: "Low", quantityFigure: 50000, unit: "tons" },
      { name: "Feldspar", quantity: "Low", quantityFigure: 20000, unit: "tons" }
    ],
    className: "bannerghatta"
  },
  {
    forest: "Bandipur",
    area: "874.2 sq km",
    minerals: [
      { name: "Granite", quantity: "High", quantityFigure: 500000, unit: "tons" },
      { name: "Bauxite", quantity: "Moderate", quantityFigure: 300000, unit: "tons" }
    ],
    className: "bandipur"
  },
  {
    forest: "Nagarhole",
    area: "643.39 sq km",
    minerals: [
      { name: "Copper", quantity: "Moderate", quantityFigure: 200000, unit: "tons" },
      { name: "Manganese", quantity: "High", quantityFigure: 450000, unit: "tons" }
    ],
    className: "nagarhole"
  }
];

const Minerals = () => {
  return (
    <div className="minerals-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/animals">Animals</Link></li>
          <li><Link to="/waterbodies">Water Bodies</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/forests">Forests</Link></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="header">
        <h1>Minerals Records</h1>
      </header>
      <header className="sub-header">
        <h2>Major Minerals in Karnataka's Forests</h2>
        <p>Explore the mineral wealth of Karnataka's forests.</p>
      </header>

      {/* Mineral Cards */}
      <div className="minerals-grid">
        {mineralData.map((item, index) => (
          <div className={`mineral-card ${item.className}`} key={index}>
            <h3>{item.forest}</h3>
            <p><strong>Area:</strong> {item.area}</p>
            {item.minerals.map((mineral, mineralIndex) => (
              <div key={mineralIndex}>
                <p><strong>Mineral:</strong> {mineral.name}</p>
                <p><strong>Quantity:</strong> {mineral.quantity} ({mineral.quantityFigure} {mineral.unit})</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Importance Section */}
      <div className="importance-section">
        <section className="info-section">
          <h3>The Role of Minerals in Forest Ecosystems</h3>
          <p>
            Karnataka's forests are not just rich in flora and fauna, but also contain significant mineral wealth.
            Minerals like iron ore, bauxite, copper, and quartz are found across forest regions, although mining in
            protected areas is strictly regulated. These minerals support industrial development, but unchecked
            extraction can harm biodiversity. Hence, sustainable practices are essential. Many forest reserves also
            serve as geological heritage sites. Understanding mineral distribution helps in ecological planning,
            environmental education, and natural resource conservation.
          </p><br />
          <h3>Minerals and Soil Health</h3>
          <p>In addition to their economic importance, minerals in forest regions play a vital role in shaping soil chemistry and influencing vegetation patterns. 
            Certain mineral-rich soils support unique plant species that contribute to regional biodiversity. 
            Moreover, the study of mineral deposits can reveal insights into the geological history of a forest landscape, enhancing our understanding of ecosystem evolution.</p><br />
            <h3>Traditional Uses of Forest Minerals</h3>
            <p>Forest-dependent communities have traditionally used small-scale mineral resources for local crafts, construction, and tools, illustrating a sustainable human-nature relationship. 
              Today, balancing the extraction of these resources with conservation goals is a key challenge for forest policymakers and planners.</p><br />
            <h3>Research and Educational Value</h3>
            <p>Educational institutions and researchers frequently study forest mineral zones for eco-geological research, promoting informed decision-making.
               By integrating mineral management into forest conservation plans, we ensure the long-term health of both natural ecosystems and human communities that depend on them.</p>
        </section>
      </div>
    </div>
  );
};

export default Minerals;
