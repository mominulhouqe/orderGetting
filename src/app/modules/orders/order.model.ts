import mongoose, { Schema, Document } from 'mongoose';

export type Order = {
  productName: string;
  price: number;
  quantity: number;
};

export type UserOrders = {
  userId: string;
  orders: Order[];
} & Document;

const OrderSchema = new Schema<Order>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const UserOrdersSchema = new Schema<UserOrders>({
  userId: { type: String, required: true },
  orders: [OrderSchema],
});

const UserOrdersModel = mongoose.model<UserOrders>(
  'UserOrders',
  UserOrdersSchema,
);

export default UserOrdersModel;
