import bookReducer from './book';
import {
  REQUEST_BOOK,
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAILURE,
} from '../actions/book-action-types';

const emptyBook = {
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

const mockReturnedBook = {
  _id: 'book',
  __v: 0,
  user: 'test user',
  name: 'Test Book',
  image: 'test book image',
  description: 'test book description',
  authors: 'Test Author',
  publishers: 'Test Publisher',
  isbn: 12345,
  price: 50,
  countInStock: 10,
  reviews: [],
  rating: 4,
  numReviews: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const mockReturnedErrorMessage = 'Test Error Message';

describe('book reducer', () => {
  it('returns updated book state for action type REQUEST_BOOK', () => {
    const initialBookState = { book: emptyBook, loading: false, error: null };
    const updatedBookState = bookReducer(initialBookState, {
      type: REQUEST_BOOK,
    });
    const expectedBookState = { book: emptyBook, loading: true, error: null };

    expect(updatedBookState).toEqual(expectedBookState);
  });

  it('returns updated book state for action type REQUEST_BOOK_SUCCESS', () => {
    const initialBookState = { book: emptyBook, loading: true, error: null };
    const updatedBookState = bookReducer(initialBookState, {
      type: REQUEST_BOOK_SUCCESS,
      payload: { book: mockReturnedBook },
    });
    const expectedBookState = {
      book: mockReturnedBook,
      loading: false,
      error: null,
    };

    expect(updatedBookState).toEqual(expectedBookState);
  });

  it('returns updated book state for action type REQUEST_BOOK_FAILURE', () => {
    const initialBookState = { book: emptyBook, loading: true, error: null };
    const updatedBookState = bookReducer(initialBookState, {
      type: REQUEST_BOOK_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedBookState = {
      book: emptyBook,
      loading: false,
      error: mockReturnedErrorMessage,
    };

    expect(updatedBookState).toEqual(expectedBookState);
  });
});
