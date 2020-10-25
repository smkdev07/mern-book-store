import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import books from './reducers/books';
import book from './reducers/book';
import cart from './reducers/cart';

const rootReducer = combineReducers({
  books,
  book,
  cart,
});

export type RootState = ReturnType<typeof rootReducer>;

const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
const initialCartItems = cartItemsFromLocalStorage
  ? JSON.parse(cartItemsFromLocalStorage)
  : [];

const initialState = {
  cart: { cartItems: initialCartItems },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
