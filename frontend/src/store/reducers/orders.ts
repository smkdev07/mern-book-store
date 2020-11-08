import { Order } from '../../models/order';
import {
  OrdersActionTypes,
  REQUEST_ORDERS,
  REQUEST_ORDERS_SUCCESS,
  REQUEST_ORDERS_FAILURE,
  RESET_ORDERS,
} from '../actions/orders-action-types';

export interface OrdersState {
  readonly orders: Order[];
  readonly loading: boolean;
  readonly error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  loading: false,
  error: null,
};

const orders = (state = initialState, action: OrdersActionTypes) => {
  switch (action.type) {
    case REQUEST_ORDERS:
      return { orders: [], loading: true, error: null };
    case REQUEST_ORDERS_SUCCESS:
      return { orders: action.payload.orders, loading: false, error: null };
    case REQUEST_ORDERS_FAILURE:
      return { orders: [], loading: false, error: action.payload.message };
    case RESET_ORDERS:
      return { orders: [], loading: false, error: null };
    default:
      return state;
  }
};

export default orders;
