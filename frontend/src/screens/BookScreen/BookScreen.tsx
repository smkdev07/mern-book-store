import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchBook } from '../../store/actions/book';

import Rating from '../../components/Rating/Rating';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

interface MatchParams {
  id: string;
}

interface BookScreenProps extends RouteComponentProps<MatchParams> {}

const BookScreen: React.FC<BookScreenProps> = ({ match }) => {
  const dispatch = useDispatch();
  const bookState = useSelector((state: RootState) => state.book);
  const { book, loading, error } = bookState;

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
            <Image src={book?.image} alt={book?.name} fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{book?.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={book?.rating || 0}
                  text={`${book?.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${book?.price}</ListGroup.Item>
              <ListGroup.Item>Description: {book?.description}</ListGroup.Item>
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
                      {(book?.countInStock || 0) > 0
                        ? 'In Stock'
                        : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={(book?.countInStock || 0) === 0}>
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
