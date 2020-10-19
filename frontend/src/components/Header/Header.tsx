import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';

import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header: React.FC = () => (
  <header>
    <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Book Store</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link>
                <FaShoppingCart className="pb-1" size="1.25rem" /> Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>
                <FaUser className="pb-1" size="1.25rem" /> Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
