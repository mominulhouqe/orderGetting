import { Schema, model } from 'mongoose';
import { UserDetails } from './user.interface';

const UserDetailsSchema = new Schema<UserDetails>({
  userId: {
    required: [true, 'User ID is required'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
    },
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  hobbies: {
    type: [String],
    default: [],
  },
  address: {
    street: {
      type: String,
      required: [true, 'Street is required'],
    },
    city: {
      type: String,
      required: [true, 'City is required'],
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
    },
  },
  orders: [
    {
      productName: {
        type: String,
        required: [true, 'Product name is required in the order'],
      },
      price: {
        type: Number,
        required: [true, 'Price is required in the order'],
      },
      quantity: {
        type: Number,
        required: [true, 'Quantity is required in the order'],
      },
    },
  ],
});

const UserDetailsModel = model<UserDetails>('UserDetails', UserDetailsSchema);

export default UserDetailsModel;
