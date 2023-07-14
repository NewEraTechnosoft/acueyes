import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

export default function AboutUs() {

  return (
    <div className="section section-basic" id="basic-elements">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <section className="section section-lg section-safe">
        <img
          alt="..."
          className="path"
          src={require("assets/img/path5.png")}
        />
        <Container>
          <Row className="row-grid justify-content-between">
            <Col md="5" >
              <img
                alt="..."
                className="img-fluid floating"
                src={require("assets/img/chester-wade.jpg")}
                data-aos="zoom-in"
              />
              <Card className="card-stats bg-warning" data-aos="fade-down" data-aos-delay="300">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">100%</CardTitle>
                      <p className="card-category text-white">Safe</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-info" data-aos="fade-right" data-aos-delay="300">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">60+</CardTitle>
                      <p className="card-category text-white">
                        Satisfied customers
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-default" data-aos="fade-up-left" data-aos-delay="300">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">65+</CardTitle>
                      <p className="card-category text-white">Business</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <div className="px-md-5">
                <hr className="line-success" />
                <div className="title">
                  <h2 className="title mb-3 mainTitle">About</h2>
                  <h3 className="mb-3 subTitle">Security Solutions & Services</h3>
                </div>
                <p>
                    Welcome to AcuEyes Solutions Pvt Ltd! We're a leading provider of digital
                  marketing services, dedicated to helping businesses thrive online. Our
                  experienced team stays ahead of industry trends to deliver measurable
                  results and personalized solutions. From SEO and PPC advertising to
                  social media marketing and content creation, we enhance your visibility,
                  drive qualified traffic, and generate valuable leads. We value transparency,
                  communication, and long-term partnerships. Whether you're a small startup
                  or an established enterprise, we have the tools, skills, and passion to
                  take your digital marketing efforts to the next level. Let us be your
                  partner in growth and help you unlock the full potential of your online
                  presence. Let us be your partner in growth and unlock your brand's full
                  online potential. Get in touch with us today and start your digital
                  success journey with AcuEyes Solutions.
                </p>
                <ul className="list-unstyled mt-2">
                  <li className="py-1">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-vector" />
                      </div>
                      <div className="ml-3">
                        <h6>100% Safe</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-tap-02" />
                      </div>
                      <div className="ml-3">
                        <h6>60+ Satisfied Customers</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <div className="ml-3">
                        <h6>65+ Business</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
