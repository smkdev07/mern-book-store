import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { RootState } from '../store';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from './cart-action-types';

export const addToCart = (
  id: string,
  quantity: number
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  // error handling with try catch ?
  const { data } = await axios.get(`/api/books/${id}`);

  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: {
      item: {
        id: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        quantity,
      },
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (
  id: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  dispatch({ type: REMOVE_ITEM_FROM_CART, payload: { itemId: id } });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
