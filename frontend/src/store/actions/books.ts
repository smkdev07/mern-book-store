import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { RootState } from '../store';
import {
  REQUEST_BOOKS,
  REQUEST_BOOKS_SUCCESS,
  REQUEST_BOOKS_FAILURE,
} from './books-action-types';

export const fetchBooks = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_BOOKS });

    const { data } = await axios.get('/api/books');

    dispatch({ type: REQUEST_BOOKS_SUCCESS, payload: { books: data } });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_BOOKS_FAILURE, payload: { message } });
  }
};
