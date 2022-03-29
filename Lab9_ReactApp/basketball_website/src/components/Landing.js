import React from "react";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

// import img1 from "../images/basketball1.jpg";
// import img2 from "../images/basketball2.jpg";
// import img3 from "../images/basketball3.jpg";

const Landing = () => {

    const img1 = require("../images/basketball1.jpg")
    const img2 = require("../images/basketball2.jpg")
    const img3 = require("../images/basketball3.jpg")

    return (
        <Container fluid className="bg-light p-5">
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    width="1080"
                    height="700"
                    />
                    <Carousel.Caption >
                    <h1>Welcome to the Somerset Basketball League</h1>
                    <p>Get active, get social, play basketball.</p>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    width="1080"
                    height="700"
                    />

                    <Carousel.Caption >
                    <h1>Join a team or league</h1>
                    <p>Basketball leagues for all groups and ages.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    width="1080"
                    height="700"
                    />
                    <Carousel.Caption>
                    <h1>Train and practice</h1>
                    <p>Personal coaching, training and lessons available.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container className="text-center p-3">
                <h1 className="mt-5">Our Services</h1>
                <CardGroup className="p-5">
                    <Card border="secondary">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                        <Card.Title>Basketball Court Rental</Card.Title>
                        <Card.Text className="p-3">
                            We have a variety of indoor and outdoor courts available for booking all over Ottawa.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="warning">Book a Court</Button>
                        </Card.Footer>
                    </Card>
                    <Card border="secondary">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                        <Card.Title>Teams and Leagues</Card.Title>
                        <Card.Text className="p-3">
                            Our leagues are active year round. Find and join a team at any skill level and age group.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="warning">Join a Team</Button>
                        </Card.Footer>
                    </Card>
                    <Card border="secondary">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                        <Card.Title>Training and Coaching</Card.Title>
                        <Card.Text className="p-3">
                            Train and improve your basketball skills. Choose from a variety of coaches, trainers, and classes.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="warning">Find a Trainer</Button>
                        </Card.Footer>
                    </Card>
                    </CardGroup>
            </Container>
         </Container>
    )
}


export default Landing;