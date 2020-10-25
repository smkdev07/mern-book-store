import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchBook } from '../../store/actions/book';

import Rating from '../../components/Rating/Rating';
import Loader from '../../components/Loader/Loader';
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

interface MatchParams {
  id: string;
}

interface BookScreenProps extends RouteComponentProps<MatchParams> {}

const BookScreen: React.FC<BookScreenProps> = ({ history, match }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const bookState = useSelector((state: RootState) => state.book);
  const { book, loading, error } = bookState;

  const addToCartHandler = () =>
    // event: React.MouseEvent<HTMLElement, MouseEvent>
    {
      history.push(`/cart/${match.params.id}?quantity=${quantity}`);
    };

  useEffect(() => {
    dispatch(fetchBook(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={3}>
            <Image src={book.image} alt={book.name} fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{book.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={book.rating}
                  text={`${book.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${book.price}</ListGroup.Item>
              <ListGroup.Item>Description: {book.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${book.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {book.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {book.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={quantity}
                          onChange={(event) =>
                            setQuantity(+event.target.value)
                          }>
                          {[...Array(book.countInStock).fill(0)].map(
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
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={book.countInStock === 0}
                    onClick={addToCartHandler}>
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default BookScreen;
