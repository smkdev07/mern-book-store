import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import BookScreen from './screens/BookScreen/BookScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import ShippingScreen from './screens/ShippingScreen/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen/OrderScreen';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import UserProfileScreen from './screens/UserProfileScreen/UserProfileScreen';
import UsersScreen from './screens/UsersScreen/UsersScreen';
import UserScreen from './screens/UserScreen/UserScreen';
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
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/signin" component={SignInScreen} />
        <Route path="/signup" component={SignUpScreen} />
        <Route path="/userprofile" component={UserProfileScreen} />
        <Route path="/admin/users" component={UsersScreen} />
        <Route path="/admin/user/:id" component={UserScreen} />
        <Route path="/" component={HomeScreen} exact />
      </Container>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
