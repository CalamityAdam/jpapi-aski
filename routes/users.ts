import express from 'express';
const router = express.Router();
import { User } from '../models';

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (error) {
    next(error);
  }
});

export { router as usersRoutes };
