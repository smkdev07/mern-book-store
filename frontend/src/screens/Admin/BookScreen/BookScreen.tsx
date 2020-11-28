import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { fetchBook } from '../../../store/actions/book';
import { updateBook } from '../../../store/actions/admin';

import axios, { AxiosRequestConfig } from 'axios';

import FormContainer from '../../../components/FormContainer/FormContainer';
import Loader from '../../../components/Loader/Loader';
import Message from '../../../components/Message/Message';

import { Button, Form } from 'react-bootstrap';

interface MatchParams {
  id: string;
}

interface BookScreenProps extends RouteComponentProps<MatchParams> {}

const BookScreen: React.FC<BookScreenProps> = ({ history, match }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [authors, setAuthors] = useState('');
  const [publishers, setPublishers] = useState('');
  const [isbn, setIsbn] = useState(0);
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const bookState = useSelector((state: RootState) => state.book);
  const { book, loading, error } = bookState;
  const adminState = useSelector((state: RootState) => state.admin);
  const { loading: adminLoading, error: adminError, redirect } = adminState;
  const userState = useSelector((state: RootState) => state.user);
  const { user } = userState;

  const bookId = match.params.id;

  const uploadFileHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files![0];
    const formData = new FormData();
    formData.append('image', file);

    setUploading(true);

    try {
      const options: AxiosRequestConfig = {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${user?.token}`,
        },
        url: '/api/upload',
        data: formData,
      };

      const { data } = await axios(options);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  const submitHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(
      updateBook(
        bookId,
        name,
        image,
        description,
        authors,
        publishers,
        isbn,
        price,
        countInStock
      )
    );
  };

  useEffect(() => {
    if (redirect) {
      history.push('/admin/books');
    }

    if (book && book._id === bookId) {
      setName(book.name);
      setImage(book.image);
      setDescription(book.description);
      setAuthors(book.authors);
      setPublishers(book.publishers);
      setIsbn(book.isbn);
      setPrice(book.price);
      setCountInStock(book.countInStock);
    } else {
      dispatch(fetchBook(bookId));
    }
  }, [dispatch, history, book, bookId, redirect]);

  return (
    <>
      <Link to="/admin/books" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Book</h1>
        {adminLoading && <Loader />}
        {adminError && <Message variant="danger">{adminError}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Image URL"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
              <Form.File
                id="file-image-upload"
                label="Choose File"
                custom
                accept="image/jpg, image/jpeg, image/png"
                onChange={uploadFileHandler}
              />
              {uploading && <Loader />}
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="authors">
              <Form.Label>Authors</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Authors (separated by comma)"
                value={authors}
                onChange={(event) => setAuthors(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="publishers">
              <Form.Label>Publishers</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Publishers (separated by comma)"
                value={publishers}
                onChange={(event) => setPublishers(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="isbn">
              <Form.Label>ISBN</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Isbn"
                value={isbn}
                onChange={(event) => setIsbn(+event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                value={price}
                onChange={(event) => setPrice(+event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="countInStock">
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Count In Stock"
                value={countInStock}
                onChange={(event) => setCountInStock(+event.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default BookScreen;
