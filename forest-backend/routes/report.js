import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs'; 
import db from '../db.js'; 

const router = express.Router();


const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);  
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage });


router.post('/', upload.single('photo'), (req, res) => {
  try {
    const { reporter_name, contact, location, activity_type, description } = req.body;
    const photo = req.file ? req.file.filename : null; 

    
    const query = 'INSERT INTO reports (reporter_name, contact, location, activity_type, description, photo) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [reporter_name, contact, location, activity_type, description, photo];

    db.query(query, values, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error submitting report', error: err });
      }
      res.status(200).json({ message: 'Report submitted successfully!' });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing report', error: error.message });
  }
});

export default router;
