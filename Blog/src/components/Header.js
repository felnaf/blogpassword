import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions';

const Header = () => {
  const dispatch = useDispatch();
  const { userLoggeIn } = useSelector((state) => state.postReducer);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg"
              height="50px"
            />
            Navbar scroll
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {userLoggeIn ? (
                <Nav>
                  <Nav.Link as={Link} to="/blog-management">
                    Blog Management
                  </Nav.Link>
                  <Nav.Link as={Link} to="/changepassword">
                    Change Password
                  </Nav.Link>
                  <Nav.Link to="/" onClick={() => dispatch(logout())}>
                    Logout
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav>
                  {' '}
                  <Nav.Link as={Link} to="/blogs">
                    Blogs
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                </Nav>
              )}

              <Nav.Link as={Link} to="/contact">
                Contact us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
