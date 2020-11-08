import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios, { AxiosRequestConfig } from 'axios';

import { RootState } from '../store';
import {
  REQUEST_ORDER_CREATE,
  REQUEST_ORDER_CREATE_SUCCESS,
  REQUEST_ORDER_CREATE_FAILURE,
  REQUEST_ORDER,
  REQUEST_ORDER_SUCCESS,
  REQUEST_ORDER_FAILURE,
  REQUEST_ORDER_PAY,
  REQUEST_ORDER_PAY_SUCCESS,
  REQUEST_ORDER_PAY_FAILURE,
} from './order-action-types';
import { CLEAR_CART_ITEMS } from './cart-action-types';
import { CartItem, ShippingAddress } from '../reducers/cart';
import { PayPalResponse } from '../../screens/OrderScreen/OrderScreen';

export const createOrder = (
  cartItems: CartItem[],
  shippingAddress: ShippingAddress,
  paymentMethod: string,
  itemsPrice: number,
  taxAmount: number,
  shippingPrice: number,
  totalPrice: number
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: REQUEST_ORDER_CREATE });

    const {
      user: { user },
    } = getState();

    const orderItems = cartItems.map((cartItem) => ({
      name: cartItem.name,
      quantity: cartItem.quantity,
      image: cartItem.image,
      price: cartItem.price,
      book: cartItem.id,
    }));

    const order = {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxAmount,
      shippingPrice,
      totalPrice,
    };

    const options: AxiosRequestConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: '/api/orders',
      data: order,
    };

    const { data } = await axios(options);

    dispatch({ type: REQUEST_ORDER_CREATE_SUCCESS, payload: { order: data } });
    dispatch({ type: CLEAR_CART_ITEMS });
    localStorage.setItem('cartItems', JSON.stringify([]));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_ORDER_CREATE_FAILURE, payload: { message } });
  }
};

export const getOrderById = (
  id: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: REQUEST_ORDER });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: `/api/orders/${id}`,
    };

    const { data } = await axios(options);

    dispatch({ type: REQUEST_ORDER_SUCCESS, payload: { order: data } });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_ORDER_FAILURE, payload: { message } });
  }
};

export const updateOrderByIdToPaid = (
  id: string,
  paymentResult: PayPalResponse
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: REQUEST_ORDER_PAY });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: `/api/orders/${id}/pay`,
      data: paymentResult,
    };

    const { data } = await axios(options);

    dispatch({ type: REQUEST_ORDER_PAY_SUCCESS, payload: { order: data } });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_ORDER_PAY_FAILURE, payload: { message } });
  }
};
