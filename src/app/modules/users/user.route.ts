import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/', UserControllers.createUsers);

router.get('/', UserControllers.getAllUsers);
router.get('/:userId', UserControllers.getSingleUser);

router.put('/:userId', UserControllers.updateUser);
router.delete('/:userId', UserControllers.deleteUser);

router.put('/:userId/orders', UserControllers.addNewProduct);
router.get('/:userId/orders', UserControllers.getAllOrders);
router.get('/:userId/orders/total-price', UserControllers.calculateTotalPrice);

export const userRoutes = router;
