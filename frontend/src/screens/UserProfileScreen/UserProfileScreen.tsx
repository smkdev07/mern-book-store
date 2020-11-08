import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updatetUserProfile } from '../../store/actions/user';
import { getUsersOrders } from '../../store/actions/orders';

import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

import { Row, Col, Button, Form, Table } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

interface UserProfileScreenProps extends RouteComponentProps {}

const UserProfileScreen: React.FC<UserProfileScreenProps> = ({ history }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);
  const { user, loading, error } = userState;
  const ordersState = useSelector((state: RootState) => state.orders);
  const { orders, loading: ordersLoading, error: ordersError } = ordersState;

  const submitHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(updatetUserProfile(name, password));
    setPassword('');
  };

  useEffect(() => {
    if (user) {
      // dispatch(getUserProfile());
      dispatch(getUsersOrders());
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
        {ordersLoading ? (
          <Loader />
        ) : ordersError ? (
          <Message variant="danger">{ordersError}</Message>
        ) : (
          <Table
            striped
            bordered
            hover
            responsive
            variant="dark"
            className="table-sm text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>${order.totalPrice.toFixed(2)}</td>
                  <td>
                    {order.isPaid ? (
                      new Date(order.paidOn!).toLocaleDateString()
                    ) : (
                      <FaTimes color="red" />
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      new Date(order.deliveredOn!).toLocaleDateString()
                    ) : (
                      <FaTimes color="red" />
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button variant="light" className="btn-sm">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default UserProfileScreen;
