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
  REQUEST_BOOK_CREATE,
  REQUEST_BOOK_CREATE_SUCCESS,
  REQUEST_BOOK_CREATE_FAILURE,
  REQUEST_BOOK_UPDATE,
  REQUEST_BOOK_UPDATE_SUCCESS,
  REQUEST_BOOK_UPDATE_FAILURE,
  REQUEST_BOOK_DELETE,
  REQUEST_BOOK_DELETE_SUCCESS,
  REQUEST_BOOK_DELETE_FAILURE,
  REQUEST_ORDERS,
  REQUEST_ORDERS_SUCCESS,
  REQUEST_ORDERS_FAILURE,
  REQUEST_ORDER_DELIVER,
  REQUEST_ORDER_DELIVER_SUCCESS,
  REQUEST_ORDER_DELIVER_FAILURE,
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
      url: '/api/users',
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

export const createBook = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  try {
    dispatch({ type: REQUEST_BOOK_CREATE });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: '/api/books',
    };

    const { data } = await axios(options);

    dispatch({ type: REQUEST_BOOK_CREATE_SUCCESS, payload: { book: data } });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_BOOK_CREATE_FAILURE, payload: { message } });
  }
};

export const updateBook = (
  id: string,
  name: string,
  image: string,
  description: string,
  authors: string,
  publishers: string,
  isbn: number,
  price: number,
  countInStock: number
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: REQUEST_BOOK_UPDATE });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: `/api/books/${id}`,
      data: {
        name,
        image,
        description,
        authors,
        publishers,
        isbn,
        price,
        countInStock,
      },
    };

    await axios(options);

    dispatch({ type: REQUEST_BOOK_UPDATE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_BOOK_UPDATE_FAILURE, payload: { message } });
  }
};

export const deleteBook = (
  id: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: REQUEST_BOOK_DELETE });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: `/api/books/${id}`,
    };

    await axios(options);

    dispatch({ type: REQUEST_BOOK_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_BOOK_DELETE_FAILURE, payload: { message } });
  }
};

export const fetchOrders = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  try {
    dispatch({ type: REQUEST_ORDERS });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: '/api/orders',
    };

    const { data } = await axios(options);

    dispatch({ type: REQUEST_ORDERS_SUCCESS, payload: { orders: data } });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_ORDERS_FAILURE, payload: { message } });
  }
};

export const updateOrderByIdToDelivered = (
  id: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: REQUEST_ORDER_DELIVER });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: `/api/orders/${id}/deliver`,
    };

    await axios(options);

    dispatch({ type: REQUEST_ORDER_DELIVER_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_ORDER_DELIVER_FAILURE, payload: { message } });
  }
};
