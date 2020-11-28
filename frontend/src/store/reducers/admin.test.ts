import adminReducer from './admin';
import {
  REQUEST_USERS,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILURE,
  REQUEST_USER,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_FAILURE,
  REQUEST_USER_UPDATE,
  REQUEST_USER_UPDATE_SUCCESS,
  REQUEST_USER_UPDATE_FAILURE,
  REQUEST_USER_DELETE,
  REQUEST_USER_DELETE_SUCCESS,
  REQUEST_USER_DELETE_FAILURE,
  REQUEST_BOOK_CREATE,
  REQUEST_BOOK_CREATE_SUCCESS,
  REQUEST_BOOK_CREATE_FAILURE,
  REQUEST_BOOK_UPDATE,
  REQUEST_BOOK_UPDATE_SUCCESS,
  REQUEST_BOOK_UPDATE_FAILURE,
  REQUEST_BOOK_DELETE,
  REQUEST_BOOK_DELETE_SUCCESS,
  REQUEST_BOOK_DELETE_FAILURE,
  REQUEST_BOOK_RESET,
  REQUEST_ORDERS,
  REQUEST_ORDERS_SUCCESS,
  REQUEST_ORDERS_FAILURE,
  REQUEST_ORDER_DELIVER,
  REQUEST_ORDER_DELIVER_SUCCESS,
  REQUEST_ORDER_DELIVER_FAILURE,
  RESET_ADMIN,
} from '../actions/admin-action-types';

const mockReturnedUsers = [
  {
    _id: 'test',
    name: 'Test User',
    email: 'test@test.com',
    isAdmin: false,
  },
];

const mockReturnedUser = {
  _id: 'test',
  name: 'Test User',
  email: 'test@test.com',
  isAdmin: false,
};

const mockReturnedUpdatedUser = {
  _id: 'test',
  name: 'Update Test User',
  email: 'test@test.com',
  isAdmin: true,
};

const mockReturnedBook = {
  _id: 'book',
  __v: 0,
  user: 'test user',
  name: 'Test Book',
  image: 'test book image',
  description: 'test book description',
  authors: 'Test Author',
  publishers: 'Test Publisher',
  isbn: 12345,
  price: 50,
  countInStock: 10,
  reviews: [],
  rating: 4,
  numReviews: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

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

describe('admin reducer', () => {
  it('returns updated admin state for action type REQUEST_USERS', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_USERS,
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_USERS_SUCCESS', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_USERS_SUCCESS,
      payload: { users: mockReturnedUsers },
    });
    const expectedAdminState = {
      users: mockReturnedUsers,
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_USERS_FAILURE', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_USERS_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: mockReturnedErrorMessage,
      redirect: false,
    };

    expect(expectedAdminState).toEqual(updatedAdminState);
  });

  it('returns updated admin state for action type REQUEST_USER', () => {
    const initialAdminState = {
      users: mockReturnedUsers,
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_USER,
    });
    const expectedAdminState = {
      users: mockReturnedUsers,
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_USER_SUCCESS', () => {
    const initialAdminState = {
      users: mockReturnedUsers,
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_USER_SUCCESS,
      payload: { user: mockReturnedUser },
    });
    const expectedAdminState = {
      users: mockReturnedUsers,
      user: mockReturnedUser,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_USER_FAILURE', () => {
    const initialAdminState = {
      users: mockReturnedUsers,
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_USER_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedAdminState = {
      users: mockReturnedUsers,
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: mockReturnedErrorMessage,
      redirect: false,
    };

    expect(expectedAdminState).toEqual(updatedAdminState);
  });

  it('returns updated admin state for action type REQUEST_USER_UPDATE', () => {
    const initialAdminState = {
      users: mockReturnedUsers,
      user: mockReturnedUser,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_USER_UPDATE,
    });
    const expectedAdminState = {
      users: mockReturnedUsers,
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_USER_UPDATE_SUCCESS', () => {
    const initialAdminState = {
      users: mockReturnedUsers,
      user: mockReturnedUser,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_USER_UPDATE_SUCCESS,
      payload: { user: mockReturnedUpdatedUser },
    });
    const expectedAdminState = {
      users: mockReturnedUsers,
      user: mockReturnedUpdatedUser,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: true,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_USER_UPDATE_FAILURE', () => {
    const initialAdminState = {
      users: mockReturnedUsers,
      user: mockReturnedUser,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_USER_UPDATE_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedAdminState = {
      users: mockReturnedUsers,
      user: mockReturnedUser,
      book: null,
      orders: [],
      loading: false,
      error: mockReturnedErrorMessage,
      redirect: false,
    };

    expect(expectedAdminState).toEqual(updatedAdminState);
  });

  it('returns updated admin state for action type REQUEST_USER_DELETE', () => {
    const initialAdminState = {
      users: mockReturnedUsers,
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_USER_DELETE,
    });
    const expectedAdminState = {
      users: mockReturnedUsers,
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_USER_DELETE_SUCCESS', () => {
    const initialAdminState = {
      users: mockReturnedUsers,
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_USER_DELETE_SUCCESS,
      payload: { userId: mockReturnedUsers[0]._id },
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_USER_DELETE_FAILURE', () => {
    const initialAdminState = {
      users: mockReturnedUsers,
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_USER_DELETE_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedAdminState = {
      users: mockReturnedUsers,
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: mockReturnedErrorMessage,
      redirect: false,
    };

    expect(expectedAdminState).toEqual(updatedAdminState);
  });

  it('returns updated admin state for action type REQUEST_BOOK_CREATE', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_BOOK_CREATE,
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_BOOK_CREATE_SUCCESS', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_BOOK_CREATE_SUCCESS,
      payload: { book: mockReturnedBook },
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: mockReturnedBook,
      orders: [],
      loading: false,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_BOOK_CREATE_FAILURE', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_BOOK_CREATE_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: mockReturnedErrorMessage,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_BOOK_UPDATE', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: mockReturnedBook,
      orders: [],
      loading: false,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_BOOK_UPDATE,
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_BOOK_UPDATE_SUCCESS', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_BOOK_UPDATE_SUCCESS,
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: true,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_BOOK_UPDATE_FAILURE', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_BOOK_UPDATE_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: mockReturnedErrorMessage,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_BOOK_DELETE', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_BOOK_DELETE,
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_BOOK_DELETE_SUCCESS', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_BOOK_DELETE_SUCCESS,
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: true,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_BOOK_DELETE_FAILURE', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_BOOK_DELETE_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: mockReturnedErrorMessage,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_BOOK_RESET', () => {
    const initialAdminState = {
      users: mockReturnedUsers,
      user: mockReturnedUser,
      book: mockReturnedBook,
      orders: mockReturnedOrders,
      loading: false,
      error: null,
      redirect: true,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_BOOK_RESET,
    });
    const expectedAdminState = {
      users: mockReturnedUsers,
      user: mockReturnedUser,
      book: null,
      orders: mockReturnedOrders,
      loading: false,
      error: null,
      redirect: false,
    };

    expect(expectedAdminState).toEqual(updatedAdminState);
  });

  it('returns updated admin state for action type REQUEST_ORDERS', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_ORDERS,
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_ORDERS_SUCCESS', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_ORDERS_SUCCESS,
      payload: { orders: mockReturnedOrders },
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: mockReturnedOrders,
      loading: false,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_ORDERS_FAILURE', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_ORDERS_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: mockReturnedErrorMessage,
      redirect: false,
    };

    expect(expectedAdminState).toEqual(updatedAdminState);
  });

  it('returns updated admin state for action type REQUEST_ORDER_DELIVER', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: mockReturnedOrders,
      loading: false,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_ORDER_DELIVER,
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_ORDER_DELIVER_SUCCESS', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_ORDER_DELIVER_SUCCESS,
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: true,
    };

    expect(updatedAdminState).toEqual(expectedAdminState);
  });

  it('returns updated admin state for action type REQUEST_ORDER_DELIVER_FAILURE', () => {
    const initialAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: true,
      error: null,
      redirect: false,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: REQUEST_ORDER_DELIVER_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: mockReturnedErrorMessage,
      redirect: false,
    };

    expect(expectedAdminState).toEqual(updatedAdminState);
  });

  it('returns updated admin state for action type RESET_ADMIN', () => {
    const initialAdminState = {
      users: mockReturnedUsers,
      user: mockReturnedUser,
      book: mockReturnedBook,
      orders: mockReturnedOrders,
      loading: false,
      error: null,
      redirect: true,
    };
    const updatedAdminState = adminReducer(initialAdminState, {
      type: RESET_ADMIN,
    });
    const expectedAdminState = {
      users: [],
      user: null,
      book: null,
      orders: [],
      loading: false,
      error: null,
      redirect: false,
    };

    expect(expectedAdminState).toEqual(updatedAdminState);
  });
});
