import express from 'express';

import {
  registerUser,
  authUser,
  getUserProfile,
} from '../controllers/users.js';

import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/').post(registerUser);

router.post('/login', authUser);

router.route('/profile').get(protect, getUserProfile);

export default router;
