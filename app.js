const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();

const app = express();

// ✅ Correct CORS settings for frontend hosted on Vercel
app.use(cors({
  origin: ['https://book-store-pro-front-end.vercel.app', 'https://checkdomain2025.online'],
  credentials: true,
}));

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

// ✅ Root endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
