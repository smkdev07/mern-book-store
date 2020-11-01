import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import BookScreen from './screens/BookScreen/BookScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import UserProfileScreen from './screens/UserProfileScreen/UserProfileScreen';
import Footer from './components/Footer/Footer';

import { Container } from 'react-bootstrap';
import './App.css';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <main className="py-3">
      <Container>
        <Route path="/book/:id" component={BookScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/signin" component={SignInScreen} />
        <Route path="/signup" component={SignUpScreen} />
        <Route path="/userprofile" component={UserProfileScreen} />
        <Route path="/" component={HomeScreen} exact />
      </Container>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
