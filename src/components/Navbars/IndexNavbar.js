import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo (2).png"
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <img src={logo} alt=""/>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Digital Marketing Agency
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Acueyes
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>

            {/* .....option..... */}
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#home"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
              >
                <p className="">Home</p>
              </NavLink>
            </NavItem>

            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#about"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
              >
                <p className="">About</p>
              </NavLink>
            </NavItem>

            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#service"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
              >
                <p className="">Services</p>
              </NavLink>
            </NavItem>

            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#blog"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
              >
                <p className="">Blogs</p>
              </NavLink>
            </NavItem>

            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#contact"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
              >
                <p className="">Contact Us</p>
              </NavLink>
            </NavItem>
            {/* .....option..... */}

            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/company/acueyes-solutions/"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
