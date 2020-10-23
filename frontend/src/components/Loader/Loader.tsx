import React from 'react';

import { Spinner } from 'react-bootstrap';

const styles = {
  display: 'block',
  height: '100px',
  width: '100px',
  margin: 'auto',
};

const Loader: React.FC = () => (
  <Spinner animation="border" role="status" variant="primary" style={styles}>
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export default Loader;
