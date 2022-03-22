import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navibar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Features</Nav.Link>
            <Nav.Link >Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Navibar