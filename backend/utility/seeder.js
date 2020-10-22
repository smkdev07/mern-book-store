import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from '../config/db.js';
import User from '../models/user.js';
import Book from '../models/book.js';
import Order from '../models/order.js';
import users from '../data/users.js';
import books from '../data/books.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Book.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleBooks = books.map((book) => ({ user: adminUser, ...book }));

    await Book.insertMany(sampleBooks);

    console.log('Data Imported into MongoDB'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.white.bgRed);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Book.deleteMany();
    await Order.deleteMany();

    console.log('Data Destroyed in MongoDB'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.white.bgRed);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
