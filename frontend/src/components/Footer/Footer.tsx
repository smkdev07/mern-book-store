import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FunctionComponent = () => (
  <footer>
    <Container>
      <Row>
        <Col className="text-center py-3">Copyright &copy; Book Store</Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
