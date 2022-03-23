import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from "../images/basketball-logo-3.jpg"

const Navibar = () => {

    const logo = require("../images/basketball-logo-3.jpg");

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
            <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
            Somerset Basketball League 
            </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link >Courts</Nav.Link>
            <Nav.Link >Teams</Nav.Link>
            <Nav.Link >Schedule</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Navibar