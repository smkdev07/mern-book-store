import React, { useState, useEffect, useCallback } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import axios from 'axios';

import { PayPalButton } from 'react-paypal-button-v2'; // https://www.npmjs.com/package/react-paypal-button-v2

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getOrderById, updateOrderByIdToPaid } from '../../store/actions/order';
import { User } from '../../models/order';

import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

export interface PayPalResponse {
  create_time: string;
  id: string;
  intent: string;
  links: any[];
  payer: {
    address: { country_code: string };
    email_address: string;
    name: { given_name: string; surname: string };
    payer_id: string;
  };
  purchase_units: any[];
  status: string;
  update_time: string;
}

interface MatchParams {
  id: string;
}

interface OrderScreenProps extends RouteComponentProps<MatchParams> {}

const OrderScreen: React.FC<OrderScreenProps> = ({ match }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const dispatch = useDispatch();
  const orderState = useSelector((state: RootState) => state.order);
  const { order, loading, error } = orderState;
  const orderId = match.params.id;

  const addPayPalScript = useCallback(async () => {
    const { data: clientId } = await axios.get('/api/config/paypal');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
    };
    document.body.appendChild(script);
  }, []);

  const successPaymentHandler = (paymentResult: PayPalResponse) => {
    dispatch(updateOrderByIdToPaid(orderId, paymentResult));
  };

  useEffect(() => {
    if ((window as any).paypal) {
      setScriptLoaded(true);
    } else {
      addPayPalScript();
    }
  }, [addPayPalScript]);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [dispatch, orderId]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1>Order {order?._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name:</strong> {(order?.user as User)?.name}
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${(order?.user as User)?.email}`}>
                  {(order?.user as User)?.email}
                </a>
              </p>
              <p>
                <strong>Address:</strong> {order?.shippingAddress.address},{' '}
                {order?.shippingAddress.city}{' '}
                {order?.shippingAddress.postalCode},{' '}
                {order?.shippingAddress.country}
              </p>
              {order?.isDelivered ? (
                <Message variant="success">
                  Delivered on {new Date(order.deliveredOn!).toLocaleString()}
                </Message>
              ) : (
                <Message variant="danger">Not delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method:</strong> {order?.paymentMethod}
              </p>
              {order?.isPaid ? (
                <Message variant="success">
                  Paid on {new Date(order.paidOn!).toLocaleString()}
                </Message>
              ) : (
                <Message variant="danger">Not paid</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {order?.orderItems.length === 0 ? (
                <Message>Your order is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order?.orderItems.map((orderItem) => (
                    <ListGroup.Item key={orderItem._id}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={orderItem.image}
                            alt={orderItem.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/book/${orderItem.book}`}>
                            {orderItem.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {orderItem.quantity} x ${orderItem.price} = $
                          {(orderItem.quantity * orderItem.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order?.itemsPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order?.shippingPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order?.taxAmount.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order?.totalPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              {!order?.isPaid && (
                <ListGroup.Item>
                  {scriptLoaded ? (
                    <PayPalButton
                      amount={order?.totalPrice.toFixed(2)}
                      onSuccess={successPaymentHandler}
                      // onError={errorPaymentHandler}
                    />
                  ) : (
                    <Loader />
                  )}
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
