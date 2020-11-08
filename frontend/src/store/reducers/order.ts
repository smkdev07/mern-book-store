import { Order } from '../../models/order';
import {
  OrderActionTypes,
  REQUEST_ORDER_CREATE,
  REQUEST_ORDER_CREATE_SUCCESS,
  REQUEST_ORDER_CREATE_FAILURE,
  REQUEST_ORDER,
  REQUEST_ORDER_SUCCESS,
  REQUEST_ORDER_FAILURE,
  REQUEST_ORDER_PAY,
  REQUEST_ORDER_PAY_SUCCESS,
  REQUEST_ORDER_PAY_FAILURE,
  RESET_ORDER,
} from '../actions/order-action-types';

export interface OrderState {
  readonly order: Order | null;
  readonly loading: boolean;
  readonly error: string | null;
  readonly redirect: boolean;
}

const initialState: OrderState = {
  order: null,
  loading: false,
  error: null,
  redirect: false,
};

const order = (state = initialState, action: OrderActionTypes) => {
  switch (action.type) {
    case REQUEST_ORDER_CREATE:
      return { order: null, loading: true, error: null, redirect: false };
    case REQUEST_ORDER_CREATE_SUCCESS:
      return {
        order: action.payload.order,
        loading: false,
        error: null,
        redirect: true,
      };
    case REQUEST_ORDER_CREATE_FAILURE:
      return {
        order: null,
        loading: false,
        error: action.payload.message,
        redirect: false,
      };
    case REQUEST_ORDER:
      return { order: null, loading: true, error: null, redirect: false };
    case REQUEST_ORDER_SUCCESS:
      return {
        order: action.payload.order,
        loading: false,
        error: null,
        redirect: false,
      };
    case REQUEST_ORDER_FAILURE:
      return {
        order: null,
        loading: false,
        error: action.payload.message,
        redirect: false,
      };
    case REQUEST_ORDER_PAY:
      return { order: null, loading: true, error: null, redirect: false };
    case REQUEST_ORDER_PAY_SUCCESS:
      return {
        order: action.payload.order,
        loading: false,
        error: null,
        redirect: false,
      };
    case REQUEST_ORDER_PAY_FAILURE:
      return {
        order: null,
        loading: false,
        error: action.payload.message,
        redirect: false,
      };
    case RESET_ORDER:
      return { order: null, loading: false, error: null, redirect: false };
    default:
      return state;
  }
};

export default order;
