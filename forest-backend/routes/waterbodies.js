import express from "express";
import db from "../db.js"; // adjust path based on your structure

const router = express.Router();

// GET all water bodies
router.get("/", (req, res) => {
  const query = "SELECT * FROM water_bodies";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching water bodies:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

router.get('/rivers', (req, res) => {
    const query = 'SELECT * FROM rivers';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching rivers records:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(results);
    });
  });

  router.get('/lakes', (req, res) => {
    const query = 'SELECT * FROM lakes';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching lakes records:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(results);
    });
  });

  router.get('/streams', (req, res) => {
    const query = 'SELECT * FROM streams';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching streams records:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(results);
    });
  });

  router.get('/waterfalls', (req, res) => {
    const query = 'SELECT * FROM waterfalls';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching streams records:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(results);
    });
  });


  
  router.get('/ponds', (req, res) => {
    const query = 'SELECT * FROM ponds';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching ponds records:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(results);
    });
  });

  router.get('/reservoirs', (req, res) => {
    const query = 'SELECT * FROM reservoirs';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching ponds records:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(results);
    });
  });


export default router;
