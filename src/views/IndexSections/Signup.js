import React from "react";
import classnames from "classnames";
import "./SignUp.css";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Signup() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section section-signup">
      <Container>
        <div className="squares squareColor square-1" />
        <div className="squares squareColor square-2" />
        <div className="squares squareColor square-3" />
        <div className="squares squareColor square-4" />
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="6" data-aos="zoom-out-right">
            <h3 className="display-3 text-white">
              Maximize ROI with Data-Driven Digital Marketing: Our Proven Process
            </h3>
            <p className="text-white mb-3">
              Unleash the power of data-driven digital marketing with our proven
              process. Set clear goals and KPIs to measure success. Conduct thorough
              audience research, leveraging valuable data insights to shape a tailored
              strategy. Implement, optimize, and continuously measure results for
              remarkable growth and successful marketing outcomes. Experience the
              transformative potential of data in unlocking your digital marketing success.
            </p>
          </Col>
          <Col className="mb-lg-auto" lg="6">
            <Card className="card-register">
              <CardHeader className="cardHeader">
                <CardTitle tag="h6" className="bookTitle">Book a Free Consultation</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form form-block">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": fullNameFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Full Name"
                      type="text"
                      onFocus={(e) => setFullNameFocus(true)}
                      onBlur={(e) => setFullNameFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-notes" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Massage"
                      type="textarea"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-round submitBtn" color="primary" size="lg">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
