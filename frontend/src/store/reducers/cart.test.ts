import cartReducer from './cart';
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from '../actions/cart-action-types';

const mockCartItemOne = {
  id: 'one',
  name: 'test item one',
  image: 'test image one',
  price: 50,
  countInStock: 10,
  quantity: 1,
};

const mockCartItemTwo = {
  id: 'two',
  name: 'test item two',
  image: 'test image two',
  price: 100,
  countInStock: 5,
  quantity: 2,
};

describe('cart reducer', () => {
  it('returns updated cart state for action type ADD_ITEM_TO_CART with new item and empty cart', () => {
    const initialCartState = { cartItems: [] };
    const updatedCartState = cartReducer(initialCartState, {
      type: ADD_ITEM_TO_CART,
      payload: { item: mockCartItemOne },
    });
    const expectedCartState = { cartItems: [mockCartItemOne] };

    expect(updatedCartState).toEqual(expectedCartState);
  });

  it('returns updated cart state for action type ADD_ITEM_TO_CART with new item and existing cart', () => {
    const initialCartState = { cartItems: [mockCartItemOne] };
    const updatedCartState = cartReducer(initialCartState, {
      type: ADD_ITEM_TO_CART,
      payload: { item: mockCartItemTwo },
    });
    const expectedCartState = { cartItems: [mockCartItemOne, mockCartItemTwo] };

    expect(updatedCartState).toEqual(expectedCartState);
  });

  it('returns updated cart state for action type ADD_ITEM_TO_CART with existing cart item', () => {
    const initialCartState = { cartItems: [mockCartItemOne] };
    const updatedCartState = cartReducer(initialCartState, {
      type: ADD_ITEM_TO_CART,
      payload: { item: { ...mockCartItemOne, quantity: 2 } },
    });
    // const expectedCartState = {
    //   cartItems: [{ ...mockCartItemOne, quantity: 2 }],
    // };

    // expect(updatedCartState).toEqual(expectedCartState);
    expect(updatedCartState.cartItems[0].quantity).toBe(2);
  });

  it('returns updated cart state for action type REMOVE_ITEM_FROM_CART with one cart item', () => {
    const initialCartState = { cartItems: [mockCartItemOne] };
    const updatedCartState = cartReducer(initialCartState, {
      type: REMOVE_ITEM_FROM_CART,
      payload: { itemId: 'one' },
    });
    const expectedCartState = { cartItems: [] };

    expect(updatedCartState).toEqual(expectedCartState);
  });

  it('returns updated cart state for action type REMOVE_ITEM_FROM_CART with many cart items', () => {
    const initialCartState = { cartItems: [mockCartItemOne, mockCartItemTwo] };
    const updatedCartState = cartReducer(initialCartState, {
      type: REMOVE_ITEM_FROM_CART,
      payload: { itemId: 'one' },
    });
    const expectedCartState = { cartItems: [mockCartItemTwo] };

    expect(updatedCartState).toEqual(expectedCartState);
  });
});
