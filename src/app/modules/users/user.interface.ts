export type UserDetails = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: {
    push(orderData: any): unknown;
    reduce(arg0: (total: any, order: any) => any, arg1: number): unknown;
    productName: string;
    price: number;
    quantity: number;
  };
};
