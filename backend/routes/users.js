import express from 'express';

import {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUserById,
  deleteUser,
} from '../controllers/users.js';

import { protect, isAdmin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(protect, isAdmin, getUsers).post(registerUser);

router.post('/login', authUser);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route('/:id')
  .get(protect, isAdmin, getUserById)
  .put(protect, isAdmin, updateUserById)
  .delete(protect, isAdmin, deleteUser);

export default router;
