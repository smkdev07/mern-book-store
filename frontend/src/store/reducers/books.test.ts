import booksReducer from './books';
import {
  REQUEST_BOOKS,
  REQUEST_BOOKS_SUCCESS,
  REQUEST_BOOKS_FAILURE,
} from '../actions/books-action-types';

const mockReturnedBooks = [
  {
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
  },
];

const mockReturnedErrorMessage = 'Test Error Message';

describe('books reducer', () => {
  it('returns updated books state for action type REQUEST_BOOKS', () => {
    const initialBooksState = { books: [], loading: false, error: null };
    const updatedBooksState = booksReducer(initialBooksState, {
      type: REQUEST_BOOKS,
    });
    const expectedBooksState = { books: [], loading: true, error: null };

    expect(updatedBooksState).toEqual(expectedBooksState);
  });

  it('returns updated books state for action type REQUEST_BOOKS_SUCCESS', () => {
    const initialBooksState = { books: [], loading: true, error: null };
    const updatedBooksState = booksReducer(initialBooksState, {
      type: REQUEST_BOOKS_SUCCESS,
      payload: { books: mockReturnedBooks },
    });
    const expectedBooksState = {
      books: mockReturnedBooks,
      loading: false,
      error: null,
    };

    expect(updatedBooksState).toEqual(expectedBooksState);
  });

  it('returns updated books state for action type REQUEST_BOOKS_FAILURE', () => {
    const initialBooksState = { books: [], loading: true, error: null };
    const updatedBooksState = booksReducer(initialBooksState, {
      type: REQUEST_BOOKS_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedBooksState = {
      books: [],
      loading: false,
      error: mockReturnedErrorMessage,
    };

    expect(updatedBooksState).toEqual(expectedBooksState);
  });
});
