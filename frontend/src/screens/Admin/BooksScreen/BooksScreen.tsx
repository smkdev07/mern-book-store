import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { fetchBooks } from '../../../store/actions/books';
import { createBook, deleteBook } from '../../../store/actions/admin';
import { REQUEST_BOOK_RESET } from '../../../store/actions/admin-action-types';
import { REQUEST_BOOK_RESET as BOOK_RESET } from '../../../store/actions/book-action-types';

import Paginate from '../../../components/Paginate/Paginate';
import Loader from '../../../components/Loader/Loader';
import Message from '../../../components/Message/Message';

import { Row, Col, Table, Button } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

interface MatchParams {
  pageNumber: string;
}

interface BooksScreenProps extends RouteComponentProps<MatchParams> {}

const BooksScreen: React.FC<BooksScreenProps> = ({ history, match }) => {
  const dispatch = useDispatch();
  const booksState = useSelector((state: RootState) => state.books);
  const { page, pages, books, loading, error } = booksState;
  const adminState = useSelector((state: RootState) => state.admin);
  const {
    book: adminBook,
    loading: adminLoading,
    error: adminError,
    redirect,
  } = adminState;
  const userState = useSelector((state: RootState) => state.user);
  const { user } = userState;
  const pageNumber = +match.params.pageNumber || 1;

  const createBookHandler = () => {
    dispatch(createBook());
  };

  const deleteBookHandler = (bookId: string) => {
    if (window.confirm('Are you sure you want to remove this book?')) {
      dispatch(deleteBook(bookId));
    }
  };

  useEffect(() => {
    if (adminBook) {
      history.push(`/admin/book/${adminBook._id}`);
    } else if (user && user.isAdmin) {
      dispatch(fetchBooks('', pageNumber));
    } else {
      history.push('/signin');
    }
    dispatch({ type: REQUEST_BOOK_RESET });
    dispatch({ type: BOOK_RESET });
  }, [dispatch, history, user, adminBook, redirect, pageNumber]);
  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Books</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createBookHandler}>
            <FaPlus className="mb-1 mr-1" />
            Create Book
          </Button>
        </Col>
      </Row>
      {adminLoading && <Loader />}
      {adminError && <Message variant="danger">{adminError}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table
            striped
            bordered
            hover
            responsive
            variant="dark"
            className="table-sm text-center">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>NAME</th>
                <th>PRICE</th>
                <th>AUTHORS</th>
                <th>PUBLISHERS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book._id}>
                  {/* <td>{book._id}</td> */}
                  <td>{book.name}</td>
                  <td>${book.price}</td>
                  <td>{book.authors}</td>
                  <td>{book.publishers}</td>
                  <td>
                    <LinkContainer to={`/admin/book/${book._id}`}>
                      <Button variant="light" className="btn-sm mr-2">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteBookHandler(book._id)}>
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate page={page} pages={pages} isAdmin />
        </>
      )}
    </>
  );
};

export default BooksScreen;
