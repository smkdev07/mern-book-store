import { User } from '../../models/user';

export const REQUEST_USER_SIGNIN = 'REQUEST_USER_SIGNIN';
export const REQUEST_USER_SIGNIN_SUCCESS = 'REQUEST_USER_SIGNIN_SUCCESS';
export const REQUEST_USER_SIGNIN_FAILURE = 'REQUEST_USER_SIGNIN_FAILURE';
export const USER_SIGNOUT = 'USER_SIGNOUT';
export const REQUEST_USER_SIGNUP = 'REQUEST_USER_SIGNUP';
export const REQUEST_USER_SIGNUP_SUCCESS = 'REQUEST_USER_SIGNUP_SUCCESS';
export const REQUEST_USER_SIGNUP_FAILURE = 'REQUEST_USER_SIGNUP_FAILURE';
export const REQUEST_USER_PROFILE = 'REQUEST_USER_PROFILE';
export const REQUEST_USER_UPDATE_PROFILE = 'REQUEST_USER_UPDATE_PROFILE';
export const REQUEST_USER_PROFILE_SUCCESS = 'REQUEST_USER_PROFILE_SUCCESS';
export const REQUEST_USER_PROFILE_FAILURE = 'REQUEST_USER_PROFILE_FAILURE';

export interface RequestUserSignInAction {
  type: typeof REQUEST_USER_SIGNIN;
}

export interface RequestUserSignInSuccessAction {
  type: typeof REQUEST_USER_SIGNIN_SUCCESS;
  payload: { user: User };
}

export interface RequestUserSignInFailureAction {
  type: typeof REQUEST_USER_SIGNIN_FAILURE;
  payload: { message: string };
}

export interface UserSignOutAction {
  type: typeof USER_SIGNOUT;
}

export interface RequestUserSignUpAction {
  type: typeof REQUEST_USER_SIGNUP;
}

export interface RequestUserSignUpSuccessAction {
  type: typeof REQUEST_USER_SIGNUP_SUCCESS;
  payload: { user: User };
}

export interface RequestUserSignUpFailureAction {
  type: typeof REQUEST_USER_SIGNUP_FAILURE;
  payload: { message: string };
}

export interface RequestUserProfileAction {
  type: typeof REQUEST_USER_PROFILE;
}

export interface RequestUserUpdateProfileAction {
  type: typeof REQUEST_USER_UPDATE_PROFILE;
  payload: { user: User };
}

export interface RequestUserProfileSuccessAction {
  type: typeof REQUEST_USER_PROFILE_SUCCESS;
  payload: { user: User };
}

export interface RequestUserProfileFailureAction {
  type: typeof REQUEST_USER_PROFILE_FAILURE;
  payload: { message: string };
}

export type UserActionTypes =
  | RequestUserSignInAction
  | RequestUserSignInSuccessAction
  | RequestUserSignInFailureAction
  | UserSignOutAction
  | RequestUserSignUpAction
  | RequestUserSignUpSuccessAction
  | RequestUserSignUpFailureAction
  | RequestUserProfileAction
  | RequestUserUpdateProfileAction
  | RequestUserProfileSuccessAction
  | RequestUserProfileFailureAction;
