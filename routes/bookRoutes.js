const express = require('express');
const router = express.Router();
const { getAllBooks, createBook } = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getAllBooks);
router.post('/', protect, createBook); // Protected route

module.exports = router;
