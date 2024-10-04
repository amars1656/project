import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css';

const NavbarComponent = ({ openLoginModal }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar fixed-top">
            <Navbar.Brand as={Link} to="/" className="navbar-logo">
                <h1>LMS</h1>
                <p>Lawyer Management System</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" className="navbar-links">Home</Nav.Link>
                    <Nav.Link as={Link} to="/AboutUs" className="navbar-links">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/ListedLawyers" className="navbar-links">Lawyers / Advocates</Nav.Link>
                    <Nav.Link as={Link} to="/AddLawyer" className="navbar-links">Add Lawyers / Advocates</Nav.Link>
                    <Nav.Link as={Link} to="/Contact" className="navbar-links">Contact Us</Nav.Link>
                    <Nav.Link as={Link} to="/AdminDashboard" className="navbar-links">Admin Dashboard</Nav.Link>
                </Nav>
                <Button className="navbar-login-btn" onClick={openLoginModal}>Login</Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
