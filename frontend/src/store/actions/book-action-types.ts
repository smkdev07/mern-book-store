import { Book } from '../../models/book';

export const REQUEST_BOOK = 'REQUEST_BOOK';
export const REQUEST_BOOK_SUCCESS = 'REQUEST_BOOK_SUCCESS';
export const REQUEST_BOOK_FAILURE = 'REQUEST_BOOK_FAILURE';

export interface RequestBookAction {
  type: typeof REQUEST_BOOK;
}

export interface RequestBookSuccessAction {
  type: typeof REQUEST_BOOK_SUCCESS;
  payload: { book: Book };
}

export interface RequestBookFailureAction {
  type: typeof REQUEST_BOOK_FAILURE;
  payload: { message: string };
}

export type BookActionTypes =
  | RequestBookAction
  | RequestBookSuccessAction
  | RequestBookFailureAction;
