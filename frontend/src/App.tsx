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
import AdminUsersScreen from './screens/Admin/UsersScreen/UsersScreen';
import AdminUserScreen from './screens/Admin/UserScreen/UserScreen';
import AdminBooksScreen from './screens/Admin/BooksScreen/BooksScreen';
import AdminBookScreen from './screens/Admin/BookScreen/BookScreen';
import AdminOrdersScreen from './screens/Admin/OrdersScreen/OrdersScreen';
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
        <Route path="/admin/users" component={AdminUsersScreen} />
        <Route path="/admin/user/:id" component={AdminUserScreen} />
        <Route path="/admin/books" component={AdminBooksScreen} exact />
        <Route
          path="/admin/books/page/:pageNumber"
          component={AdminBooksScreen}
          exact
        />
        <Route path="/admin/book/:id" component={AdminBookScreen} />
        <Route path="/admin/orders" component={AdminOrdersScreen} />
        <Route path="/admin/order/:id" component={OrderScreen} />
        <Route path="/search/:searchTerm" component={HomeScreen} exact />
        <Route
          path="/search/:searchTerm/page/:pageNumber"
          component={HomeScreen}
          exact
        />
        <Route path="/page/:pageNumber" component={HomeScreen} exact />
        <Route path="/" component={HomeScreen} exact />
      </Container>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
