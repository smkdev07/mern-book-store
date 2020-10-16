import React from 'react';

import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Footer from './components/Footer/Footer';

import { Container } from 'react-bootstrap';
import './App.css';

const App: React.FC = () => (
  <>
    <Header />
    <main className="py-3">
      <Container>
        <HomeScreen />
      </Container>
    </main>
    <Footer />
  </>
);

export default App;
