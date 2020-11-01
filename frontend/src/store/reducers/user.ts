import { User } from '../../models/user';
import {
  UserActionTypes,
  REQUEST_USER_SIGNIN,
  REQUEST_USER_SIGNIN_SUCCESS,
  REQUEST_USER_SIGNIN_FAILURE,
  USER_SIGNOUT,
  REQUEST_USER_SIGNUP,
  REQUEST_USER_SIGNUP_SUCCESS,
  REQUEST_USER_SIGNUP_FAILURE,
  REQUEST_USER_PROFILE,
  REQUEST_USER_UPDATE_PROFILE,
  REQUEST_USER_PROFILE_SUCCESS,
  REQUEST_USER_PROFILE_FAILURE,
} from '../actions/user-action-types';

export interface UserState {
  readonly user: User | null;
  readonly loading: boolean;
  readonly error: string | null;
}

const initialState: UserState = { user: null, loading: false, error: null };

const user = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case REQUEST_USER_SIGNIN:
      return { user: null, loading: true, error: null };
    case REQUEST_USER_SIGNIN_SUCCESS:
      return { user: action.payload.user, loading: false, error: null };
    case REQUEST_USER_SIGNIN_FAILURE:
      return { user: null, loading: false, error: action.payload.message };
    case USER_SIGNOUT:
      return { user: null, loading: false, error: null };
    case REQUEST_USER_SIGNUP:
      return { user: null, loading: true, error: null };
    case REQUEST_USER_SIGNUP_SUCCESS:
      return { user: action.payload.user, loading: false, error: null };
    case REQUEST_USER_SIGNUP_FAILURE:
      return { user: null, loading: false, error: action.payload.message };
    case REQUEST_USER_PROFILE:
      return { ...state, loading: true, error: null };
    case REQUEST_USER_UPDATE_PROFILE:
      return { ...state, loading: true, error: null };
    case REQUEST_USER_PROFILE_SUCCESS:
      return {
        user: { ...state.user, ...action.payload.user },
        loading: false,
        error: null,
      };
    case REQUEST_USER_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.payload.message };
    default:
      return state;
  }
};

export default user;
