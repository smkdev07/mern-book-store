import { User } from '../../models/user';
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
  RESET_ADMIN,
} from '../actions/admin-action-types';

export interface AdminState {
  readonly users: User[];
  readonly user: User | null;
  readonly loading: boolean;
  readonly error: string | null;
  readonly redirect: boolean;
}

const initialState: AdminState = {
  users: [],
  user: null,
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
      return { ...state, loading: true, error: null };
    case REQUEST_USER_DELETE_SUCCESS:
      const updatedUsers = state.users.filter(
        (user) => user._id !== action.payload.userId
      );
      return { ...state, users: updatedUsers, loading: false, error: null };
    case REQUEST_USER_DELETE_FAILURE:
      return { ...state, loading: false, error: action.payload.message };
    case RESET_ADMIN:
      return {
        users: [],
        user: null,
        loading: false,
        error: null,
        redirect: false,
      };
    default:
      return state;
  }
};

export default admin;
