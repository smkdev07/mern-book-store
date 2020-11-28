import { User } from '../../models/user';
import { Book } from '../../models/book';
import { Order } from '../../models/order';

export const REQUEST_USERS = 'REQUEST_USERS';
export const REQUEST_USERS_SUCCESS = 'REQUEST_USERS_SUCCESS';
export const REQUEST_USERS_FAILURE = 'REQUEST_USERS_FAILURE';
export const REQUEST_USER = 'REQUEST_USER';
export const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS';
export const REQUEST_USER_FAILURE = 'REQUEST_USER_FAILURE';
export const REQUEST_USER_UPDATE = 'REQUEST_USER_UPDATE';
export const REQUEST_USER_UPDATE_SUCCESS = 'REQUEST_USER_UPDATE_SUCCESS';
export const REQUEST_USER_UPDATE_FAILURE = 'REQUEST_USER_UPDATE_FAILURE';
export const REQUEST_USER_DELETE = 'REQUEST_USER_DELETE';
export const REQUEST_USER_DELETE_SUCCESS = 'REQUEST_USER_DELETE_SUCCESS';
export const REQUEST_USER_DELETE_FAILURE = 'REQUEST_USER_DELETE_FAILURE';
export const REQUEST_BOOK_CREATE = 'REQUEST_BOOK_CREATE';
export const REQUEST_BOOK_CREATE_SUCCESS = 'REQUEST_BOOK_CREATE_SUCCESS';
export const REQUEST_BOOK_CREATE_FAILURE = 'REQUEST_BOOK_CREATE_FAILURE';
export const REQUEST_BOOK_UPDATE = 'REQUEST_BOOK_UPDATE';
export const REQUEST_BOOK_UPDATE_SUCCESS = 'REQUEST_BOOK_UPDATE_SUCCESS';
export const REQUEST_BOOK_UPDATE_FAILURE = 'REQUEST_BOOK_UPDATE_FAILURE';
export const REQUEST_BOOK_DELETE = 'REQUEST_BOOK_DELETE';
export const REQUEST_BOOK_DELETE_SUCCESS = 'REQUEST_BOOK_DELETE_SUCCESS';
export const REQUEST_BOOK_DELETE_FAILURE = 'REQUEST_BOOK_DELETE_FAILURE';
export const REQUEST_BOOK_RESET = 'REQUEST_BOOK_RESET';
export const REQUEST_ORDERS = 'REQUEST_ORDERS';
export const REQUEST_ORDERS_SUCCESS = 'REQUEST_ORDERS_SUCCESS';
export const REQUEST_ORDERS_FAILURE = 'REQUEST_ORDERS_FAILURE';
export const REQUEST_ORDER_DELIVER = 'REQUEST_ORDER_DELIVER';
export const REQUEST_ORDER_DELIVER_SUCCESS = 'REQUEST_ORDER_DELIVER_SUCCESS';
export const REQUEST_ORDER_DELIVER_FAILURE = 'REQUEST_ORDER_DELIVER_FAILURE';
export const RESET_ADMIN = 'RESET_ADMIN';

export interface RequestUsersAction {
  type: typeof REQUEST_USERS;
}

export interface RequestUsersSuccessAction {
  type: typeof REQUEST_USERS_SUCCESS;
  payload: { users: User[] };
}

export interface RequestUsersFailureAction {
  type: typeof REQUEST_USERS_FAILURE;
  payload: { message: string };
}

export interface RequestUserAction {
  type: typeof REQUEST_USER;
}

export interface RequestUserSuccessAction {
  type: typeof REQUEST_USER_SUCCESS;
  payload: { user: User };
}

export interface RequestUserFailureAction {
  type: typeof REQUEST_USER_FAILURE;
  payload: { message: string };
}

export interface RequestUserUpdateAction {
  type: typeof REQUEST_USER_UPDATE;
}

export interface RequestUserUpdateSuccessAction {
  type: typeof REQUEST_USER_UPDATE_SUCCESS;
  payload: { user: User };
}

export interface RequestUserUpdateFailureAction {
  type: typeof REQUEST_USER_UPDATE_FAILURE;
  payload: { message: string };
}

export interface RequestUserDeleteAction {
  type: typeof REQUEST_USER_DELETE;
}

export interface RequestUserDeleteSuccessAction {
  type: typeof REQUEST_USER_DELETE_SUCCESS;
  payload: { userId: string };
}

export interface RequestUserDeleteFailureAction {
  type: typeof REQUEST_USER_DELETE_FAILURE;
  payload: { message: string };
}

export interface RequestBookCreateAction {
  type: typeof REQUEST_BOOK_CREATE;
}

export interface RequestBookCreateSuccessAction {
  type: typeof REQUEST_BOOK_CREATE_SUCCESS;
  payload: { book: Book };
}

export interface RequestBookCreateFailureAction {
  type: typeof REQUEST_BOOK_CREATE_FAILURE;
  payload: { message: string };
}

export interface RequestBookUpdateAction {
  type: typeof REQUEST_BOOK_UPDATE;
}

export interface RequestBookUpdateSuccessAction {
  type: typeof REQUEST_BOOK_UPDATE_SUCCESS;
}

export interface RequestBookUpdateFailureAction {
  type: typeof REQUEST_BOOK_UPDATE_FAILURE;
  payload: { message: string };
}

export interface RequestBookDeleteAction {
  type: typeof REQUEST_BOOK_DELETE;
}

export interface RequestBookDeleteSuccessAction {
  type: typeof REQUEST_BOOK_DELETE_SUCCESS;
}

export interface RequestBookDeleteFailureAction {
  type: typeof REQUEST_BOOK_DELETE_FAILURE;
  payload: { message: string };
}

export interface RequestBookResetAction {
  type: typeof REQUEST_BOOK_RESET;
}

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

export interface RequestOrderDeliverAction {
  type: typeof REQUEST_ORDER_DELIVER;
}

export interface RequestOrderDeliverSuccessAction {
  type: typeof REQUEST_ORDER_DELIVER_SUCCESS;
}

export interface RequestOrderDeliverFailureAction {
  type: typeof REQUEST_ORDER_DELIVER_FAILURE;
  payload: { message: string };
}

export interface ResetAdminAction {
  type: typeof RESET_ADMIN;
}

export type AdminActionTypes =
  | RequestUsersAction
  | RequestUsersSuccessAction
  | RequestUsersFailureAction
  | RequestUserAction
  | RequestUserSuccessAction
  | RequestUserFailureAction
  | RequestUserUpdateAction
  | RequestUserUpdateSuccessAction
  | RequestUserUpdateFailureAction
  | RequestUserDeleteAction
  | RequestUserDeleteSuccessAction
  | RequestUserDeleteFailureAction
  | RequestBookCreateAction
  | RequestBookCreateSuccessAction
  | RequestBookCreateFailureAction
  | RequestBookUpdateAction
  | RequestBookUpdateSuccessAction
  | RequestBookUpdateFailureAction
  | RequestBookDeleteAction
  | RequestBookDeleteSuccessAction
  | RequestBookDeleteFailureAction
  | RequestBookResetAction
  | RequestOrdersAction
  | RequestOrdersSuccessAction
  | RequestOrdersFailureAction
  | RequestOrderDeliverAction
  | RequestOrderDeliverSuccessAction
  | RequestOrderDeliverFailureAction
  | ResetAdminAction;
