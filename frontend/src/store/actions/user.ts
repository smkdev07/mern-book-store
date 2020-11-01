import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios, { AxiosRequestConfig } from 'axios';

import { RootState } from '../store';
import {
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
} from './user-action-types';

export const signIn = (
  email: string,
  password: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    dispatch({ type: REQUEST_USER_SIGNIN });

    const options: AxiosRequestConfig = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      url: '/api/users/login',
      data: { email, password },
    };

    const { data } = await axios(options);

    dispatch({ type: REQUEST_USER_SIGNIN_SUCCESS, payload: { user: data } });

    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_USER_SIGNIN_FAILURE, payload: { message } });
  }
};

export const signOut = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  dispatch({ type: USER_SIGNOUT });
  localStorage.removeItem('user');
};

export const signUp = (
  name: string,
  email: string,
  password: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    dispatch({ type: REQUEST_USER_SIGNUP });

    const options: AxiosRequestConfig = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      url: '/api/users',
      data: { name, email, password },
    };

    const { data } = await axios(options);

    dispatch({ type: REQUEST_USER_SIGNUP_SUCCESS, payload: { user: data } });

    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_USER_SIGNUP_FAILURE, payload: { message } });
  }
};

export const getUserProfile = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  try {
    dispatch({ type: REQUEST_USER_PROFILE });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: '/api/users/profile',
    };

    const { data } = await axios(options);

    dispatch({ type: REQUEST_USER_PROFILE_SUCCESS, payload: { user: data } });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_USER_PROFILE_FAILURE, payload: { message } });
  }
};

export const updatetUserProfile = (
  name: string,
  password: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: REQUEST_USER_UPDATE_PROFILE });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: '/api/users/profile',
      data: { name, password },
    };

    const { data } = await axios(options);

    dispatch({ type: REQUEST_USER_PROFILE_SUCCESS, payload: { user: data } });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_USER_PROFILE_FAILURE, payload: { message } });
  }
};
