import {
  CartActionTypes,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from '../actions/cart-action-types';

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  quantity: number;
}

export interface CartState {
  readonly cartItems: CartItem[];
}

const initialState: CartState = { cartItems: [] };

const cart = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const newCartItem = action.payload.item;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === newCartItem.id
      );
      if (existingCartItem) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === existingCartItem.id ? newCartItem : cartItem
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, newCartItem] };
      }
    case REMOVE_ITEM_FROM_CART:
      return {
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.itemId
        ),
      };
    default:
      return state;
  }
};

export default cart;
