import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

const Teams = () => {

    return (
        <Container fluid className="mt-3 bg-light p-5">
            <Row className="text-center">
                <Col>
                    <Button variant="warning">View All Teams</Button>
                </Col>
                <Col>
                    Available Teams
                    <Row className="justify-content-md-center pt-4">
                        <Card className="col-4 justify-content-md-center">
                            <Card.Subtitle className="mb-2 text-muted pt-4">Somerset Studs</Card.Subtitle>
                            <Card.Text>
                            Division 1: Ages 18+
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted pt-2">Chapel St. Dudes</Card.Subtitle>
                            <Card.Text>
                            Division 1: Ages 18+
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted pt-2">Cool Kids</Card.Subtitle>
                            <Card.Text className="pb-4">
                            Division 2: Ages 13-17
                            </Card.Text>
                        </Card>
                    </Row>
                </Col>
            </Row>
         </Container>

    )
}

export default Teams;