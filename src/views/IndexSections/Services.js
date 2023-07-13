import React from "react";
import { motion } from "framer-motion";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { Tilt } from "react-tilt";

export default function Tabs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <div className="section section-tabs">
      <Container>
        <div className="title">
          <h2 className="title mb-3 mainTitle">Services</h2>
          <h3 className="mb-3 subTitle">What we Offer</h3>
        </div>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <motion.div
            // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            >
              <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
              >
                <Card data-aos="zoom-in-right">
                  <CardHeader>
                    <h3>1. Search Engine Optimization (SEO)</h3>
                  </CardHeader>
                  <CardBody>
                    <p className="service-card-info">
                      Boost your online visibility and organic search rankings through our
                      comprehensive SEO strategies. We conduct keyword research, optimize
                      on-page elements, and build quality backlinks to attract targeted traffic.
                    </p>
                  </CardBody>
                </Card>
              </Tilt>
            </motion.div>

            <motion.div
            // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            >
              <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
              >
                <Card data-aos="zoom-in-right">
                  <CardHeader>
                    <h3>3. Pay-Per-Click (PPC) Advertising</h3>
                  </CardHeader>
                  <CardBody>
                    <p>
                      Drive immediate results and maximize ROI with our expertly managed PPC
                      campaigns. We create compelling ads, target specific audiences, and
                      continuously optimize campaigns for optimal performance and conversions.
                    </p>
                  </CardBody>
                </Card>
              </Tilt>
            </motion.div>

            <motion.div
            // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            >
              <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
              >
                <Card data-aos="zoom-in-right">
                  <CardHeader>
                    <h3>5. Social Media Marketing</h3>
                  </CardHeader>
                  <CardBody>
                    <p>
                      Engage your audience, increase brand awareness, and drive website traffic
                      using the power of social media. Our experts create captivating content and
                      implement effective strategies across platforms to grow your following and
                      encourage interactions.
                    </p>
                  </CardBody>
                </Card>
              </Tilt>
            </motion.div>

            <motion.div
            // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            >
              <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
              >
                <Card data-aos="zoom-in-right">
                  <CardHeader>
                    <h3>7. Analytics and Reporting</h3>
                  </CardHeader>
                  <CardBody>
                    <p>
                      Gain insights into your digital marketing efforts with comprehensive
                      analytics and detailed reports. Our reports provide actionable data on
                      your website's performance, campaign effectiveness, and audience behavior.
                    </p>

                  </CardBody>
                </Card>
              </Tilt>
            </motion.div>

          </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <motion.div
            // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            >
              <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
              >
                <Card data-aos="zoom-in-left">
                  <CardHeader>
                    <h3>2. Content Creation</h3>
                  </CardHeader>
                  <CardBody>
                    <p>
                      Our skilled writers and creators develop engaging blog posts,
                      articles, infographics, videos, and more to educate and entertain
                      your target audience.
                    </p>
                  </CardBody>
                </Card>
              </Tilt>
            </motion.div>

            <motion.div
            // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            >
              <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
              >
                <Card data-aos="zoom-in-left">
                  <CardHeader>
                    <h3>4. Email Marketing</h3>
                  </CardHeader>
                  <CardBody>
                    <p>
                      Nurture leads and convert customers with targeted email campaigns.
                      We craft engaging content, design eye-catching templates, and leverage
                      automation to build strong customer relationships and drive conversions.
                    </p>
                  </CardBody>
                </Card>
              </Tilt>
            </motion.div>

            <motion.div
            // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            >
              <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
              >
                <Card data-aos="zoom-in-left">
                  <CardHeader>
                    <h3>6. Conversion Rate Optimization (CRO)</h3>
                  </CardHeader>
                  <CardBody>
                    <p>
                      Improve your website's performance and increase conversions through
                      data-driven CRO strategies. We analyze user behavior, conduct A/B testing,
                      and make impactful design and call-to-action improvements.
                    </p>
                  </CardBody>
                </Card>
              </Tilt>
            </motion.div>

          </Col>
        </Row>
      </Container>
    </div >
  );
}
