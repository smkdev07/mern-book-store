import { User } from '../../models/user';
import { Book } from '../../models/book';
import { Order } from '../../models/order';
import {
  AdminActionTypes,
  REQUEST_USERS,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILURE,
  REQUEST_USER,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_FAILURE,
  REQUEST_USER_UPDATE,
  REQUEST_USER_UPDATE_SUCCESS,
  REQUEST_USER_UPDATE_FAILURE,
  REQUEST_USER_DELETE,
  REQUEST_USER_DELETE_SUCCESS,
  REQUEST_USER_DELETE_FAILURE,
  REQUEST_BOOK_CREATE,
  REQUEST_BOOK_CREATE_SUCCESS,
  REQUEST_BOOK_CREATE_FAILURE,
  REQUEST_BOOK_UPDATE,
  REQUEST_BOOK_UPDATE_SUCCESS,
  REQUEST_BOOK_UPDATE_FAILURE,
  REQUEST_BOOK_DELETE,
  REQUEST_BOOK_DELETE_SUCCESS,
  REQUEST_BOOK_DELETE_FAILURE,
  REQUEST_BOOK_RESET,
  REQUEST_ORDERS,
  REQUEST_ORDERS_SUCCESS,
  REQUEST_ORDERS_FAILURE,
  REQUEST_ORDER_DELIVER,
  REQUEST_ORDER_DELIVER_SUCCESS,
  REQUEST_ORDER_DELIVER_FAILURE,
  RESET_ADMIN,
} from '../actions/admin-action-types';

export interface AdminState {
  readonly users: User[];
  readonly user: User | null;
  readonly book: Book | null;
  readonly orders: Order[];
  readonly loading: boolean;
  readonly error: string | null;
  readonly redirect: boolean;
}

const initialState: AdminState = {
  users: [],
  user: null,
  book: null,
  orders: [],
  loading: false,
  error: null,
  redirect: false,
};

const admin = (state = initialState, action: AdminActionTypes) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        users: [],
        loading: true,
        error: null,
        redirect: false,
      };
    case REQUEST_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        loading: false,
        error: null,
        redirect: false,
      };
    case REQUEST_USERS_FAILURE:
      return {
        ...state,
        users: [],
        loading: false,
        error: action.payload.message,
        redirect: false,
      };
    case REQUEST_USER:
      return {
        ...state,
        user: null,
        loading: true,
        error: null,
        redirect: false,
      };
    case REQUEST_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: null,
        redirect: false,
      };
    case REQUEST_USER_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload.message,
        redirect: false,
      };
    case REQUEST_USER_UPDATE:
      return {
        ...state,
        user: null,
        loading: true,
        error: null,
        redirect: false,
      };
    case REQUEST_USER_UPDATE_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: null,
        redirect: true,
      };
    case REQUEST_USER_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        redirect: false,
      };
    case REQUEST_USER_DELETE:
      return { ...state, loading: true, error: null, redirect: false };
    case REQUEST_USER_DELETE_SUCCESS:
      const updatedUsers = state.users.filter(
        (user) => user._id !== action.payload.userId
      );
      return {
        ...state,
        users: updatedUsers,
        loading: false,
        error: null,
        redirect: false,
      };
    case REQUEST_USER_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        redirect: false,
      };
    case REQUEST_BOOK_CREATE:
      return {
        ...state,
        book: null,
        loading: true,
        error: null,
        redirect: false,
      };
    case REQUEST_BOOK_CREATE_SUCCESS:
      return {
        ...state,
        book: action.payload.book,
        loading: false,
        error: null,
        redirect: false,
      };
    case REQUEST_BOOK_CREATE_FAILURE:
      return {
        ...state,
        book: null,
        loading: false,
        error: action.payload.message,
        redirect: false,
      };
    case REQUEST_BOOK_UPDATE:
      return {
        ...state,
        book: null,
        loading: true,
        error: null,
        redirect: false,
      };
    case REQUEST_BOOK_UPDATE_SUCCESS:
      return {
        ...state,
        book: null,
        loading: false,
        error: null,
        redirect: true,
      };
    case REQUEST_BOOK_UPDATE_FAILURE:
      return {
        ...state,
        book: null,
        loading: false,
        error: action.payload.message,
        redirect: false,
      };
    case REQUEST_BOOK_DELETE:
      return {
        ...state,
        book: null,
        loading: true,
        error: null,
        redirect: false,
      };
    case REQUEST_BOOK_DELETE_SUCCESS:
      return {
        ...state,
        book: null,
        loading: false,
        error: null,
        redirect: true,
      };
    case REQUEST_BOOK_DELETE_FAILURE:
      return {
        ...state,
        book: null,
        loading: false,
        error: action.payload.message,
        redirect: false,
      };
    case REQUEST_BOOK_RESET:
      return {
        ...state,
        book: null,
        loading: false,
        error: null,
        redirect: false,
      };
    case REQUEST_ORDERS:
      return {
        ...state,
        orders: [],
        loading: true,
        error: null,
        redirect: false,
      };
    case REQUEST_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload.orders,
        loading: false,
        error: null,
        redirect: false,
      };
    case REQUEST_ORDERS_FAILURE:
      return {
        ...state,
        orders: [],
        loading: false,
        error: action.payload.message,
        redirect: false,
      };
    case REQUEST_ORDER_DELIVER:
      return {
        ...state,
        orders: [],
        loading: true,
        error: null,
        redirect: false,
      };
    case REQUEST_ORDER_DELIVER_SUCCESS:
      return {
        ...state,
        orders: [],
        loading: false,
        error: null,
        redirect: true,
      };
    case REQUEST_ORDER_DELIVER_FAILURE:
      return {
        ...state,
        orders: [],
        loading: false,
        error: action.payload.message,
        redirect: false,
      };
    case RESET_ADMIN:
      return {
        users: [],
        user: null,
        book: null,
        orders: [],
        loading: false,
        error: null,
        redirect: false,
      };
    default:
      return state;
  }
};

export default admin;
