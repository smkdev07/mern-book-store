import express from 'express';
import dotenv from 'dotenv';

import books from './data/books.js';

dotenv.config();

const app = express();

app.get('/', (req, res, next) => {
  res.send('API is running...');
});

app.get('/api/books', (req, res, next) => {
  res.json(books);
});

app.get('/api/books/:id', (req, res, next) => {
  const book = books.find((book) => book._id === req.params.id);
  res.json(book);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
