import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import books from './reducers/books';
import book from './reducers/book';
import cart from './reducers/cart';
import user from './reducers/user';

const rootReducer = combineReducers({
  books,
  book,
  cart,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;

const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
const initialCartItems = cartItemsFromLocalStorage
  ? JSON.parse(cartItemsFromLocalStorage)
  : [];

const userFromLocalStorage = localStorage.getItem('user');
const initialUser = userFromLocalStorage
  ? JSON.parse(userFromLocalStorage)
  : null;

const initialState = {
  cart: { cartItems: initialCartItems },
  user: { user: initialUser, loading: false, error: null },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
