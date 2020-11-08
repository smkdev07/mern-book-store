import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { createOrder } from '../../store/actions/order';

import Steps from '../../components/Steps/Steps';
import Message from '../../components/Message/Message';

import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

interface PlaceOrderScreenProps extends RouteComponentProps {}

const checkoutSteps = [
  { name: 'Sign In', path: '/signin', isActive: true },
  { name: 'Shipping', path: '/shipping', isActive: true },
  { name: 'Payment', path: '/payment', isActive: true },
  { name: 'Place Order', path: '/placeorder', isActive: true },
];

const PlaceOrderScreen: React.FC<PlaceOrderScreenProps> = ({ history }) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cartState;
  const orderState = useSelector((state: RootState) => state.order);
  const { order, loading, error, redirect } = orderState;

  // Derive order summary from cartItems
  const itemsPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
  const shippingPrice = itemsPrice > 100 ? 0 : 25;
  const taxAmount = itemsPrice * 0.08;
  const totalPrice = itemsPrice + shippingPrice + taxAmount;

  const placeOrderHandler = () => {
    dispatch(
      createOrder(
        cartItems,
        shippingAddress!,
        paymentMethod!,
        itemsPrice,
        taxAmount,
        shippingPrice,
        totalPrice
      )
    );
  };

  useEffect(() => {
    if (redirect) {
      history.push(`/order/${order?._id}`);
    }
  }, [history, order, redirect]);

  return (
    <>
      <Steps steps={checkoutSteps} />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong> {shippingAddress?.address},{' '}
                {shippingAddress?.city} {shippingAddress?.postalCode},{' '}
                {shippingAddress?.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method:</strong> {paymentMethod}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cartItems.map((cartItem) => (
                    <ListGroup.Item key={cartItem.id}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={cartItem.image}
                            alt={cartItem.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/book/${cartItem.id}`}>
                            {cartItem.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {cartItem.quantity} x ${cartItem.price} = $
                          {(cartItem.quantity * cartItem.price).toFixed(2)}
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
                  <Col>${itemsPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${shippingPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${taxAmount.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${totalPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {loading && (
                  <Message variant="info">Processing Order...</Message>
                )}
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={placeOrderHandler}>
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
