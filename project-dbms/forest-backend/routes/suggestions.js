// routes/suggestions.js
import express from 'express';
import db from '../db.js'; // Your MySQL connection file

const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, forest, category, message } = req.body;

  if (!name || !email || !forest || !category || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = `
    INSERT INTO suggestions (name, email, forest, category, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, email, forest, category, message], (err, ) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "Suggestion submitted successfully" });
  });
});

export default router;
