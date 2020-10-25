import express from 'express';

import { getBooks, getBookById } from '../controllers/books.js';

const router = express.Router();

router.route('/').get(getBooks);

router.route('/:id').get(getBookById);

export default router;
