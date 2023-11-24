import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/users', UserControllers.createUsers);

router.get('/', UserControllers.getAllUsers);
router.get('/:userId', UserControllers.getSingelUser);

router.put('/:userId', UserControllers.updateUser);
router.delete('/:userId', UserControllers.deleteUser);

export const userRoutes = router;
