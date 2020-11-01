import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

export interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => (
  <Container>
    <Row className="justify-content-md-center">
      <Col xs={12} md={6}>
        {children}
      </Col>
    </Row>
  </Container>
);

export default FormContainer;
