import asyncHandler from 'express-async-handler';

import Order from '../models/order.js';

// @description Create new order
// @route POST /api/orders
// @access Private
export const createOrder = asyncHandler(async (req, res, next) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxAmount,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxAmount,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201);
    res.json(createdOrder);
  }
});

// @description Fetch all orders
// @route GET /api/orders
// @access Private/Admin
export const getOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find({}).populate('user', 'id name');

  res.json(orders);
});

// @description Fetch logged in users orders
// @route GET /api/orders/userorders
// @access Private
export const getLoggedInUserOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.json(orders);
});

// @description Fetch order by id
// @route GET /api/orders/:id
// @access Private
export const getOrderById = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @description Update order by id to paid
// @route PUT /api/orders/:id/pay
// @access Private
export const updateOrderByIdToPaid = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidOn = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @description Update order by id to delivered
// @route PUT /api/orders/:id/deliver
// @access Private/Admin
export const updateOrderByIdToDelivered = asyncHandler(
  async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      order.deliveredOn = Date.now();

      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error('Order not found');
    }
  }
);
