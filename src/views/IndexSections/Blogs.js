import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "",
  },
];

export default function Blogs() {
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img alt="..." className="path" src={require("assets/img/path5.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />
     
      <div className="section">
        <Container>
          <div className="title">
            <h3>Carousel</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Bootstrap carousel
              </h1>
              <p className="text-white mt-4">
                Black Design comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
              </p>
              <Button
                className="mt-4"
                color="warning"
              >
                See all components
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
