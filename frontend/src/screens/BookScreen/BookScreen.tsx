import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import axios from 'axios';

import Rating from '../../components/Rating/Rating';
import { Book } from '../../components/Book/Book';

import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

interface MatchParams {
  id: string;
}

interface BookScreenProps extends RouteComponentProps<MatchParams> {}

const EMPTY_BOOK_STATE = {
  _id: '',
  name: '',
  image: '',
  description: '',
  authors: '',
  publishers: '',
  isbn: 0,
  price: 0,
  countInStock: 0,
  rating: 0,
  numReviews: 0,
};

const BookScreen: React.FC<BookScreenProps> = ({ match }) => {
  const [book, setBook] = useState<Book>(EMPTY_BOOK_STATE);

  useEffect(() => {
    const fetchBook = async () => {
      const { data } = await axios.get(`/api/books/${match.params.id}`);

      setBook(data);
    };

    fetchBook();
  }, [match]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
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
              <Rating value={book.rating} text={`${book.numReviews} reviews`} />
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
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={book.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BookScreen;
