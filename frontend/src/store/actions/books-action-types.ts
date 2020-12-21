import { Book } from '../../models/book';

export const REQUEST_BOOKS = 'REQUEST_BOOKS';
export const REQUEST_BOOKS_SUCCESS = 'REQUEST_BOOKS_SUCCESS';
export const REQUEST_BOOKS_FAILURE = 'REQUEST_BOOKS_FAILURE';

export interface RequestBooksAction {
  type: typeof REQUEST_BOOKS;
}

export interface RequestBooksSuccessAction {
  type: typeof REQUEST_BOOKS_SUCCESS;
  payload: { page: number, pages: number, books: Book[] };
}

export interface RequestBooksFailureAction {
  type: typeof REQUEST_BOOKS_FAILURE;
  payload: { message: string };
}

export type BooksActionTypes =
  | RequestBooksAction
  | RequestBooksSuccessAction
  | RequestBooksFailureAction;
