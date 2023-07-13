import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import firstvector from "../../assets/img/SEO.png";
import secvector from "../../assets/img/Social_Media.png";
import secondvector from "../../assets/img/PPC.png";
import {
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";
import "./Moreinfo.css"

let ps = null;

export default function MoreInfo() {


    // ......css.......
    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
        document.body.classList.toggle("profile-page");
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                // ps.destroy();
                document.documentElement.className += " perfect-scrollbar-off";
                document.documentElement.classList.remove("perfect-scrollbar-on");
            }
            document.body.classList.toggle("profile-page");
        };
    }, []);
    return (
        <>
            <div className="wrapper">
                <div className="">
                    <img
                        alt="..."
                        className="dots"
                        src={require("assets/img/dots.png")}
                    />
                    <img
                        alt="..."
                        className="path"
                        src={require("assets/img/path4.png")}
                    />
                    <Container className="align-items-center mt-5 mb-5">
                        <Row>
                            <Col lg="6" md="6" data-aos="fade-right">
                                <h5 className="text-on-back headerNo">01</h5>
                                <h1 className="profile-title text-left headerFont">Search Engine Optimization</h1>
                                <p className="profile-description">
                                    Our SEO experts will optimize your website for local andinternational search engines
                                    to improve its organic rankings. We will conduct thoroughkeyword research, optimize
                                    on-page elements, build high-quality backlinks, and continuouslymonitor and refine
                                    your SEO strategy to drive targeted traffic to your real estate website.
                                </p>
                                <div className="btn-wrapper pt-3">
                                    <Button
                                        className="btn-simple bookMark"
                                        color="primary"
                                        href="#contact"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Boost your digital presence
                                    </Button>
                                </div>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="4" md="6">
                                <img src={firstvector} alt=""/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="mt-5">
                    <Container>
                        <Row className="justify-content-between align-items-center">
                            <Col md="6">
                                <Row className="justify-content-between align-items-center">
                                    <img src={secvector} alt=""/>
                                </Row>
                            </Col>
                            <Col md="5" data-aos="fade-left">
                                <h5 className="text-on-back headerNo">02</h5>
                                <h1 className="profile-title text-left headerFont">Social Media</h1>
                                <p className="profile-description text-left">
                                    Our dedicated team of professionals will take charge of your social media accounts,
                                    ensuring consistent branding, and engaging content. we'll keep your social media
                                    profiles active and vibrant. Our data-driven social media marketing campaigns are
                                    designed to increase brand awareness, boost engagement, and drive conversions.
                                </p>
                                <div className="btn-wrapper pt-3">
                                    <Button
                                        className="btn-simple bookMark"
                                        color="primary"
                                        href="#contact"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Maximize your marketing impact
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <section className="section mt-5">
                    <Container className="align-items-center">
                        <Row className="justify-content-between align-items-center">
                            <Col lg="6" md="6" data-aos="fade-right">
                                <h5 className="text-on-back headerNo">03</h5>
                                <h1 className="profile-title text-left headerFont">Pay Per Click</h1>
                                <p className="profile-description">
                                    Supercharge your business with our targeted PPC campaigns! Unlock the power of
                                    Pay-Per-Click advertising for increased traffic, conversions, and ROI. <br/>
                                    <span className="ppcNo"> 1. Expertise: </span> Expert PPC specialists delivering exceptional results. With in-depth industry knowledge and up-to-date expertise, we create winning campaigns. <br/>
                                    <span className="ppcNo"> 2. Customization: </span> Customized PPC strategies for maximum ROI. Tailored to your goals, target audience, and budget, we deliver results that fit your unique business.<br/>
                                    <span className="ppcNo"> 3. Transparency: </span>  Transparent communication for PPC success. Detailed reports and regular updates empower you to track campaign performance and make informed business decisions.<br/>
                                    <span className="ppcNo"> 4. Continuous Optimization: </span>  Ongoing optimization for PPC success. We continuously refine and test strategies to maximize your campaign results over time. Your success is our priority.

                                </p>
                                <div className="btn-wrapper pt-3">
                                    <Button
                                        className="btn-simple bookMark"
                                        href="#contact"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Boost ROI with PPC campaigns
                                    </Button>
                                </div>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="4" md="6">
                                <img src={secondvector} alt=""/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    );
}
