// ✅ Correct app.js for Express
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();

const app = express();

app.use(cors({ origin: 'https://book-store-pro-front-end.vercel.app/', credentials: true }));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
