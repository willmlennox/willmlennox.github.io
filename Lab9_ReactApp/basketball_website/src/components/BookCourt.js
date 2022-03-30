import React from "react";
import { Container, Button, Row, Col, Card, Form, Alert } from "react-bootstrap";
import { Modal} from "react-bootstrap";
import { useState } from "react";
import { courtData } from "./CourtData";

const BookCourt = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    
    const showModal = () => {
        setIsOpen(true);
    };
    
    const hideModal = () => {
        setIsOpen(false);
        showAlert();
        
    };

    const hideModal2 = () => {
        setIsOpen(false);
        showAlert2();
        
    };

    const showAlert = () => {
        setShow(true);
    };

    const showAlert2 = () => {
        setShow2(true);
    };


    return (
        <Container fluid className="mt-3 bg-light p-5 justify-content-md-center">

            <Col>

            <h1 className="text-center mb-5">Our Courts</h1>

            <Container className="text-center justify-content-md-center">

                <Row>

                {courtData.map((data, key) => {
                return (
                    <Card style={{ width: '18rem' }} key={key}>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.address}</Card.Text>
                    <Card.Footer>
                    {"Available: " + data.available}
                    </Card.Footer>
                    <Button onClick={showModal} variant="warning">Book Court</Button>
                    </Card>
                );
                })}

                </Row>

            </Container>

            <Alert show={show} className="mt-5" variant="success">
                <Alert.Heading>Successfully booked court</Alert.Heading>
            </Alert>

            <Alert show={show2} className="mt-5" variant="danger">
                <Alert.Heading>Error booking court</Alert.Heading>
            </Alert>

            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                <Modal.Title>Booking Court</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please enter your contact information to book this court:
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                        

                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <br></br>

                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter First Name" />
            
                        <br></br>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="" placeholder="Enter First Name" />

                        <br></br>

                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="" placeholder="Enter Last Name" />

                        <br></br>

                        <Form.Label>Credit Card Number</Form.Label>
                        <Form.Control type="" placeholder="Enter Credit Card Number" />
                        <br></br>

                        <Form.Label>Expiration Date</Form.Label>
                        <Form.Control type="" placeholder="Expiration Date" />
                        <br></br>

                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="" placeholder="CVV" />


                        </Form.Group>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                <Button onClick={hideModal2} variant="danger">Cancel</Button>
                <Button onClick={hideModal} variant="success">Submit</Button>
                </Modal.Footer>
            </Modal>

            </Col>

        </Container>
    )
    
}


export default BookCourt;