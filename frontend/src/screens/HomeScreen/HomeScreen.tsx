import React from 'react';

import Product from '../../components/Product/Product';

import { Row, Col } from 'react-bootstrap';

import products from '../../products';

const HomeScreen: React.FC = () => (
  <>
    <h1>Latest Products</h1>
    <Row>
      {products.map((product) => (
        <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default HomeScreen;
