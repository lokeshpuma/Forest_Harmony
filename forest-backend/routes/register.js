// routes/register.js
import express from 'express';
import db from '../db.js';

const router = express.Router();

router.post('/', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, password], (err) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Failed to register user' });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});

export default router;
