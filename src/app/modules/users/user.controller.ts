import { Request, Response } from 'express';
import { usersServices } from './user.service';

// create users

const createUsers = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await usersServices.createUserDetailsIntoDB(userData);

    res.status(200).json({
      success: true,
      message: 'User Created Successfully',
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

// get all users

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await usersServices.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: 'Users getting successfully from DB',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: ' Users not getting from db',
      data: err,
    });
  }
};
// get singleUser by userId

const getSingelUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await usersServices.getSingelUserDetailsFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'User getting successfully from DB',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: ' User not getting from db',
      data: err,
    });
  }
};

export const UserControllers = {
  createUsers,
  getAllUsers,
  getSingelUser,
};
