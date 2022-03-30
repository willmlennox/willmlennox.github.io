import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

const Courts = () => {

    return (
        <Container fluid className="mt-3 bg-light p-5">
            <Row className="text-center">
                <Col>
                    <Button variant="warning" href="/bookcourt">View Courts</Button>
                </Col>
                <Col>
                    Available Courts
                    <Row className="justify-content-md-center pt-4">
                        <Card className="col-4 justify-content-md-center">
                            <Card.Subtitle className="mb-2 text-muted pt-4">Madison Square Garden</Card.Subtitle>
                            <Card.Text>
                            4 Pennsylvania Plaza, New York, NY 10001, United States
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted pt-2">Crypto.com Arena</Card.Subtitle>
                            <Card.Text>
                            1111 S. Figueroa Street, Los Angeles, CA 90015, United States
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted pt-2">Scotiabank Arena</Card.Subtitle>
                            <Card.Text className="pb-4">
                            40 Bay Street Toronto, Ontario M5J 2X2, Canada
                            </Card.Text>
                        </Card>
                    </Row>
                </Col>
            </Row>
         </Container>
    )
}


export default Courts;