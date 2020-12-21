import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { RootState } from '../store';
import {
  REQUEST_BOOKS,
  REQUEST_BOOKS_SUCCESS,
  REQUEST_BOOKS_FAILURE,
} from './books-action-types';

export const fetchBooks = (
  searchTerm = '',
  page = 1,
  limit = 10
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    dispatch({ type: REQUEST_BOOKS });

    const { data } = await axios.get(
      `/api/books?searchTerm=${searchTerm}&page=${page}&limit=${limit}`
    );

    dispatch({
      type: REQUEST_BOOKS_SUCCESS,
      payload: { page: data.page, pages: data.pages, books: data.books },
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: REQUEST_BOOKS_FAILURE, payload: { message } });
  }
};
