import { Book } from '../../models/book';
import {
  BookActionTypes,
  REQUEST_BOOK,
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAILURE,
} from '../actions/book-action-types';

export interface BookState {
  readonly book: Book;
  readonly loading: boolean;
  readonly error: string | null;
}

const emptyBook: Book = {
  _id: '',
  __v: 0,
  user: '',
  name: '',
  image: '',
  description: '',
  authors: '',
  publishers: '',
  isbn: 0,
  price: 0,
  countInStock: 0,
  reviews: [],
  rating: 0,
  numReviews: 0,
  createdAt: '',
  updatedAt: '',
};

const initialState: BookState = {
  book: emptyBook,
  loading: false,
  error: null,
};

const book = (state = initialState, action: BookActionTypes) => {
  switch (action.type) {
    case REQUEST_BOOK:
      return { book: emptyBook, loading: true, error: null };
    case REQUEST_BOOK_SUCCESS:
      return { book: action.payload.book, loading: false, error: null };
    case REQUEST_BOOK_FAILURE:
      return { book: emptyBook, loading: false, error: action.payload.message };
    default:
      return state;
  }
};

export default book;
