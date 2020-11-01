import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { signIn } from '../../store/actions/user';

import FormContainer from '../../components/FormContainer/FormContainer';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

import { Row, Col, Button, Form } from 'react-bootstrap';

interface SignInScreenProps extends RouteComponentProps {}

const SignInScreen: React.FC<SignInScreenProps> = ({ history, location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);
  const { user, loading, error } = userState;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const submitHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(signIn(email, password));
  };

  useEffect(() => {
    if (user) {
      history.push(redirect);
    }
  }, [history, user, redirect]);

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/signup?redirect=${redirect}` : `/signup`}>
            Sign Up
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default SignInScreen;
