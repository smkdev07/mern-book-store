import asyncHandler from 'express-async-handler';

import Book from '../models/book.js';

// @description Fetch all books
// @route GET /api/books
// @access Public
export const getBooks = asyncHandler(async (req, res, next) => {
  const books = await Book.find({});

  res.json(books);
});

// @description Fetch book by id
// @route GET /api/books/:id
// @access Public
export const getBookById = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    res.json(book);
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});
