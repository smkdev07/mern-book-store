import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { savePaymentMethod } from '../../store/actions/cart';

import FormContainer from '../../components/FormContainer/FormContainer';
import Steps from '../../components/Steps/Steps';

import { Col, Form, Button } from 'react-bootstrap';

interface PaymentScreenProps extends RouteComponentProps {}

const checkoutSteps = [
  { name: 'Sign In', path: '/signin', isActive: true },
  { name: 'Shipping', path: '/shipping', isActive: true },
  { name: 'Payment', path: '/payment', isActive: true },
  { name: 'Place Order', path: '/placeorder', isActive: false },
];

const PaymentScreen: React.FC<PaymentScreenProps> = ({ history }) => {
  const cartState = useSelector((state: RootState) => state.cart);
  const { shippingAddress, paymentMethod: savedPaymentMethod } = cartState;
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState(
    savedPaymentMethod || 'PayPal'
  );

  if (!shippingAddress) {
    history.push('/shipping');
  }

  const submitHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

  return (
    <FormContainer>
      <Steps steps={checkoutSteps} />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked={paymentMethod === 'PayPal'}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPaymentMethod(event.target.value)
              }
            />
            <Form.Check
              type="radio"
              label="Stripe"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              checked={paymentMethod === 'Stripe'}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPaymentMethod(event.target.value)
              }
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
