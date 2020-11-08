import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import books from './reducers/books';
import book from './reducers/book';
import cart from './reducers/cart';
import user from './reducers/user';
import order from './reducers/order';
import orders from './reducers/orders';

const rootReducer = combineReducers({
  books,
  book,
  cart,
  user,
  order,
  orders,
});

export type RootState = ReturnType<typeof rootReducer>;

// This can be refactored into a loop // function

const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
const initialCartItems = cartItemsFromLocalStorage
  ? JSON.parse(cartItemsFromLocalStorage)
  : [];

const userFromLocalStorage = localStorage.getItem('user');
const initialUser = userFromLocalStorage
  ? JSON.parse(userFromLocalStorage)
  : null;

const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress');
const initialShippingAddress = shippingAddressFromLocalStorage
  ? JSON.parse(shippingAddressFromLocalStorage)
  : null;

const paymentMethodFromLocalStorage = localStorage.getItem('paymentMethod');
const initialPaymentMethod = paymentMethodFromLocalStorage
  ? JSON.parse(paymentMethodFromLocalStorage)
  : null;

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
