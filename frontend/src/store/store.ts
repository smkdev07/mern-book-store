import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import books from './reducers/books';
import book from './reducers/book';
import cart from './reducers/cart';
import user from './reducers/user';
import admin from './reducers/admin';
import order from './reducers/order';
import orders from './reducers/orders';

const rootReducer = combineReducers({
  books,
  book,
  cart,
  user,
  admin,
  order,
  orders,
});

export type RootState = ReturnType<typeof rootReducer>;

const getInitialStateFromLocalStorage = (
  localStorageKey: string,
  fallbackValue: any
) => {
  const localStorageValue = localStorage.getItem(localStorageKey);
  return localStorageValue ? JSON.parse(localStorageValue) : fallbackValue;
};

const initialCartItems = getInitialStateFromLocalStorage('cartItems', []);
const initialUser = getInitialStateFromLocalStorage('user', null);
const initialShippingAddress = getInitialStateFromLocalStorage(
  'shippingAddress',
  null
);
const initialPaymentMethod = getInitialStateFromLocalStorage(
  'paymentMethod',
  null
);

const initialState = {
  cart: {
    cartItems: initialCartItems,
    shippingAddress: initialShippingAddress,
    paymentMethod: initialPaymentMethod,
  },
  user: { user: initialUser, loading: false, error: null },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
