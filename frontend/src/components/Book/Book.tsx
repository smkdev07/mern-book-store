import React from 'react';
import { Link } from 'react-router-dom';

import Rating from '../Rating/Rating';

import { Card } from 'react-bootstrap';

export interface Book {
  _id: string;
  name: string;
  image: string;
  description: string;
  authors: string;
  publishers: string;
  isbn: number;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

const Book: React.FC<{ book: Book }> = ({ book }) => (
  <Card className="my-3 p-3 rounded" style={{height: '100%'}}>
    <Link to={`/book/${book._id}`}>
      <Card.Img src={book.image} variant="top" style={{minHeight: 290}}/>
    </Link>
    <Card.Body>
      <Link to={`/book/${book._id}`}>
        <Card.Title as="div">
          <strong>{book.name}</strong>
        </Card.Title>
      </Link>
      <Card.Text as="div">
        <Rating value={book.rating} text={`${book.numReviews} reviews`} />
      </Card.Text>
      <Card.Text as="h3">${book.price}</Card.Text>
    </Card.Body>
  </Card>
);

export default Book;
