import asyncHandler from 'express-async-handler';

import Book from '../models/book.js';

// @description Fetch all books
// @route GET /api/books
// @access Public
export const getBooks = asyncHandler(async (req, res, next) => {
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 10;

  const searchName = req.query.searchTerm
    ? { name: { $regex: req.query.searchTerm, $options: 'i' } }
    : {};
  const searchAuthors = req.query.searchTerm
    ? { authors: { $regex: req.query.searchTerm, $options: 'i' } }
    : {};
  const searchPublishers = req.query.searchTerm
    ? { publishers: { $regex: req.query.searchTerm, $options: 'i' } }
    : {};

  const count = await Book.countDocuments({
    $or: [{ ...searchName }, { ...searchAuthors }, { ...searchPublishers }],
  });

  const books = await Book.find({
    $or: [{ ...searchName }, { ...searchAuthors }, { ...searchPublishers }],
  })
    .limit(limit)
    .skip(limit * (page - 1));

  res.json({ page, pages: Math.ceil(count / limit), books });
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

// @description Create new book
// @route POST /api/books
// @access Private/Admin
export const createBook = asyncHandler(async (req, res, next) => {
  const book = new Book({
    user: req.user._id,
    name: 'Sample name',
    image: '/images/sample.jpg',
    description: 'Sample description',
    authors: 'Sample author',
    publishers: 'Sample publisher',
    isbn: 0,
  });

  const createdBook = await book.save();
  res.status(201);
  res.json(createdBook);
});

// @description Update book by id
// @route PUT /api/books/:id
// @access Private/Admin
export const updateBookById = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    book.name = req.body.name;
    book.image = req.body.image;
    book.description = req.body.description;
    book.authors = req.body.authors;
    book.publishers = req.body.publishers;
    book.isbn = req.body.isbn;
    book.price = req.body.price;
    book.countInStock = req.body.countInStock;

    const updatedBook = await book.save();

    res.json(updatedBook);
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

// @description Delete book by id
// @route DELETE /api/books/:id
// @access Private/Admin
export const deleteBookById = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    await book.remove();
    res.json({ message: 'Book removed' });
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

// @description Create new review
// @route POST /api/books/:id/review
// @access Private
export const createBookReview = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    const alreadyReviewed = book.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Book already reviewed');
    } else {
      const review = {
        name: req.user.name,
        rating: req.body.rating,
        comment: req.body.comment,
        user: req.user._id,
      };

      book.reviews.push(review);
      book.numReviews = book.reviews.length;
      book.rating =
        book.reviews.reduce((total, review) => total + review.rating, 0) /
        book.reviews.length;

      await book.save();
      res.status(201);
      res.json({ message: 'Review added' });
    }
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});
