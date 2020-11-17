import { User } from '../../models/user';

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
  | ResetAdminAction;
