import React, { useContext } from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../share/context/auth-context';

import './style.scss';
function ManagerNavBar() {
  const auth = useContext(AuthContext);

  function logoutHandler() {
    auth.logout();
    window.open(process.env.REACT_APP_BACKEND_URL + '/auth/logout', "_self");
  }
  return (
    <Navbar
      bg="black"
      expand="lg"
      variant="dark"
      className="ftco-navbar-light"
      fixed="top"
    >
      <Navbar.Brand href="/">
        GOC <small>Cafe</small>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {
        auth.isLoggedIn && (
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="m-auto">
              <NavLink
                exact="true"
                to="/baocon/info"
                className="nav-link"
                activeClassName="link-active" >
                Info Manager
          </NavLink>
              <NavLink
                to="/baocon/image"
                className="nav-link"
                activeClassName="link-active" >
                Quản lý hình nền
          </NavLink>
              <NavLink
                to="/baocon/category"
                className="nav-link"
                activeClassName="link-active" >
                Category Manager
          </NavLink>
              <NavLink
                to="/baocon/product"
                className="nav-link"
                activeClassName="link-active" >
                Product Manager
          </NavLink>
            </Nav>
            <Nav>
              <Form inline>
                <Button
                  variant="outline-success" onClick={logoutHandler}>
                  Logout
                  </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        )
      }
      {
        !auth.isLoggedIn && (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Form inline>
                <a className="btn btn-outline-warning" href="/baocon/login">
                  Login
                  </a>
              </Form>
            </Nav>
          </Navbar.Collapse>
        )
      }

    </Navbar>
  );
}

export default ManagerNavBar;
