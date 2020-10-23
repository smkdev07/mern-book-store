import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import books from './reducers/books';
import book from './reducers/book';

const rootReducer = combineReducers({
  books,
  book,
});

export type RootState = ReturnType<typeof rootReducer>;

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
