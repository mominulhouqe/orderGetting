import { Request, Response } from 'express';
import { usersServices } from './user.service';

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


export const UserControllers = {
    createUsers,
}