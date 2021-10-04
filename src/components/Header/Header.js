import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img className="logo" src={logo} alt="" />
                    <Nav className="me-end">
                        <Link className="nav-link text-warning" to="/">Home</Link>
                        <Link className="nav-link text-warning" to="/services">Services</Link>
                        <Link className="nav-link text-warning" to="/admission">Admission</Link>
                        <Link className="nav-link text-warning" to="/about">About</Link>
                    </Nav>
                </Container>
            </Navbar>





        </>
    );
};

export default Header;