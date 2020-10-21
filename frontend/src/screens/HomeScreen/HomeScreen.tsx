import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Book, { Book as BookModel } from '../../components/Book/Book';

import { Row, Col } from 'react-bootstrap';

const HomeScreen: React.FC = () => {
  const [books, setBooks] = useState<BookModel[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await axios.get('/api/books');

      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
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
};

export default HomeScreen;
