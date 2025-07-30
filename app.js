const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();

const app = express(); // ✅ Must be before any use of `app`

app.use(cors({
  origin: 'https://book-store-pro-front-end.vercel.app', // 🔗 your frontend URL without slash
  credentials: true,
}));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
