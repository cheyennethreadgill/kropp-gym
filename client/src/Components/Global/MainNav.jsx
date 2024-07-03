import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Logo from "../../images/Global/logo.png.webp";

const MainNav = ({ index, background, color, darkMode, cartLength }) => {
  console.log(color);

  MainNav.propTypes = {
    darkMode: PropTypes.bool,
    cartLength: PropTypes.number.isRequired,
  };
  return (
    <section className="position-relative ">
      <Navbar
        expand="lg"
        bg={darkMode ? "dark" : "none"}
        data-bs-theme={darkMode ? "dark" : background}
        className={darkMode ? "main-nav py-2 position-initial z-3 w-100 " : "main-nav py-2 position-absolute z-3 w-100"}
      >
        <Container
          fluid
          className="main-nav_container"
        >
          <Navbar.Brand
            href="/"
            className="d-none d-lg-block"
          >
            <Image
              alt="Company Logo"
              src={Logo}
              width="150px"
              height="100%"
              className={color === "light" ? "main-nav_logo_light" : "main-nav_logo_dark"}
            />
          </Navbar.Brand>

          <Navbar.Brand
            href="/"
            className="d-lg-none"
          >
            <Image
              alt="Company Logo"
              src={Logo}
              width="120px"
              height="100%"
              className="main-nav_mobile_logo "
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-label="Mobile Toggle Button"
            className=" main-nav_toggle"
          />

          <Navbar.Collapse className="justify-content-between">
            <Navbar.Brand
              href="/"
              className="opacity-0"
            >
              <Image
                alt="Company Logo"
                src={Logo}
                width="0px"
                height="100%"
              />
            </Navbar.Brand>

            <Nav className="fs-7 letter-spacing-1 fw-bold main-nav py-4 gap-5 text-uppercase">
              <Link
                to="/"
                className={
                  color === "light"
                    ? "d-flex justify-content-between text-light"
                    : "d-flex justify-content-between text-dark"
                }
              >
                Home
                <span>
                  <i className="d-lg-none fa-solid fa-angle-right" />
                </span>
              </Link>

              <Link
                to="/Team"
                className={
                  color === "light"
                    ? "d-flex justify-content-between text-light"
                    : "d-flex justify-content-between text-dark"
                }
              >
                Team
                <span>
                  <i className="d-lg-none fa-solid fa-angle-right" />
                </span>
              </Link>

              <Link
                to="/PricingPlan"
                className={
                  color === "light"
                    ? "d-flex justify-content-between text-light"
                    : "d-flex justify-content-between text-dark"
                }
              >
                Pricing
                <span>
                  <i className="d-lg-none fa-solid fa-angle-right" />
                </span>
              </Link>

              <Link
                to="/Contact"
                className={
                  color === "light"
                    ? "d-flex justify-content-between text-light"
                    : "d-flex justify-content-between text-dark"
                }
              >
                Contact
                <span>
                  <i className="d-lg-none fa-solid fa-angle-right" />
                </span>
              </Link>
            </Nav>

            <Row>
              <Link
                to="/Cart"
                className={
                  color === "light"
                    ? "d-flex justify-content-between fw-semibold text-light"
                    : "d-flex justify-content-between fw-semibold text-dark"
                }
              >
                Cart ({cartLength})
                <span>
                  <i className="d-lg-none fa-solid fa-angle-right" />
                </span>
              </Link>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default MainNav;
