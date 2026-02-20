// index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import registerRoute from './routes/register.js';
import loginRoute from './routes/login.js';
import animalsRoute from './routes/animals.js'; 
import resourcesRoute from './routes/resources.js'; 
import waterbodiesRoute from './routes/waterbodies.js'; 
import tourismRoute from './routes/tourism.js';
import suggestionsRoute from './routes/suggestions.js';  
import reportRouter from './routes/report.js';
import officerLoginRoutes from './routes/OfficerLogin.js';


import db from './db.js'; 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/animals', animalsRoute);
app.use('/resources', resourcesRoute);
app.use('/waterbodies', waterbodiesRoute);
app.use('/tourism', tourismRoute);
app.use('/api/suggestions', suggestionsRoute); 
app.use('/uploads', express.static('uploads')); 
app.use('/report', reportRouter); 
app.use('/api/forestofficers', officerLoginRoutes); // This means POST to /officer-login


app.get('/animals/land', (req, res) => {
    db.query("SELECT * FROM animals WHERE category = 'land'", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching data" });
      }
      res.json(results);
    });
  });

  app.get('/animals/water', (req, res) => {
    db.query("SELECT * FROM water_animals", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching water animals" });
      }
      res.json(results); 
    });
  });

  app.get('/animals/air', (req, res) => {
    db.query("SELECT * FROM air_animals", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching air animals" });
      }
      res.json(results); 
    });
  });

  app.get('/animals/insects', (req, res) => {
    db.query("SELECT * FROM insects", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching insects" });
      }
      res.json(results); 
    });
  });




  
  app.get('/resources/timber', (req, res) => {
    db.query("SELECT * FROM timber", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching timber resources" });
      }
      res.json(results); 
    });
  });


  
  app.get('/resources/non-timber', (req, res) => {
    db.query("SELECT * FROM non_timber", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching  non-timber resources" });
      }
      res.json(results); 
    });
  });


  app.get('/resources/ecological-cultural-services', (req, res) => {
    db.query("SELECT * FROM ecological_cultural_services", (err,results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching ecological resources" });
      }
      res.json(results);
    });
  });

  app.get('/waterbodies/rivers', (req, res) => {
    db.query("SELECT * FROM rivers", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching rivers resources" });
      }
      res.json(results); 
    });
  });

  app.get('/waterbodies/lakes', (req, res) => {
    db.query("SELECT * FROM lakes", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching lakes resources" });
      }
      res.json(results); 
    });
  });

  app.get('/waterbodies/streams', (req, res) => {
    db.query("SELECT * FROM streams", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching streams resources" });
      }
      res.json(results); 
    });
  });

  app.get('/waterbodies/waterfalls', (req, res) => {
    db.query("SELECT * FROM waterfalls", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching waterfalls resources" });
      }
      res.json(results); 
    });
  });

  app.get('/waterbodies/ponds', (req, res) => {
    db.query("SELECT * FROM ponds", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching ponds resources" });
      }
      res.json(results); 
    });
  });

  app.get('/waterbodies/reservoirs', (req, res) => {
    db.query("SELECT * FROM reservoirs", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching reservoirs resources" });
      }
      res.json(results); 
    });
  });
  

  app.get('/tourism', (req, res) => {
    db.query("SELECT * FROM tourism_records", (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching tourism records" });
      }
      res.json(results); 
    });
  });
  




app.get('/', (req, res) => {
  res.send('Backend is running');
});


app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
