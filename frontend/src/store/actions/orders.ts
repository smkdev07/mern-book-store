import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios, { AxiosRequestConfig } from 'axios';

import { RootState } from '../store';
import {
  REQUEST_ORDERS,
  REQUEST_ORDERS_SUCCESS,
  REQUEST_ORDERS_FAILURE,
} from './orders-action-types';

export const getUsersOrders = (): ThunkAction<
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
      url: '/api/orders/userorders',
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
