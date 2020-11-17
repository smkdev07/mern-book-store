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

const mockReturnedErrorMessage = 'Test Error Message';

describe('admin reducer', () => {
  it('returns updated admin state for action type REQUEST_USERS', () => {
    const initialAdminState = {
      users: [],
      user: null,
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
      loading: false,
      error: null,
      redirect: false,
    };

    expect(expectedAdminState).toEqual(updatedAdminState);
  });
});
