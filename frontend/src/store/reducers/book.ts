import { Book } from '../../models/book';
import {
  BookActionTypes,
  REQUEST_BOOK,
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAILURE,
  REQUEST_BOOK_REVIEW_CREATE,
  REQUEST_BOOK_REVIEW_CREATE_SUCCESS,
  REQUEST_BOOK_REVIEW_CREATE_FAILURE,
  REQUEST_BOOK_RESET,
} from '../actions/book-action-types';

export interface BookState {
  readonly book: Book | null;
  readonly loading: boolean;
  readonly error: string | null;
  readonly bookReviewCreated: boolean;
  readonly bookReviewError: string | null;
}

const initialState: BookState = {
  book: null,
  loading: false,
  error: null,
  bookReviewCreated: false,
  bookReviewError: null,
};

const book = (state = initialState, action: BookActionTypes) => {
  switch (action.type) {
    case REQUEST_BOOK:
      return {
        book: null,
        loading: true,
        error: null,
        bookReviewCreated: false,
        bookReviewError: null,
      };
    case REQUEST_BOOK_SUCCESS:
      return {
        book: action.payload.book,
        loading: false,
        error: null,
        bookReviewCreated: false,
        bookReviewError: null,
      };
    case REQUEST_BOOK_FAILURE:
      return {
        book: null,
        loading: false,
        error: action.payload.message,
        bookReviewCreated: false,
        bookReviewError: null,
      };
    case REQUEST_BOOK_REVIEW_CREATE:
      return {
        ...state,
        loading: true,
        bookReviewCreated: false,
        bookReviewError: null,
      };
    case REQUEST_BOOK_REVIEW_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        bookReviewCreated: true,
        bookReviewError: null,
      };
    case REQUEST_BOOK_REVIEW_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        bookReviewCreated: false,
        bookReviewError: action.payload.message,
      };
    case REQUEST_BOOK_RESET:
      return {
        book: null,
        loading: false,
        error: null,
        bookReviewCreated: false,
        bookReviewError: null,
      };
    default:
      return state;
  }
};

export default book;
