# 🌲 Forest Harmony — Forest Management System

A full-stack web application for managing forest resources, biodiversity data, water bodies, tourism, and conservation activities. Built for forest departments, wildlife authorities, and conservation organizations to monitor and manage forest ecosystems effectively.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express-5-000000?logo=express)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql)](https://www.mysql.com/)

---

## 📖 About

**Forest Harmony** provides a unified platform to:

- **Track biodiversity** — Land, water, and air animals; insects; and species data
- **Manage resources** — Timber, non-timber, minerals, and ecological & cultural services
- **Monitor water bodies** — Rivers, lakes, streams, waterfalls, ponds, and reservoirs
- **Support tourism** — Tourism info and records for forest areas
- **Enable reporting** — Citizen and officer reports (e.g. illegal activity)
- **Showcase forests** — Dedicated pages for major reserves (Bandipur, Nagarhole, Dandeli, Bannerghatta, Bhadra, Kudremukh)

The app supports **two user roles**: general users (registration/login) and **forest officers** (officer login), with a responsive React UI and a REST API backend.

---

## ✨ Features

| Area | Features |
|------|----------|
| **Animals** | Land, water, and air animals; insects — view and manage species data |
| **Resources** | Timber, non-timber forest products, minerals, ecological & cultural services |
| **Water bodies** | Rivers, lakes, streams, waterfalls, ponds, reservoirs — catalog and monitor |
| **Forests** | Overview and detailed pages for 6 major forests/reserves |
| **Tourism** | Tourism information and tourism records |
| **Community** | Community engagement and suggestions |
| **Reporting** | Illegal activity reporting with optional image upload |
| **Officer portal** | Dedicated login and workflows for forest officers |
| **Auth** | User registration, login, and role-based access |

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 19, React Router 7, Vite 6, Axios, ESLint |
| **Backend** | Node.js, Express 5, body-parser, CORS, Multer (file uploads) |
| **Database** | MySQL (mysql2 driver) |

---

## 📋 Prerequisites

- **Node.js** v18+ (LTS recommended)
- **npm** or **yarn**
- **MySQL** 5.7+ or 8.x (running locally or remotely)

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/lokeshpuma/Forest_Harmony.git
cd Forest_Harmony
```

### 2. Database setup

1. Create a MySQL database (e.g. `forest_app1`).
2. Import your schema (run your `.sql` scripts or migrations if you have them).
3. Note the host, user, password, and database name for the backend.

### 3. Backend setup

```bash
cd forest-backend
npm install
```

Create a `.env` file in `forest-backend/` (or update `forest-backend/db.js` directly for local dev):

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=forest_app1
PORT=5000
```

Start the API server:

```bash
npm start
```

The backend runs at **http://localhost:5000**.

### 4. Frontend setup

From the **project root** (not inside `forest-backend`):

```bash
npm install
npm run dev
```

The app runs at **http://localhost:5173**.

### 5. Use the app

- Register or log in as a user.
- Use **Forest Officers** to log in as an officer.
- Navigate via the dashboard to Animals, Resources, Water Bodies, Forests, Tourism, Community, Data Management, and Illegal Activity Report.

---

## 📁 Project structure

```
Forest-management-master/
├── forest-backend/           # Express API server
│   ├── routes/
│   │   ├── login.js
│   │   ├── register.js
│   │   ├── animals.js
│   │   ├── resources.js
│   │   ├── waterbodies.js
│   │   ├── tourism.js
│   │   ├── suggestions.js
│   │   ├── report.js
│   │   └── OfficerLogin.js
│   ├── uploads/              # Uploaded files (e.g. report images)
│   ├── db.js                 # MySQL connection
│   └── index.js              # App entry, CORS, routes
├── src/                      # React frontend
│   ├── App.jsx               # Routes and layout
│   ├── main.jsx
│   ├── Dashboard.jsx
│   ├── Animals.jsx, LandAnimals.jsx, WaterAnimals.jsx, AirAnimals.jsx, Insects.jsx
│   ├── Resources.jsx, Timber.jsx, NonTimber.jsx, EcologicalCulturalServices.jsx, Minerals.jsx
│   ├── WaterBodies.jsx, Rivers.jsx, Lakes.jsx, Streams.jsx, Waterfalls.jsx, Ponds.jsx, Reservoirs.jsx
│   ├── Forests.jsx, BandipurPage.jsx, DandeliPage.jsx, NagarholePage.jsx, ...
│   ├── Tourism.jsx, TourismRecords.jsx
│   ├── Community.jsx, DataManagement.jsx
│   ├── IllegalActivityReport.jsx, OfficerLogin.jsx
│   ├── Login.jsx, Registration.jsx
│   └── *.css
├── public/
├── index.html
├── vite.config.js
├── package.json              # Frontend deps and scripts
└── README.md
```

---

## 🔌 API overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | User registration |
| POST | `/login` | User login |
| POST | `/api/forestofficers/*` | Officer auth and actions |
| GET | `/animals/land`, `/animals/water`, `/animals/air`, `/animals/insects` | Animal data by category |
| GET | `/resources/timber`, `/resources/non-timber`, etc. | Resource data |
| — | `/waterbodies/*` | Water body CRUD |
| — | `/tourism/*` | Tourism data |
| — | `/api/suggestions` | Community suggestions |
| — | `/report/*` | Illegal activity reports (with file upload) |
| GET | `/uploads/*` | Serve uploaded files |

---

## 📜 Scripts

| Command | Where | Description |
|--------|--------|-------------|
| `npm run dev` | Root | Start Vite dev server (frontend) |
| `npm run build` | Root | Production build (frontend) |
| `npm run preview` | Root | Preview production build |
| `npm run lint` | Root | Run ESLint |
| `npm start` | `forest-backend/` | Start Express API server |

---

## 🤝 Contributing

1. Fork the repo.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit: `git commit -m 'Add your feature'`.
4. Push: `git push origin feature/your-feature`.
5. Open a Pull Request on GitHub.

---

## 📝 License

This project is open source and available for educational and non-commercial use.

---

## 👨‍💻 Author

**Lokesh**  
- GitHub: [@lokeshpuma](https://github.com/lokeshpuma)

---

*Forest Harmony — manage forests, biodiversity, and conservation in one place.*
