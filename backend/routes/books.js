import express from 'express';

import {
  getBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
} from '../controllers/books.js';

import { protect, isAdmin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getBooks).post(protect, isAdmin, createBook);

router
  .route('/:id')
  .get(getBookById)
  .delete(protect, isAdmin, deleteBookById)
  .put(protect, isAdmin, updateBookById);

export default router;
