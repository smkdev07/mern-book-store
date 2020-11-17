import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchUser, updateUser } from '../../store/actions/admin';

import FormContainer from '../../components/FormContainer/FormContainer';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

import { Button, Form } from 'react-bootstrap';

interface MatchParams {
  id: string;
}

interface UserScreenProps extends RouteComponentProps<MatchParams> {}

const UserScreen: React.FC<UserScreenProps> = ({ history, match }) => {
  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  const adminState = useSelector((state: RootState) => state.admin);
  const { user, loading, error, redirect } = adminState;

  const userId = match.params.id;

  const submitHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(updateUser(userId, name, isAdmin));
  };

  useEffect(() => {
    if (redirect) {
      history.push('/admin/users');
    }

    if (user && user._id === userId) {
      setName(user.name);
      setIsAdmin(user.isAdmin);
    } else {
      dispatch(fetchUser(userId));
    }
  }, [dispatch, history, user, userId, redirect]);

  return (
    <>
      <Link to="/admin/users" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="isAdmin">
              <Form.Check
                type="checkbox"
                label="Admin"
                checked={isAdmin}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setIsAdmin(event.target.checked)
                }
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserScreen;
