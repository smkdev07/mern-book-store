import { CartItem } from '../reducers/cart';

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

export interface AddItemToCartAction {
  type: typeof ADD_ITEM_TO_CART;
  payload: { item: CartItem };
}

export interface RemoveItemFromCartAction {
  type: typeof REMOVE_ITEM_FROM_CART;
  payload: { itemId: string };
}

export type CartActionTypes = AddItemToCartAction | RemoveItemFromCartAction;
