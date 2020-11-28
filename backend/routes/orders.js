import express from 'express';

import {
  createOrder,
  getOrders,
  getLoggedInUserOrders,
  getOrderById,
  updateOrderByIdToPaid,
  updateOrderByIdToDelivered,
} from '../controllers/orders.js';

import { protect, isAdmin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(protect, isAdmin, getOrders).post(protect, createOrder);

router.route('/userorders').get(protect, getLoggedInUserOrders);

router.route('/:id').get(protect, getOrderById);

router.route('/:id/pay').put(protect, updateOrderByIdToPaid);

router.route('/:id/deliver').put(protect, isAdmin, updateOrderByIdToDelivered);

export default router;
