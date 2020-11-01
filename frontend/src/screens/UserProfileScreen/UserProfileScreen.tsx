import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updatetUserProfile } from '../../store/actions/user';

import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

import { Row, Col, Button, Form } from 'react-bootstrap';

interface UserProfileScreenProps extends RouteComponentProps {}

const UserProfileScreen: React.FC<UserProfileScreenProps> = ({ history }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);
  const { user, loading, error } = userState;

  const submitHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(updatetUserProfile(name, password));
    setPassword('');
  };

  useEffect(() => {
    if (user) {
      // dispatch(getUserProfile());
      setName(user.name);
    } else {
      history.push('/signin');
    }
  }, [dispatch, history, user]);

  return (
    <Row>
      <Col md={3}>
        <h2>My Profile</h2>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
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
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default UserProfileScreen;
