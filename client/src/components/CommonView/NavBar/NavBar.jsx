import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./style.scss";
function NavBar() {
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
          <NavLink  exact="true" to="/home" className="nav-link" activeClassName="link-active">
            Home
          </NavLink>
          <NavLink  to="/Menu" className="nav-link" activeClassName="link-active">
            Menu
          </NavLink>
          <NavLink  to="/Service" className="nav-link" activeClassName="link-active">
            Service
          </NavLink>
          <NavLink  to="/Blog" className="nav-link" activeClassName="link-active">
            Blog
          </NavLink>
          <NavLink  to="/About" className="nav-link" activeClassName="link-active">
            About
          </NavLink>
          <NavLink className="nav-link" to="/Contact">
            Contact
          </NavLink>

          <NavLink className="nav-link" to="/Cart">
            <ShoppingCartIcon/>
          </NavLink>
       
          
        </Nav>
        <Nav>
          <NavLink className="nav-link" to="/register">
            register
          </NavLink>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
