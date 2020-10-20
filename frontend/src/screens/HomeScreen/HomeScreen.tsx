import React from 'react';

import Book from '../../components/Book/Book';

import { Row, Col } from 'react-bootstrap';

import books from '../../books';

const HomeScreen: React.FC = () => (
  <>
    <h1>Latest Books</h1>
    <Row>
      {books.map((book) => (
        <Col
          key={book._id}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          style={{ marginBottom: '1.5rem' }}>
          <Book book={book} />
        </Col>
      ))}
    </Row>
  </>
);

export default HomeScreen;
