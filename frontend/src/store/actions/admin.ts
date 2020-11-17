import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios, { AxiosRequestConfig } from 'axios';

import { RootState } from '../store';
import {
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
} from './admin-action-types';

export const fetchUsers = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  try {
    dispatch({ type: REQUEST_USERS });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: '/api/users/',
    };

    const { data } = await axios(options);

    dispatch({ type: REQUEST_USERS_SUCCESS, payload: { users: data } });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_USERS_FAILURE, payload: { message } });
  }
};

export const fetchUser = (
  id: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: REQUEST_USER });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: `/api/users/${id}`,
    };

    const { data } = await axios(options);

    dispatch({ type: REQUEST_USER_SUCCESS, payload: { user: data } });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_USER_FAILURE, payload: { message } });
  }
};

export const updateUser = (
  id: string,
  name: string,
  isAdmin: boolean
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: REQUEST_USER_UPDATE });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: `/api/users/${id}`,
      data: { name, isAdmin },
    };

    const { data } = await axios(options);

    dispatch({ type: REQUEST_USER_UPDATE_SUCCESS, payload: { user: data } });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_USER_UPDATE_FAILURE, payload: { message } });
  }
};

export const deleteUser = (
  id: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: REQUEST_USER_DELETE });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: `/api/users/${id}`,
    };

    await axios(options);

    dispatch({ type: REQUEST_USER_DELETE_SUCCESS, payload: { userId: id } });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_USER_DELETE_FAILURE, payload: { message } });
  }
};
