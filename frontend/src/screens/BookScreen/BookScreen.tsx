import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchBook, createBookReview } from '../../store/actions/book';

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
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const bookState = useSelector((state: RootState) => state.book);
  const {
    book,
    loading,
    error,
    bookReviewCreated,
    bookReviewError,
  } = bookState;
  const userState = useSelector((state: RootState) => state.user);
  const { user } = userState;

  const addToCartHandler = () => {
    // event: React.MouseEvent<HTMLElement, MouseEvent>
    history.push(`/cart/${match.params.id}?quantity=${quantity}`);
  };

  const submitHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(createBookReview(match.params.id, rating, comment.trim()));
  };

  useEffect(() => {
    if (bookReviewCreated) {
      alert('Review Submitted!');
      setRating(0);
      setComment('');
    }
    dispatch(fetchBook(match.params.id));
  }, [dispatch, match, bookReviewCreated]);

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
        <>
          <Row>
            <Col md={3}>
              <Image src={book?.image} alt={book?.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{book?.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={book ? book.rating : 0}
                    text={`${book?.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${book?.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {book?.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${book?.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {book
                          ? book.countInStock > 0
                            ? 'In Stock'
                            : 'Out Of Stock'
                          : null}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {book && book.countInStock > 0 && (
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
                      disabled={book?.countInStock === 0}
                      onClick={addToCartHandler}>
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {book?.reviews.length === 0 && (
                <Message variant="light">No Reviews</Message>
              )}
              <ListGroup variant="flush">
                {book?.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} text="" />
                    <p>{new Date(review.createdAt).toLocaleDateString()}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Book Review</h2>
                  {bookReviewError && (
                    <Message variant="danger">{bookReviewError}</Message>
                  )}
                  {user ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(event) => setRating(+event.target.value)}>
                          <option value={0}>Select...</option>
                          <option value={1}>1 Star</option>
                          <option value={2}>2 Stars</option>
                          <option value={3}>3 Stars</option>
                          <option value={4}>4 Stars</option>
                          <option value={5}>5 Stars</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={comment}
                          onChange={(event) => setComment(event.target.value)}
                        />
                      </Form.Group>
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={rating === 0 || comment.trim().length === 0}>
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/signin">sign in</Link> to write a
                      review.
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default BookScreen;
