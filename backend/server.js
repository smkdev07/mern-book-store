import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';

import connectDB from './config/db.js';

import bookRoutes from './routes/books.js';
import userRoutes from './routes/users.js';
import orderRoutes from './routes/orders.js';
import uploadRoute from './routes/upload.js';
import { notFound, errorHandler } from './middleware/error.js';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('API is running...');
});

app.use('/api/books', bookRoutes);

app.use('/api/users', userRoutes);

app.use('/api/orders', orderRoutes);

app.use('/api/upload', uploadRoute);

// Move route to seperate file
app.get('/api/config/paypal', (req, res, next) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')));

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue
      .bold
  )
);
