import { CartItem, ShippingAddress } from '../reducers/cart';

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const SAVE_SHIPPING_ADDRESS = 'SAVE_SHIPPING_ADDRESS';
export const SAVE_PAYMENT_METHOD = 'SAVE_PAYMENT_METHOD';
export const CLEAR_CART_ITEMS = 'CLEAR_CART_ITEMS';
export const RESET_CART = 'RESET_CART';

export interface AddItemToCartAction {
  type: typeof ADD_ITEM_TO_CART;
  payload: { item: CartItem };
}

export interface RemoveItemFromCartAction {
  type: typeof REMOVE_ITEM_FROM_CART;
  payload: { itemId: string };
}

export interface SaveShippingAddressAction {
  type: typeof SAVE_SHIPPING_ADDRESS;
  payload: { shippingAddress: ShippingAddress };
}

export interface SavePaymentMethodAction {
  type: typeof SAVE_PAYMENT_METHOD;
  payload: { paymentMethod: string };
}

export interface ClearCartItemsAction {
  type: typeof CLEAR_CART_ITEMS;
}

export interface ResetCartAction {
  type: typeof RESET_CART;
}

export type CartActionTypes =
  | AddItemToCartAction
  | RemoveItemFromCartAction
  | SaveShippingAddressAction
  | SavePaymentMethodAction
  | ClearCartItemsAction
  | ResetCartAction;
