import { Request, Response } from 'express';
import { usersServices } from './user.service';
import { orderValidationSchema } from '../orders/order.validation';

import UserDetailsModel from './user.model';

const createUsers = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await usersServices.createUserDetailsIntoDB(userData);

    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (err) {
     // Log the error for debugging
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: err,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await usersServices.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (err) {
    
    res.status(500).json({
      success: false,
      message: 'Users not retrieved from the database',
      data: err,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserDetailsModel.findOne({ userId });

    
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (err) {
    
    res.status(500).json({
      success: false,
      message: 'User not retrieved from the database',
      data: err,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const userData = req.body.user;
    const result = await usersServices.updatedUserDetailsFromDB(
      userId,
      userData,
    );

    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
  } catch (err) {
    
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: err,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await usersServices.deleteUserDetailsFromDB(userId);

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: result,
    });
  } catch (err) {
    
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: err,
    });
  }
};

const addNewProduct = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const orderData = req.body;

    const validation = orderValidationSchema.validate(orderData);
    if (validation.error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        error: validation.error.details.map((detail) => detail.message),
      });
    }

    let userOrders = await UserDetailsModel.findOne({ userId });

    if (!userOrders) {
      userOrders = await UserDetailsModel.create({ userId, orders: [] });
    }

    userOrders.orders.push(orderData);
    await userOrders.save();

    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userOrders = await UserDetailsModel.findOne({ userId });

    if (!userOrders) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: {
        orders: userOrders.orders,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: error,
    });
  }
};

const calculateTotalPrice = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userOrders = await UserDetailsModel.findOne({ userId });

    if (!userOrders) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    const totalPrice = userOrders.orders.reduce(
      (total, order) => total + order.price * order.quantity,
      0,
    );

    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: {
        totalPrice: totalPrice,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: error,
    });
  }
};

export const UserControllers = {
  createUsers,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  addNewProduct,
  getAllOrders,
  calculateTotalPrice,
};
