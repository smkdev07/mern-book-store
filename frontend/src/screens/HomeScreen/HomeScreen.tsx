import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchBooks } from '../../store/actions/books';

import Book from '../../components/Book/Book';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

import { Row, Col } from 'react-bootstrap';

interface MatchParams {
  searchTerm: string;
}

interface HomeScreenProps extends RouteComponentProps<MatchParams> {}

const HomeScreen: React.FC<HomeScreenProps> = ({ match }) => {
  const dispatch = useDispatch();
  const booksState = useSelector((state: RootState) => state.books);
  const { books, loading, error } = booksState;
  const searchTerm = match.params.searchTerm;

  useEffect(() => {
    dispatch(fetchBooks(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <>
      <h1>Latest Books</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
      )}
    </>
  );
};

export default HomeScreen;
