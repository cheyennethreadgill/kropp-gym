import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Logo from "../../images/Global/logo.png.webp";

const MainNavInverted = ({ cartLength }) => {
  MainNavInverted.propTypes = {
    cartLength: PropTypes.number.isRequired,
  };
  return (
    <Navbar expand="lg" className="main-nav py-4 z-3 w-100 bg-dark">
      <Container fluid className="main-nav_container">
        <Navbar.Brand className="d-none d-lg-block">
          <Image
            alt="Company Logo"
            src={Logo}
            width={150}
            className="main-nav_logo "
          />
        </Navbar.Brand>

        <Navbar.Brand className="d-lg-none">
          <Image
            alt="Company Logo"
            src={Logo}
            width={120}
            className="main-nav_mobile_logo "
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className=" main-nav_toggle"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse className="justify-content-between  ">
          <Nav className="fw-semibold main-nav py-4 ">
            <Nav.Link
              className=" main-nav_link text-primary d-flex justify-content-between"
              href="#Home"
            >
              <Link to="/">
                Home
                <span>
                  <i className="d-lg-none fa-solid fa-angle-right" />
                </span>
              </Link>
            </Nav.Link>
            <Nav.Link
              className="main-nav_link text-primary d-flex justify-content-between"
              href="#Team"
            >
              <Link to="/Team">
                Team
                <span>
                  <i className="d-lg-none fa-solid fa-angle-right" />
                </span>
              </Link>
            </Nav.Link>
            <Nav.Link
              className="main-nav_link text-primary d-flex justify-content-between"
              href="#PricingPlan"
            >
              <Link to="/PricingPlan">
                Pricing
                <span>
                  <i className="d-lg-none fa-solid fa-angle-right" />
                </span>
              </Link>
            </Nav.Link>
          </Nav>
          <Row>
            <Nav.Link
              className="main-nav_link text-primary d-flex gap-1 fw-bold"
              href="#Cart"
            >
              <Link to="/Cart">
                Cart <span className="pb-1"> ({cartLength})</span>
                <span>
                  <i className="d-lg-none fa-solid fa-angle-right" />
                </span>
              </Link>
            </Nav.Link>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavInverted;
