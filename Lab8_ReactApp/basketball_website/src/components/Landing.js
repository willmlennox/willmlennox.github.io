import React from "react";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";

// import img1 from "../images/basketball1.jpg";
// import img2 from "../images/basketball2.jpg";
// import img3 from "../images/basketball3.jpg";

const Landing = () => {

    const img1 = require("../images/basketball1.jpg")
    const img2 = require("../images/basketball2.jpg")
    const img3 = require("../images/basketball3.jpg")

    return (
        <Container fluid className="mt-3 bg-light p-5">
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

        <h2>Welcome to the Somerset Basketball League</h2>

        <Button>view services
        </Button>

         </Container>

    )
}


export default Landing;