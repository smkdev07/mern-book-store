import React from 'react';

import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header: React.FC = () => (
  <header>
    <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Book Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cart">
              <FaShoppingCart className="pb-1" size="1.25rem" /> Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <FaUser className="pb-1" size="1.25rem" /> Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
