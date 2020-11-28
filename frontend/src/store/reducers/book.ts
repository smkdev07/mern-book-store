import { Book } from '../../models/book';
import {
  BookActionTypes,
  REQUEST_BOOK,
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAILURE,
  REQUEST_BOOK_RESET,
} from '../actions/book-action-types';

export interface BookState {
  readonly book: Book | null;
  readonly loading: boolean;
  readonly error: string | null;
}

const initialState: BookState = {
  book: null,
  loading: false,
  error: null,
};

const book = (state = initialState, action: BookActionTypes) => {
  switch (action.type) {
    case REQUEST_BOOK:
      return { book: null, loading: true, error: null };
    case REQUEST_BOOK_SUCCESS:
      return { book: action.payload.book, loading: false, error: null };
    case REQUEST_BOOK_FAILURE:
      return { book: null, loading: false, error: action.payload.message };
    case REQUEST_BOOK_RESET:
      return { book: null, loading: false, error: null };
    default:
      return state;
  }
};

export default book;
