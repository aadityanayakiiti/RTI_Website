require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser'); // <-- Import cookie-parser

const authRoutes = require('./routes/auth.routes');
const rtiRoutes = require('./routes/rti.routes');
const fileRoutes = require('./routes/file.routes');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL, // Allow your frontend to connect
  credentials: true // Allow cookies to be sent
}));
app.use(cookieParser()); // <-- Use cookie-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/rti', rtiRoutes);
app.use('/api/files', fileRoutes);

app.get('/', (req, res) => {
  res.send('RTI Backend is running!');
});

module.exports = app;