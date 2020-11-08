import { Order } from '../../models/order';

export const REQUEST_ORDER_CREATE = 'REQUEST_ORDER_CREATE';
export const REQUEST_ORDER_CREATE_SUCCESS = 'REQUEST_ORDER_CREATE_SUCCESS';
export const REQUEST_ORDER_CREATE_FAILURE = 'REQUEST_ORDER_CREATE_FAILURE';
export const REQUEST_ORDER = 'REQUEST_ORDER';
export const REQUEST_ORDER_SUCCESS = 'REQUEST_ORDER_SUCCESS';
export const REQUEST_ORDER_FAILURE = 'REQUEST_ORDER_FAILURE';
export const REQUEST_ORDER_PAY = 'REQUEST_ORDER_PAY';
export const REQUEST_ORDER_PAY_SUCCESS = 'REQUEST_ORDER_PAY_SUCCESS';
export const REQUEST_ORDER_PAY_FAILURE = 'REQUEST_ORDER_PAY_FAILURE';
export const RESET_ORDER = 'RESET_ORDER';

export interface RequestOrderCreateAction {
  type: typeof REQUEST_ORDER_CREATE;
}

export interface RequestOrderCreateSuccessAction {
  type: typeof REQUEST_ORDER_CREATE_SUCCESS;
  payload: { order: Order };
}

export interface RequestOrderCreateFailureAction {
  type: typeof REQUEST_ORDER_CREATE_FAILURE;
  payload: { message: string };
}

export interface RequestOrderAction {
  type: typeof REQUEST_ORDER;
}

export interface RequestOrderSuccessAction {
  type: typeof REQUEST_ORDER_SUCCESS;
  payload: { order: Order };
}

export interface RequestOrderFailureAction {
  type: typeof REQUEST_ORDER_FAILURE;
  payload: { message: string };
}

export interface RequestOrderPayAction {
  type: typeof REQUEST_ORDER_PAY;
}

export interface RequestOrderPaySuccessAction {
  type: typeof REQUEST_ORDER_PAY_SUCCESS;
  payload: { order: Order };
}

export interface RequestOrderPayFailureAction {
  type: typeof REQUEST_ORDER_PAY_FAILURE;
  payload: { message: string };
}

export interface ResetOrderAction {
  type: typeof RESET_ORDER;
}

export type OrderActionTypes =
  | RequestOrderCreateAction
  | RequestOrderCreateSuccessAction
  | RequestOrderCreateFailureAction
  | RequestOrderAction
  | RequestOrderSuccessAction
  | RequestOrderFailureAction
  | RequestOrderPayAction
  | RequestOrderPaySuccessAction
  | RequestOrderPayFailureAction
  | ResetOrderAction;
