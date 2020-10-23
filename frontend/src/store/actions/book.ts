import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { RootState } from '../store';
import {
  REQUEST_BOOK,
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAILURE,
} from './book-action-types';

export const fetchBook = (
  id: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    dispatch({ type: REQUEST_BOOK });

    const { data } = await axios.get(`/api/books/${id}`);

    dispatch({ type: REQUEST_BOOK_SUCCESS, payload: { book: data } });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_BOOK_FAILURE, payload: { message } });
  }
};
