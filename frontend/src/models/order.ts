import { ShippingAddress } from '../store/reducers/cart';

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface OrderItem {
  _id: string;
  name: string;
  quantity: number;
  image: string;
  price: number;
  book: string;
}

// PayPay Response Object
export interface PaymentResult {
  id: string;
  status: string;
  update_time: string;
  email_address: string;
}

export interface Order {
  _id: string;
  __v: number;
  user: User | string;
  orderItems: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  paymentResult: PaymentResult;
  itemsPrice: number;
  taxAmount: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidOn?: string;
  isDelivered: boolean;
  deliveredOn?: string;
  createdAt: string;
  updatedAt: string;
}
