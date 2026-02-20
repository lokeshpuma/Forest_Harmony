import express from 'express';
import db from '../db.js';

const router = express.Router();

router.get('/', (req, res) => {
    db.query("SELECT * FROM tourism_records", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching tourism records" });
      }
      res.json(results);
    });
  });
  

export default router;
