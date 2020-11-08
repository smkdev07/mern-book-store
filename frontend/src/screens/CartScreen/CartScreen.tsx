import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addToCart, removeFromCart } from '../../store/actions/cart';

import Message from '../../components/Message/Message';

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

interface MatchParams {
  id: string;
}

interface CartScreenProps extends RouteComponentProps<MatchParams> {}

const CartScreen: React.FC<CartScreenProps> = ({
  history,
  match,
  location,
}) => {
  const bookId = match.params.id;
  const quantity = location.search ? +location.search.split('=')[1] : 1;

  const dispatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart);
  const { cartItems } = cartState;

  const removeFromCartHandler = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  const checkoutHandler = () => {
    history.push('/signin?redirect=shipping');
  };

  useEffect(() => {
    if (bookId) {
      dispatch(addToCart(bookId, quantity));
    }
  }, [dispatch, bookId, quantity]);

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((cartItem) => (
              <ListGroup.Item key={cartItem.id}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={cartItem.image}
                      alt={cartItem.name}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={3}>
                    <Link to={`/book/${cartItem.id}`}>{cartItem.name}</Link>
                  </Col>
                  <Col md={2}>${cartItem.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={cartItem.quantity}
                      onChange={(event) =>
                        dispatch(addToCart(cartItem.id, +event.target.value))
                      }>
                      {[...Array(cartItem.countInStock).fill(0)].map(
                        (value, index) => {
                          const count = index + 1;
                          return (
                            <option key={count} value={count}>
                              {count}
                            </option>
                          );
                        }
                      )}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(cartItem.id)}>
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal (
                {cartItems.reduce(
                  (total, cartItem) => total + cartItem.quantity,
                  0
                )}
                ) items
              </h2>
              $
              {cartItems
                .reduce(
                  (total, cartItem) =>
                    total + cartItem.quantity * cartItem.price,
                  0
                )
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}>
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
