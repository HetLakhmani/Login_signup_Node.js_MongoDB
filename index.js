const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('views'));

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
