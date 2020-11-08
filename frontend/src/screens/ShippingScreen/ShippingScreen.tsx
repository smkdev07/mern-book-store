import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { saveShippingAddress } from '../../store/actions/cart';

import FormContainer from '../../components/FormContainer/FormContainer';
import Steps from '../../components/Steps/Steps';

import { Form, Button } from 'react-bootstrap';

interface ShippingScreenProps extends RouteComponentProps {}

const checkoutSteps = [
  { name: 'Sign In', path: '/signin', isActive: true },
  { name: 'Shipping', path: '/shipping', isActive: true },
  { name: 'Payment', path: '/payment', isActive: false },
  { name: 'Place Order', path: '/placeorder', isActive: false },
];

const ShippingScreen: React.FC<ShippingScreenProps> = ({ history }) => {
  const cartState = useSelector((state: RootState) => state.cart);
  const { shippingAddress } = cartState;
  const dispatch = useDispatch();
  const [address, setAddress] = useState(shippingAddress?.address || '');
  const [city, setCity] = useState(shippingAddress?.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ''
  );
  const [country, setCountry] = useState(shippingAddress?.country || '');

  const submitHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push('/payment');
  };

  return (
    <FormContainer>
      <Steps steps={checkoutSteps} />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={address}
            required
            onChange={(event) => setAddress(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={city}
            required
            onChange={(event) => setCity(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Postal Code"
            value={postalCode}
            required
            onChange={(event) => setPostalCode(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Country"
            value={country}
            required
            onChange={(event) => setCountry(event.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
