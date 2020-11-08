import ordersReducer from './orders';
import {
  REQUEST_ORDERS,
  REQUEST_ORDERS_SUCCESS,
  REQUEST_ORDERS_FAILURE,
  RESET_ORDERS,
} from '../actions/orders-action-types';

const mockReturnedOrders = [
  {
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
  },
];

const mockReturnedErrorMessage = 'Test Error Message';

describe('orders reducer', () => {
  it('returns updated orders state for action type REQUEST_ORDERS', () => {
    const initialOrdersState = {
      orders: [],
      loading: false,
      error: null,
    };
    const updatedOrdersState = ordersReducer(initialOrdersState, {
      type: REQUEST_ORDERS,
    });
    const expectedOrdersState = {
      orders: [],
      loading: true,
      error: null,
    };

    expect(updatedOrdersState).toEqual(expectedOrdersState);
  });

  it('returns updated orders state for action type REQUEST_ORDERS_SUCCESS', () => {
    const initialOrdersState = {
      orders: [],
      loading: true,
      error: null,
    };
    const updatedOrdersState = ordersReducer(initialOrdersState, {
      type: REQUEST_ORDERS_SUCCESS,
      payload: { orders: mockReturnedOrders },
    });
    const expectedOrdersState = {
      orders: mockReturnedOrders,
      loading: false,
      error: null,
    };

    expect(updatedOrdersState).toEqual(expectedOrdersState);
  });

  it('returns updated order state for action type REQUEST_ORDERS_FAILURE', () => {
    const initialOrdersState = {
      orders: [],
      loading: true,
      error: null,
    };
    const updatedOrdersState = ordersReducer(initialOrdersState, {
      type: REQUEST_ORDERS_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedOrdersState = {
      orders: [],
      loading: false,
      error: mockReturnedErrorMessage,
    };

    expect(updatedOrdersState).toEqual(expectedOrdersState);
  });

  it('returns updated orders state for action type RESET_ORDERS', () => {
    const initialOrdersState = {
      orders: mockReturnedOrders,
      loading: false,
      error: null,
    };
    const updatedOrdersState = ordersReducer(initialOrdersState, {
      type: RESET_ORDERS,
    });
    const expectedOrdersState = {
      orders: [],
      loading: false,
      error: null,
    };

    expect(updatedOrdersState).toEqual(expectedOrdersState);
  });
});
