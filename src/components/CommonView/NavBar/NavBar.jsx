import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./style.css"

function NavBar() {
	return (
		<Navbar bg="transparent" expand="lg" variant="dark" fixed="top" className="ftco-navbar-light">
			<Navbar.Brand href="#">TH <small>Coffee</small></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="m-auto">
					<Link className="nav-link" to="/">Home</Link>
					<Link className="nav-link" to="/Menu">Menu</Link>
					<Link className="nav-link" to="/Service">Service</Link>
					<Link className="nav-link" to="/Blog">Blog</Link>
					<Link className="nav-link" to="/About">About</Link>
				</Nav>
				
				
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;