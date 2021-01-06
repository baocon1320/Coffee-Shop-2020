import React, { useState, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { signout, isAuthenticated } from "../../auth";

import "./style.scss";
function NavBar() {
  const [count, setCount] = useState(0);
  const [load, setLoad] = useState(false);
  const accessToken = JSON.parse(localStorage.getItem("jwt"));
  return (
    <Navbar
      bg="black"
      expand="lg"
      variant="dark"
      className="ftco-navbar-light"
      fixed="top"
    >
      <Navbar.Brand href="/">
        TH <small>Coffee</small>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <NavLink
            exact="true"
            to="/home"
            className="nav-link"
            activeClassName="link-active"
          >
            Home
          </NavLink>
          <NavLink
            to="/Menu"
            className="nav-link"
            activeClassName="link-active"
          >
            Menu
          </NavLink>
          <NavLink
            to="/Service"
            className="nav-link"
            activeClassName="link-active"
          >
            Service
          </NavLink>
          <NavLink
            to="/Blog"
            className="nav-link"
            activeClassName="link-active"
          >
            Blog
          </NavLink>
          <NavLink
            to="/About"
            className="nav-link"
            activeClassName="link-active"
          >
            About
          </NavLink>
          <NavLink className="nav-link" to="/Contact">
            Contact
          </NavLink>

          <NavLink className="nav-link" to="/Cart">
            <ShoppingCartIcon />
            {count}
          </NavLink>
        </Nav>
        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <NavLink className="nav-item pr-3" to="user/dashboard">
            user Dashboard
          </NavLink>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <NavLink className="nav-item pr-3" to="admin/dashboard">
            admin Dashboard
          </NavLink>
        )}
        {!isAuthenticated() && (
          <Nav>
            <NavLink className="nav-item pr-3" to="/register">
              register
            </NavLink>
            <NavLink className="nav-item" to="/login">
              loginin
            </NavLink>
          </Nav>
        )}
        {isAuthenticated() && (
          <Nav>
            <NavLink
              className="nav-item"
              to="/home"
              onClick={() =>
                signout(() => {
                  window.location.reload(false);
                })
              }
            >
              logout
            </NavLink>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
