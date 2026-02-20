import express from "express";
import db from "../db.js"; // your DB connection
const router = express.Router();

// Get all resources
router.get("/", (req, res) => {
  const sql = "SELECT * FROM resources";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Failed to fetch resources" });
    res.json(results);
  });
});

// Get only Timber resources

router.get('/timber', (req, res) => {
    const query = 'SELECT * FROM timber';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching timber records:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(results);
    });
  });

// Get only Non-Timber products
router.get('/non-timber', (req, res) => {
    const query = 'SELECT * FROM non_timber';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching timber records:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(results);
    });
  });

// Get only Ecosystem Services
router.get('/ecological-cultural-services', (req, res) => {
    const query = 'SELECT * FROM ecological_cultural_services';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching timber records:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(results);
    });
  });

export default router;
