import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Community.css";

const Community = () => {
  const [activeTab, setActiveTab] = useState("rangers");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    forest: "",
    category: "",
  });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/suggestions", form);
      setStatus("Submitted successfully!");
      setForm({
        name: "",
        email: "",
        message: "",
        forest: "",
        category: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("Error submitting form");
    }
  };

  return (
    <div className="community-wrapper">
      <nav className="navbar">
        <ul>
          <li onClick={() => navigate("/dashboard")}>Dashboard</li>
          <li><Link to="/forests">Forests</Link></li>
          <li><Link to="/animals">Animals</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
      </nav>

      <header className="community-header">
        <h1>Community & Worker Management</h1>
      </header>

      <div className="tab-buttons">
        <button className={activeTab === "rangers" ? "active" : ""} onClick={() => setActiveTab("rangers")}>Forest Rangers</button>
        <button className={activeTab === "ngos" ? "active" : ""} onClick={() => setActiveTab("ngos")}>NGOs / Volunteers</button>
        <button className={activeTab === "suggestions" ? "active" : ""} onClick={() => setActiveTab("suggestions")}>User Suggestions</button>
      </div>

      <div className="tab-content">
        {activeTab === "rangers" && (
          <section className="scroll-section">
            <h2>Forest Rangers Info</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Employee ID</th>
                  <th>Assigned Forest</th>
                  <th>Contact</th>
                  <th>Shift</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Ravi Kumar</td><td>FR123</td><td>Bandipur</td><td>ravi.k@forest.in</td><td>Morning</td><td>Active</td></tr>
                <tr><td>Megha Reddy</td><td>FR124</td><td>Dandeli</td><td>megha.r@forest.in</td><td>Evening</td><td>Active</td></tr>
                <tr><td>Santosh Gowda</td><td>FR125</td><td>Nagarhole</td><td>santosh.g@forest.in</td><td>Night</td><td>On Leave</td></tr>
                <tr><td>Preeti Shetty</td><td>FR126</td><td>Bannerghatta</td><td>preeti.s@forest.in</td><td>Morning</td><td>Active</td></tr>
                <tr><td>Anil Desai</td><td>FR127</td><td>Bhadra</td><td>anil.d@forest.in</td><td>Evening</td><td>Inactive</td></tr>
                <tr><td>Suma Patil</td><td>FR128</td><td>Kudremukh</td><td>suma.p@forest.in</td><td>Morning</td><td>Active</td></tr>
              </tbody>
            </table>
          </section>
        )}

        {activeTab === "ngos" && (
          <section className="scroll-section ngos-section">
            <h2>NGOs / Volunteers</h2>
            {[
              {
                name: "Green Earth Org", forest: "Bandipur", type: "NGO", email: "contact@greenearth.org", purpose: "Wildlife Protection"
              },
              {
                name: "Wildlife Warriors", forest: "Dandeli", type: "Volunteer Group", email: "warriors@wildlife.org", purpose: "Anti-poaching support"
              },
              {
                name: "EcoGuardians Trust", forest: "Nagarhole", type: "NGO", email: "ecoguardians@nagar.org", purpose: "Forest education programs"
              },
              {
                name: "Banner Wild Support", forest: "Bannerghatta", type: "Volunteer Team", email: "banner.support@wild.org", purpose: "Rescue & Rehab"
              },
              {
                name: "Green Steps India", forest: "Bhadra", type: "NGO", email: "greensteps@india.org", purpose: "Reforestation efforts"
              },
              {
                name: "Save Kudremukh", forest: "Kudremukh", type: "NGO", email: "savekudremukh@forest.org", purpose: "Endangered species protection"
              }
            ].map((ngo, index) => (
              <div className="ngo-card" key={index}>
                <h3>{ngo.name}</h3>
                <p><strong>Type:</strong> {ngo.type}</p>
                <p><strong>Forest:</strong> {ngo.forest}</p>
                <p><strong>Email:</strong> {ngo.email}</p>
                <p><strong>Purpose:</strong> {ngo.purpose}</p>
              </div>
            ))}
          </section>
        )}

        {activeTab === "suggestions" && (
          <section className="scroll-section suggestion-section">
            <h2>User Suggestions / Reports</h2>
            <form className="suggestion-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <select
                name="forest"
                value={form.forest}
                onChange={handleChange}
                required
              >
                <option value="">Select Forest</option>
                <option value="Bandipur">Bandipur</option>
                <option value="Dandeli">Dandeli</option>
                <option value="Nagarhole">Nagarhole</option>
                <option value="Bannerghatta">Bannerghatta</option>
                <option value="Bhadra">Bhadra</option>
                <option value="Kudremukh">Kudremukh</option>
              </select>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Report">Report</option>
                <option value="Appreciation">Appreciation</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Submit</button>
              {status && <p className="status-message">{status}</p>}
            </form>
          </section>
        )}
      </div>
    </div>
  );
};

export default Community;
