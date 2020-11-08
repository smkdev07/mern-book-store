import {
  CartActionTypes,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
  CLEAR_CART_ITEMS,
  RESET_CART,
} from '../actions/cart-action-types';

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  quantity: number;
}

export interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface CartState {
  readonly cartItems: CartItem[];
  readonly shippingAddress: ShippingAddress | null;
  readonly paymentMethod: string | null;
}

const initialState: CartState = {
  cartItems: [],
  shippingAddress: null,
  paymentMethod: null,
};

const cart = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const newCartItem = action.payload.item;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === newCartItem.id
      );
      if (existingCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === existingCartItem.id ? newCartItem : cartItem
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, newCartItem] };
      }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.itemId
        ),
      };
    case SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload.shippingAddress,
      };
    case SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload.paymentMethod,
      };
    case CLEAR_CART_ITEMS:
      return { ...state, cartItems: [] };
    case RESET_CART:
      return { cartItems: [], shippingAddress: null, paymentMethod: null };
    default:
      return state;
  }
};

export default cart;
