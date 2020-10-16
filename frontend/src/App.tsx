import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Container } from 'react-bootstrap';
import './App.css';

const App: React.FunctionComponent = () => (
  <>
    <Header />
    <main className="py-3">
      <Container>
        <h1>Welcome to Book Shop</h1>
      </Container>
    </main>
    <Footer />
  </>
);

export default App;
