import userReducer from './user';
import {
  REQUEST_USER_SIGNIN,
  REQUEST_USER_SIGNIN_SUCCESS,
  REQUEST_USER_SIGNIN_FAILURE,
  USER_SIGNOUT,
  REQUEST_USER_SIGNUP,
  REQUEST_USER_SIGNUP_SUCCESS,
  REQUEST_USER_SIGNUP_FAILURE,
  REQUEST_USER_PROFILE,
  REQUEST_USER_UPDATE_PROFILE,
  REQUEST_USER_PROFILE_SUCCESS,
  REQUEST_USER_PROFILE_FAILURE,
} from '../actions/user-action-types';

const mockReturnedUser = {
  _id: 'test',
  name: 'Test User',
  email: 'test@test.com',
  isAdmin: false,
  token: 'test',
};

const mockReturnedErrorMessage = 'Test Error Message';

describe('user reducer', () => {
  it('returns updated user state for action type REQUEST_USER_SIGNIN', () => {
    const initialUserState = { user: null, loading: false, error: null };
    const updatedUserState = userReducer(initialUserState, {
      type: REQUEST_USER_SIGNIN,
    });
    const expectedUserState = { user: null, loading: true, error: null };

    expect(updatedUserState).toEqual(expectedUserState);
  });

  it('returns updated user state for action type REQUEST_USER_SIGNIN_SUCCESS', () => {
    const initialUserState = { user: null, loading: true, error: null };
    const updatedUserState = userReducer(initialUserState, {
      type: REQUEST_USER_SIGNIN_SUCCESS,
      payload: { user: mockReturnedUser },
    });
    const expectedUserState = {
      user: mockReturnedUser,
      loading: false,
      error: null,
    };

    expect(updatedUserState).toEqual(expectedUserState);
  });

  it('returns updated user state for action type REQUEST_USER_SIGNIN_FAILURE', () => {
    const initialUserState = { user: null, loading: true, error: null };
    const updatedUserState = userReducer(initialUserState, {
      type: REQUEST_USER_SIGNIN_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedUserState = {
      user: null,
      loading: false,
      error: mockReturnedErrorMessage,
    };

    expect(updatedUserState).toEqual(expectedUserState);
  });

  it('returns updated user state for action type USER_SIGNOUT', () => {
    const initialUserState = {
      user: mockReturnedUser,
      loading: false,
      error: null,
    };
    const updatedUserState = userReducer(initialUserState, {
      type: USER_SIGNOUT,
    });
    const expectedUserState = { user: null, loading: false, error: null };

    expect(updatedUserState).toEqual(expectedUserState);
  });

  it('returns updated user state for action type REQUEST_USER_SIGNUP', () => {
    const initialUserState = { user: null, loading: false, error: null };
    const updatedUserState = userReducer(initialUserState, {
      type: REQUEST_USER_SIGNUP,
    });
    const expectedUserState = { user: null, loading: true, error: null };

    expect(updatedUserState).toEqual(expectedUserState);
  });

  it('returns updated user state for action type REQUEST_USER_SIGNUP_SUCCESS', () => {
    const initialUserState = { user: null, loading: true, error: null };
    const updatedUserState = userReducer(initialUserState, {
      type: REQUEST_USER_SIGNUP_SUCCESS,
      payload: { user: mockReturnedUser },
    });
    const expectedUserState = {
      user: mockReturnedUser,
      loading: false,
      error: null,
    };

    expect(updatedUserState).toEqual(expectedUserState);
  });

  it('returns updated user state for action type REQUEST_USER_SIGNUP_FAILURE', () => {
    const initialUserState = { user: null, loading: true, error: null };
    const updatedUserState = userReducer(initialUserState, {
      type: REQUEST_USER_SIGNUP_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedUserState = {
      user: null,
      loading: false,
      error: mockReturnedErrorMessage,
    };

    expect(updatedUserState).toEqual(expectedUserState);
  });

  it('returns updated user state for action type REQUEST_USER_PROFILE', () => {
    const initialUserState = {
      user: mockReturnedUser,
      loading: false,
      error: null,
    };
    const updatedUserState = userReducer(initialUserState, {
      type: REQUEST_USER_PROFILE,
    });
    const expectedUserState = {
      user: mockReturnedUser,
      loading: true,
      error: null,
    };

    expect(updatedUserState).toEqual(expectedUserState);
  });

  it('returns updated user state for action type REQUEST_USER_UPDATE_PROFILE', () => {
    const initialUserState = {
      user: mockReturnedUser,
      loading: false,
      error: null,
    };
    const updatedUserState = userReducer(initialUserState, {
      type: REQUEST_USER_UPDATE_PROFILE,
      payload: { user: mockReturnedUser },
    });
    const expectedUserState = {
      user: mockReturnedUser,
      loading: true,
      error: null,
    };

    expect(updatedUserState).toEqual(expectedUserState);
  });

  it('returns updated user state for action type REQUEST_USER_PROFILE_SUCCESS', () => {
    const initialUserState = {
      user: mockReturnedUser,
      loading: true,
      error: null,
    };
    const updatedUserState = userReducer(initialUserState, {
      type: REQUEST_USER_PROFILE_SUCCESS,
      payload: { user: mockReturnedUser },
    });
    const expectedUserState = {
      user: mockReturnedUser,
      loading: false,
      error: null,
    };

    expect(updatedUserState).toEqual(expectedUserState);
  });

  it('returns updated user state for action type REQUEST_USER_PROFILE_FAILURE', () => {
    const initialUserState = {
      user: mockReturnedUser,
      loading: true,
      error: null,
    };
    const updatedUserState = userReducer(initialUserState, {
      type: REQUEST_USER_PROFILE_FAILURE,
      payload: { message: mockReturnedErrorMessage },
    });
    const expectedUserState = {
      user: mockReturnedUser,
      loading: false,
      error: mockReturnedErrorMessage,
    };

    expect(updatedUserState).toEqual(expectedUserState);
  });
});
