import { Order } from '../../models/order';

export const REQUEST_ORDERS = 'REQUEST_ORDERS';
export const REQUEST_ORDERS_SUCCESS = 'REQUEST_ORDERS_SUCCESS';
export const REQUEST_ORDERS_FAILURE = 'REQUEST_ORDERS_FAILURE';
export const RESET_ORDERS = 'RESET_ORDERS';

export interface RequestOrdersAction {
  type: typeof REQUEST_ORDERS;
}

export interface RequestOrdersSuccessAction {
  type: typeof REQUEST_ORDERS_SUCCESS;
  payload: { orders: Order[] };
}

export interface RequestOrdersFailureAction {
  type: typeof REQUEST_ORDERS_FAILURE;
  payload: { message: string };
}

export interface ResetOrdersAction {
  type: typeof RESET_ORDERS;
}

export type OrdersActionTypes =
  | RequestOrdersAction
  | RequestOrdersSuccessAction
  | RequestOrdersFailureAction
  | ResetOrdersAction;
