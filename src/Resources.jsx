import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Resources.css";

const Resources = () => {
  const navigate = useNavigate();

  return (
    <div className="resources-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/animals">Animals</Link></li>
          <li><Link to="/waterbodies">Water Bodies</Link></li>
          <li><Link to="/forests">Forests</Link></li>
        </ul>
      </nav>

      {/* Title */}
      <header className="resources-header">
        <h1>Resources Records</h1>
      </header>

      {/* Resource Divs */}
      <div className="resources-categories">
        <div className="resource-card timber" onClick={() => navigate("/resources/timber")}>
          <h2>Timber Resources</h2>
        </div>
        <div className="resource-card non-timber" onClick={() => navigate("/resources/non-timber")}>
          <h2>Non-Timber Forest Products</h2>
        </div>
        <div className="resource-card ecosystem" onClick={() => navigate("/resources/ecological-cultural-services")}>
          <h2>Ecosystem Services</h2>
        </div>
      </div>

      {/* About Resources */}
      <section className="resources-info">
        <h3>🌳 Importance of Forest Resources to Biodiversity</h3>
        <p>
        Forest resources are the lifeblood of biodiversity conservation 🌍. Timber 🌲 and non-timber products like herbs, fruits 🍇, and honey 🍯 are essential for local communities, providing both economic and cultural value. By promoting sustainable use of these resources, forests can continue to support the livelihoods of people without compromising their future.
        </p>
        <p>
        These resources play a critical role in maintaining ecological balance 🌱. They help preserve natural habitats 🏞️, regulate the climate 🌦️, purify water 💧, and support intricate food chains 🦋. Ensuring the sustainable management of these resources is key to safeguarding the well-being of both nature and the communities that depend on them for survival 🌿.
        </p><br />
        <h3>🌲 Rich Diversity of Forest Resources in Karnataka</h3>
        <p>
        Karnataka’s forests are a treasure trove of both Timber 🌳 and Non-Timber Forest Products (NTFPs) like bamboo, honey 🍯, medicinal herbs 🌿, and wild fruits. These resources not only contribute to local livelihoods but also play a key role in traditional healthcare and crafts. Many tribal and rural communities depend on them for sustenance and income. Sustainable harvesting ensures these benefits continue for generations while protecting biodiversity.
        </p><br />
        <h3>🌏 Ecological & Economic Significance</h3>
        <p>
        Forest resources in Karnataka are vital for maintaining the health of entire ecosystems 🌱. They regulate soil fertility, preserve water sources 💧, and provide carbon sinks that help combat climate change. Beyond nature’s balance, these resources generate significant revenue through eco-tourism and forest-based industries, contributing to the state’s economy 💼. Government schemes are promoting afforestation, community involvement, and scientific management to preserve this green wealth responsibly 🌿.
        </p>
      </section>
    </div>
  );
};

export default Resources;
