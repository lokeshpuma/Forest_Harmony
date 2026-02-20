import React from "react";
import { Link } from "react-router-dom";
import "./WaterBodies.css";

const WaterBodies = () => {
  return (
    <div className="waterbodies-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/animals">Animals</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/forests">Forests</Link></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="waterbodies-header">
        <h1>Water Bodies Records</h1>
      </header>

      {/* Category Cards */}
      <div className="categories-grid">
        <Link to="/waterbodies/rivers" className="category-card river">Rivers 🛶</Link>
        <Link to="/waterbodies/lakes" className="category-card lake">Lakes🦢</Link>
        <Link to="/waterbodies/streams" className="category-card stream">Streams💦</Link>
        <Link to="/waterbodies/waterfalls" className="category-card waterfall">Waterfalls🌊</Link>
        <Link to="/waterbodies/ponds" className="category-card pond">Ponds🐸</Link>
        <Link to="/waterbodies/reservoirs" className="category-card reservoir">Reservoirs💧</Link>
      </div>

      {/* Importance Section */}
      <section className="importance-section">
        <h3>🌊 The Importance of Water Bodies for Biodiversity</h3>
        <p>
        💧 Water bodies are lifelines of biodiversity! They provide 🐟 habitats for aquatic life, support 🌍 ecosystem services, regulate 🌡️ climate, and assist in the purification of water and nutrient cycling.
         Without healthy rivers and wetlands, many species would lose their homes and food sources.
        </p>
        <p>
        🚣‍♀️ Rivers and lakes are crucial for drinking water, irrigation, and agriculture. 
        Small streams and serene waterfalls 🌿 maintain the natural flow of nutrients and keep forest ecosystems connected and thriving. 
        Protecting these waters is key to ensuring balance in the circle of life. 🌎
        </p>
        <p>
        🦆 Ponds and reservoirs act as essential breeding grounds for amphibians 🐸, birds 🐦, and insects 🐝. 
        They not only nurture biodiversity but also support rural livelihoods through fishing and farming. 
        Many water bodies also boost eco-tourism 🚵‍♂️, offering scenic beauty and sustainable economic benefits to local communities.
        </p>
        <br />
        <h3>🛶 Water Bodies in Karnataka Forests: A Natural Treasure</h3>
        <p>Karnataka is home to iconic rivers like the Tunga, Bhadra, and Kabini, which flow through dense forests and sustain both wildlife and people.
           🐘 These rivers are lifelines for national parks like Nagarhole and Bandipur, where elephants, crocodiles, and countless birds gather for water and food. 🐊
          The presence of waterfalls like Hebbe Falls and Jog Falls within forest regions adds to the ecological richness and tourist appeal 🌄. 
          These areas not only attract travelers but also play an ecological role in maintaining humidity and enriching soil fertility 🌱.
        </p><br />
        <h3>💦 Ecological Role & Cultural Value of Water Bodies</h3>
        <p>Many sacred groves and temple ponds in Karnataka forests hold deep cultural significance 🙏. 
          These water bodies reflect ancient traditions of water conservation and respect for nature 🌿. 
          Local communities rely on them not only for rituals but also for daily life, making their protection a blend of science and tradition 🛕.
          Wetlands and marshy areas within forest zones serve as carbon sinks and help in groundwater recharge 💦. Maintaining these delicate ecosystems supports climate resilience and ensures a sustainable future for both flora and fauna. 🌾🌧️
        </p>

      </section>
    </div>
  );
};

export default WaterBodies;
