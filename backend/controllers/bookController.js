

const { Book } = require('../models');
const { Op } = require('sequelize');  // <-- add this line


exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll(); // get all books, no filters/pagination here
    res.json({ books });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    console.log("given book id is", id);

    const book = await Book.findBookById(id);

    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    console.error("Error in getBookById:", err);
    res.status(500).json({ error: 'Failed to fetch book' });
  }
};




exports.getBooksByAuthor = async (req, res) => {
  try {
    const authorName = req.params.authorName;
    const books = await Book.findAll({
      where: { author: authorName }
    });
    if (!books.length) return res.status(404).json({ error: 'No books found for this author' });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books by author' });
  }
};


exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create book' });
  }
};