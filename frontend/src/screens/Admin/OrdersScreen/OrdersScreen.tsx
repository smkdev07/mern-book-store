import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { fetchOrders } from '../../../store/actions/admin';

import Loader from '../../../components/Loader/Loader';
import Message from '../../../components/Message/Message';

import { Table, Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

interface OrdersScreenProps extends RouteComponentProps {}

const OrdersScreen: React.FC<OrdersScreenProps> = ({ history }) => {
  const dispatch = useDispatch();
  const adminState = useSelector((state: RootState) => state.admin);
  const { orders, loading, error } = adminState;
  const userState = useSelector((state: RootState) => state.user);
  const { user } = userState;

  useEffect(() => {
    if (user && user.isAdmin) {
      dispatch(fetchOrders());
    } else {
      history.push('/signin');
    }
  }, [dispatch, history, user]);
  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
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
              <th>USER</th>
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
                <td>{typeof order.user !== 'string' && order.user.name}</td>
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
                  <LinkContainer to={`/admin/order/${order._id}`}>
                    <Button variant="light" className="btn-sm mr-2">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrdersScreen;
