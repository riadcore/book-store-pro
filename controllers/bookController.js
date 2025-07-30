const Book = require('../models/Book');

// Get all books with optional filtering
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new book (protected route)
exports.createBook = async (req, res) => {
  const { title, author, genre, price } = req.body;

  try {
    const book = await Book.create({ title, author, genre, price });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
