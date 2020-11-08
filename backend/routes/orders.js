import express from 'express';

import {
  createOrder,
  getOrderById,
  updateOrderByIdToPaid,
  getLoggedInUserOrders,
} from '../controllers/orders.js';

import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/').post(protect, createOrder);

router.route('/userorders').get(protect, getLoggedInUserOrders);

router.route('/:id').get(protect, getOrderById);

router.route('/:id/pay').put(protect, updateOrderByIdToPaid);

export default router;
