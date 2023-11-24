import { UserDetails } from './user.interface';
import UserDetailsModel from './user.model';

const createUserDetailsIntoDB = async (user: UserDetails) => {
  const result = await UserDetailsModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserDetailsModel.find();
  return result;
};

const getSingelUserDetailsFromDB = async (userId: string) => {
  const result = await UserDetailsModel.findOne({ id: userId });
  return result;
};

// update user by userID
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updatedUserDetailsFromDB = async (userId: any, userData: any) => {
  const result = await UserDetailsModel.findOneAndUpdate({ userId }, userData, {
    new: true,
  });
  return result;
};

export const usersServices = {
  createUserDetailsIntoDB,
  getAllUserFromDB,
  getSingelUserDetailsFromDB,
  updatedUserDetailsFromDB,
};
