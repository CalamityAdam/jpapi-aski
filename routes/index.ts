import express from 'express';
const router = express.Router();
import { usersRoutes } from './users'

router.use('/users', usersRoutes);

export { router };
