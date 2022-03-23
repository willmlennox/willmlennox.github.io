import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

const Coaching = () => {

    const coach1 = require("../images/coach1.jpg");
    const coach2 = require("../images/coach2.jpg");

    return (
        
        <Container fluid className="bg-light p-5">
            <Container className="">
                <h1 className="text-center mb-3">Reach your full potential</h1>
                <p className="text-center mb-5">Book time with our trainers and coaches. They will help you improve your skills and become the best basketball player you can be.</p>
                <Row>
                    <Col className="">
                    <h3 className="mb-5">Our Coaches</h3>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={coach1} />
                    <Card.Body className="m-3">
                        <Card.Title>Coach Gregg Popovich</Card.Title>
                        <Card.Text>
                        Gregg Charles Popovich is an American professional basketball coach and executive who is the president and head coach of the San Antonio Spurs of the National Basketball Association.
                        </Card.Text>
                        <Button variant="warning">Coach Me</Button>
                    </Card.Body>
                    </Card>
                    <br></br>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={coach2} />
                    <Card.Body className="m-3">
                        <Card.Title>Coach Doc Rivers</Card.Title>
                        <Card.Text>
                        Glenn Anton "Doc" Rivers is an American professional basketball coach and former player who is the head coach for the Philadelphia 76ers of the National Basketball Association.
                        </Card.Text>
                        <Button variant="warning">Coach Me</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    
                    <Col>
                        <Container className="bg-white p-5 border text-center">
                            <p>Perhaps you would like to make the jump from house league to competitive or from a reserve player to a starter.  We have the right program for you. With the explosion of basketball in Canada, Ottawa in particular, Somerset Basketball League recognizes the need for more elite training for our young athletes striving to reach the next level. </p>
                            <Button variant="warning">View Programs</Button>
                        </Container>
                    </Col>
                    
                    
                    
                </Row>
            </Container>

         </Container>

    )
}


export default Coaching;