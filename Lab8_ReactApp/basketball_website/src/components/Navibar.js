import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from "../images/basketball-logo-3.jpg"

const Navibar = () => {

    const logo = require("../images/basketball-logo-3.jpg");

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">
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
            <Nav.Link href="courts">Courts</Nav.Link>
            <Nav.Link href="teams">Teams</Nav.Link>
            <Nav.Link href="coaching">Coaching</Nav.Link>
            <Nav.Link href="schedule">Schedule</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Navibar