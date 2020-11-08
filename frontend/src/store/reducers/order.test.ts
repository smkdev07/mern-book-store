import orderReducer from './order';
import {
  REQUEST_ORDER_CREATE,
  REQUEST_ORDER_CREATE_SUCCESS,
  REQUEST_ORDER_CREATE_FAILURE,
  REQUEST_ORDER,
  REQUEST_ORDER_SUCCESS,
  REQUEST_ORDER_FAILURE,
  REQUEST_ORDER_PAY,
  REQUEST_ORDER_PAY_SUCCESS,
  REQUEST_ORDER_PAY_FAILURE,
  RESET_ORDER,
} from '../actions/order-action-types';

const mockReturnedOrder = {
  _id: 'test',
  __v: 12345,
  user: { _id: 'test', name: 'test', email: 'test' },
  orderItems: [
    {
      _id: 'test',
      name: 'test',
      quantity: 12345,
      image: 'test',
      price: 12345,
      book: 'test',
    },
  ],
  shippingAddress: {
    address: 'test',
    city: ' test',
    postalCode: 'test',
    country: 'test',
  },
  paymentMethod: 'test',
  paymentResult: {
    id: 'test',
    status: 'test',
    update_time: 'test',
    email_address: 'test',
  },
  itemsPrice: 12345,
  taxAmount: 12345,
  shippingPrice: 12345,
  totalPrice: 12345,
  isPaid: false,
  paidOn: new Date().toISOString(),
  isDelivered: false,
  deliveredOn: new Date().toISOString(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const mockReturnedErrorMessage = 'Test Error Message';

describe('order reducer', () => {
  it('returns updated order state for action type REQUEST_ORDER_CREATE', () => {
    const initialOrderState = {
      order: null,
      loading: false,
      error: null,
      redirect: false,
    };
    const updatedOrderState = orderReducer(initialOrderState, {
      type: REQUEST_ORDER_CREATE,
    });
    const expectedOrderState = {
      order: null,
      loading: true,
      error: null,
      redirect: false,
    };

    expect(updatedOrderState).toEqual(expectedOrderState);
  });

  it('returns updated order state for action type REQUEST_ORDER_CREATE_SUCCESS', () => {
    const initialOrderState = {
      order: null,
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedOrderState = orderReducer(initialOrderState, {
      type: REQUEST_ORDER_CREATE_SUCCESS,
      payload: { order: mockReturnedOrder },
    });
    const expectedOrderState = {
      order: mockReturnedOrder,
      loading: false,
      error: null,
      redirect: true,
    };

    expect(updatedOrderState).toEqual(expectedOrderState);
  });

  it('returns updated order state for action type REQUEST_ORDER_CREATE_FAILURE', () => {
    const initialOrderState = {
      order: null,
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedOrderState = orderReducer(initialOrderState, {
      type: REQUEST_ORDER_CREATE_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedOrderState = {
      order: null,
      loading: false,
      error: mockReturnedErrorMessage,
      redirect: false,
    };

    expect(updatedOrderState).toEqual(expectedOrderState);
  });

  it('returns updated order state for action type REQUEST_ORDER', () => {
    const initialOrderState = {
      order: null,
      loading: false,
      error: null,
      redirect: false,
    };
    const updatedOrderState = orderReducer(initialOrderState, {
      type: REQUEST_ORDER,
    });
    const expectedOrderState = {
      order: null,
      loading: true,
      error: null,
      redirect: false,
    };

    expect(updatedOrderState).toEqual(expectedOrderState);
  });

  it('returns updated order state for action type REQUEST_ORDER_SUCCESS', () => {
    const initialOrderState = {
      order: null,
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedOrderState = orderReducer(initialOrderState, {
      type: REQUEST_ORDER_SUCCESS,
      payload: { order: mockReturnedOrder },
    });
    const expectedOrderState = {
      order: mockReturnedOrder,
      loading: false,
      error: null,
      redirect: false,
    };

    expect(updatedOrderState).toEqual(expectedOrderState);
  });

  it('returns updated order state for action type REQUEST_ORDER_FAILURE', () => {
    const initialOrderState = {
      order: null,
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedOrderState = orderReducer(initialOrderState, {
      type: REQUEST_ORDER_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedOrderState = {
      order: null,
      loading: false,
      error: mockReturnedErrorMessage,
      redirect: false,
    };

    expect(updatedOrderState).toEqual(expectedOrderState);
  });

  it('returns updated order state for action type REQUEST_ORDER_PAY', () => {
    const initialOrderState = {
      order: mockReturnedOrder,
      loading: false,
      error: null,
      redirect: false,
    };
    const updatedOrderState = orderReducer(initialOrderState, {
      type: REQUEST_ORDER_PAY,
    });
    const expectedOrderState = {
      order: null,
      loading: true,
      error: null,
      redirect: false,
    };

    expect(updatedOrderState).toEqual(expectedOrderState);
  });

  it('returns updated order state for action type REQUEST_ORDER_PAY_SUCCESS', () => {
    const initialOrderState = {
      order: null,
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedOrderState = orderReducer(initialOrderState, {
      type: REQUEST_ORDER_PAY_SUCCESS,
      payload: { order: mockReturnedOrder },
    });
    const expectedOrderState = {
      order: mockReturnedOrder,
      loading: false,
      error: null,
      redirect: false,
    };

    expect(updatedOrderState).toEqual(expectedOrderState);
  });

  it('returns updated order state for action type REQUEST_ORDER_PAY_FAILURE', () => {
    const initialOrderState = {
      order: null,
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedOrderState = orderReducer(initialOrderState, {
      type: REQUEST_ORDER_PAY_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedOrderState = {
      order: null,
      loading: false,
      error: mockReturnedErrorMessage,
      redirect: false,
    };

    expect(updatedOrderState).toEqual(expectedOrderState);
  });

  it('returns updated order state for action type RESET_ORDER', () => {
    const initialOrderState = {
      order: mockReturnedOrder,
      loading: false,
      error: null,
      redirect: true,
    };
    const updatedOrderState = orderReducer(initialOrderState, {
      type: RESET_ORDER,
    });
    const expectedOrderState = {
      order: null,
      loading: false,
      error: null,
      redirect: false,
    };

    expect(updatedOrderState).toEqual(expectedOrderState);
  });
});
