import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios, { AxiosRequestConfig } from 'axios';

import { RootState } from '../store';
import {
  REQUEST_BOOK,
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAILURE,
  REQUEST_BOOK_REVIEW_CREATE,
  REQUEST_BOOK_REVIEW_CREATE_SUCCESS,
  REQUEST_BOOK_REVIEW_CREATE_FAILURE,
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

export const createBookReview = (
  id: string,
  rating: number,
  comment: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: REQUEST_BOOK_REVIEW_CREATE });

    const {
      user: { user },
    } = getState();

    const options: AxiosRequestConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      url: `/api/books/${id}/review`,
      data: { rating, comment },
    };

    await axios(options);

    dispatch({ type: REQUEST_BOOK_REVIEW_CREATE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: REQUEST_BOOK_REVIEW_CREATE_FAILURE,
      payload: { message },
    });
  }
};
