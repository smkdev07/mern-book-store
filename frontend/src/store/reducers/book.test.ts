import bookReducer from './book';
import {
  REQUEST_BOOK,
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAILURE,
  REQUEST_BOOK_REVIEW_CREATE,
  REQUEST_BOOK_REVIEW_CREATE_SUCCESS,
  REQUEST_BOOK_REVIEW_CREATE_FAILURE,
  REQUEST_BOOK_RESET,
} from '../actions/book-action-types';

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
    const initialBookState = {
      book: null,
      loading: false,
      error: null,
      bookReviewCreated: false,
      bookReviewError: null,
    };
    const updatedBookState = bookReducer(initialBookState, {
      type: REQUEST_BOOK,
    });
    const expectedBookState = {
      book: null,
      loading: true,
      error: null,
      bookReviewCreated: false,
      bookReviewError: null,
    };

    expect(updatedBookState).toEqual(expectedBookState);
  });

  it('returns updated book state for action type REQUEST_BOOK_SUCCESS', () => {
    const initialBookState = {
      book: null,
      loading: true,
      error: null,
      bookReviewCreated: false,
      bookReviewError: null,
    };
    const updatedBookState = bookReducer(initialBookState, {
      type: REQUEST_BOOK_SUCCESS,
      payload: { book: mockReturnedBook },
    });
    const expectedBookState = {
      book: mockReturnedBook,
      loading: false,
      error: null,
      bookReviewCreated: false,
      bookReviewError: null,
    };

    expect(updatedBookState).toEqual(expectedBookState);
  });

  it('returns updated book state for action type REQUEST_BOOK_FAILURE', () => {
    const initialBookState = {
      book: null,
      loading: true,
      error: null,
      bookReviewCreated: false,
      bookReviewError: null,
    };
    const updatedBookState = bookReducer(initialBookState, {
      type: REQUEST_BOOK_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedBookState = {
      book: null,
      loading: false,
      error: mockReturnedErrorMessage,
      bookReviewCreated: false,
      bookReviewError: null,
    };

    expect(updatedBookState).toEqual(expectedBookState);
  });

  it('returns updated book state for action type REQUEST_BOOK_REVIEW_CREATE', () => {
    const initialBookState = {
      book: mockReturnedBook,
      loading: false,
      error: null,
      bookReviewCreated: false,
      bookReviewError: null,
    };
    const updatedBookState = bookReducer(initialBookState, {
      type: REQUEST_BOOK_REVIEW_CREATE,
    });
    const expectedBookState = {
      book: mockReturnedBook,
      loading: true,
      error: null,
      bookReviewCreated: false,
      bookReviewError: null,
    };

    expect(updatedBookState).toEqual(expectedBookState);
  });

  it('returns updated book state for action type REQUEST_BOOK_REVIEW_CREATE_SUCCESS', () => {
    const initialBookState = {
      book: mockReturnedBook,
      loading: true,
      error: null,
      bookReviewCreated: false,
      bookReviewError: null,
    };
    const updatedBookState = bookReducer(initialBookState, {
      type: REQUEST_BOOK_REVIEW_CREATE_SUCCESS,
    });
    const expectedBookState = {
      book: mockReturnedBook,
      loading: false,
      error: null,
      bookReviewCreated: true,
      bookReviewError: null,
    };

    expect(updatedBookState).toEqual(expectedBookState);
  });

  it('returns updated book state for action type REQUEST_BOOK_REVIEW_CREATE_FAILURE', () => {
    const initialBookState = {
      book: mockReturnedBook,
      loading: true,
      error: null,
      bookReviewCreated: false,
      bookReviewError: null,
    };
    const updatedBookState = bookReducer(initialBookState, {
      type: REQUEST_BOOK_REVIEW_CREATE_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedBookState = {
      book: mockReturnedBook,
      loading: false,
      error: null,
      bookReviewCreated: false,
      bookReviewError: mockReturnedErrorMessage,
    };

    expect(updatedBookState).toEqual(expectedBookState);
  });

  it('returns updated book state for action type REQUEST_BOOK_RESET', () => {
    const initialBookState = {
      book: mockReturnedBook,
      loading: false,
      error: mockReturnedErrorMessage,
      bookReviewCreated: true,
      bookReviewError: mockReturnedErrorMessage,
    };
    const updatedBookState = bookReducer(initialBookState, {
      type: REQUEST_BOOK_RESET,
    });
    const expectedBookState = {
      book: null,
      loading: false,
      error: null,
      bookReviewCreated: false,
      bookReviewError: null,
    };

    expect(updatedBookState).toEqual(expectedBookState);
  });
});
