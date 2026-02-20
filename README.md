# Forest Management System

A comprehensive full-stack web application for managing forest resources, activities, and data. Built with modern web technologies to provide an efficient and user-friendly interface for forest management operations.

## 🌲 About

The Forest Management System is designed to help forest departments, conservation organizations, and environmental agencies manage and monitor forest resources effectively. This application provides tools for tracking forest data, managing activities, and generating insights for better forest conservation and management.

## ✨ Features

- **Resource Management**: Track and manage forest resources including flora, fauna, and other natural assets
- **Activity Logging**: Record and monitor forest management activities and operations
- **Data Visualization**: View forest data through intuitive dashboards and reports
- **User Authentication**: Secure login and role-based access control
- **Database Management**: Robust MySQL database for reliable data storage and retrieval
- **Responsive Design**: Modern, mobile-friendly interface built with React

## 🛠️ Tech Stack

### Frontend
- **React** - UI library for building interactive user interfaces
- **Vite** - Next-generation frontend build tool
- **ESLint** - Code quality and consistency

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MySQL** - Relational database management system

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MySQL Server (v5.7 or higher)

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Harshavardhana-v/Forest-management.git
cd Forest-management
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd forest-backend
npm install
cd ..
```

### 4. Database Setup
1. Start your MySQL server
2. Navigate to the `project-dbms` folder
3. Import the database schema:
```bash
mysql -u your_username -p < database_schema.sql
```
4. Update database credentials in the backend configuration file

### 5. Configure Environment Variables
Create a `.env` file in the `forest-backend` directory:
```env
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=forest_management
PORT=5000
```

## 🎯 Usage

### Start the Backend Server
```bash
cd forest-backend
npm start
```
The backend server will run on `http://localhost:5000` (or your configured port)

### Start the Frontend Development Server
In a new terminal, from the root directory:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
Forest-management/
├── Forest-management/     # Additional project files
├── forest-backend/        # Backend Express.js application
│   ├── routes/           # API routes
│   ├── models/           # Database models
│   └── controllers/      # Request handlers
├── project-dbms/         # Database schemas and scripts
├── public/               # Static assets
├── src/                  # React frontend source code
│   ├── components/       # React components
│   ├── pages/           # Page components
│   └── utils/           # Utility functions
├── index.html           # HTML entry point
├── package.json         # Frontend dependencies
└── vite.config.js       # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available for educational and non-commercial use.

## 👨‍💻 Author

**Harshavardhana V**

- GitHub: [@Harshavardhana-v](https://github.com/Harshavardhana-v)

## 🙏 Acknowledgments

- Built with React and Vite for optimal development experience
- Express.js for robust backend API development
- MySQL for reliable data management

---

**Note**: This is a full-stack project developed for forest management purposes. For any issues or feature requests, please open an issue on GitHub.
