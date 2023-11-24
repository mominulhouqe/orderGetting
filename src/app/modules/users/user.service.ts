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



export const usersServices = {
    createUserDetailsIntoDB,
    getAllUserFromDB,
    getSingelUserDetailsFromDB,
    
}
