// routes/animals.js
import express from "express";
import db from "../db.js"; // Import database connection

const router = express.Router();

// Route to get land animals from the database
router.get('/land', (req, res) => {
  db.query("SELECT * FROM animals WHERE category = 'land'", (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching data" });
    }
    res.json(results); // Return data as JSON
  });
});

// Get all water animals
router.get("/water", (req, res) => {
    const query = "SELECT * FROM water_animals";
  
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching water animals:", err);
        return res.status(500).json({ error: "Database error" });
      }
      res.json(results);
    });
  });


// Route to get all air animals
router.get('/air', (req, res) => {
    db.query("SELECT * FROM air_animals", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching air animals data" });
      }
      res.json(results);  // Send the results to the client
    });
  });


  router.get('/insects', (req, res) => {
    db.query("SELECT * FROM insects", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching insects data" });
      }
      res.json(results);  // Send the results to the client
    });
  });

export default router;


