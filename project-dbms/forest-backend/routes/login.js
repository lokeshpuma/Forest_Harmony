// login.js
import express from "express";
import db from '../db.js'; // ✅ Correct relative path


const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Missing credentials" });
  }

  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ success: false, message: "Server error" });
    }

    if (results.length > 0) {
      return res.status(200).json({ success: true, message: "Login successful" });
    } else {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

export default router;
