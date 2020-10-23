import { Book } from '../../models/book';
import {
  BooksActionTypes,
  REQUEST_BOOKS,
  REQUEST_BOOKS_SUCCESS,
  REQUEST_BOOKS_FAILURE,
} from '../actions/books-action-types';

export interface BooksState {
  readonly books: Book[];
  readonly loading: boolean;
  readonly error: string | null;
}

const initialState: BooksState = { books: [], loading: false, error: null };

const books = (state = initialState, action: BooksActionTypes) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return { books: [], loading: true, error: null };
    case REQUEST_BOOKS_SUCCESS:
      return { books: action.payload.books, loading: false, error: null };
    case REQUEST_BOOKS_FAILURE:
      return { books: [], loading: false, error: action.payload.message };
    default:
      return state;
  }
};

export default books;
