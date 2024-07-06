import React, { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Logo from "../../images/Global/logo.png.webp";

const MainNav = ({ background, navColor, darkMode, cartLength }) => {
  MainNav.propTypes = {
    darkMode: PropTypes.bool,
    cartLength: PropTypes.number.isRequired,
  };
  const [expanded, setExpanded] = useState(false);
  const [mobileViewActive, setMobileViewActive] = useState(false);
  const mobileView = window.matchMedia("(max-width: 600px)");

  const handleMobileView = () => {
    if (mobileView.matches) {
      setMobileViewActive(true);
    } else {
      setMobileViewActive(false);
    }
  };
  window.addEventListener("resize", handleMobileView, false);

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
          {/* desktop logo */}
          <Navbar.Brand
            href="/"
            className="d-none d-lg-block"
          >
            <Image
              alt="Company Logo"
              src={Logo}
              width="150px"
              height="100%"
              className={
                navColor === "light" && !darkMode
                  ? "main-nav_logo_light"
                  : "main-nav_logo_dark" && darkMode
                  ? "main-nav_logo_light"
                  : "main-nav_logo_dark"
              }
            />
          </Navbar.Brand>

          {/* Mobile logo */}
          <Navbar.Brand
            href="/"
            className="d-lg-none"
          >
            <Image
              alt="Company Logo"
              src={Logo}
              width="120px"
              height="100%"
              className={
                navColor === "light" && !darkMode
                  ? "main-nav_mobile_logo main-nav_logo_light"
                  : "main-nav_mobile_logo main-nav_logo_dark" && darkMode
                  ? "main-nav_mobile_logo main-nav_logo_light"
                  : "main-nav_mobile_logo main-nav_logo_dark"
              }
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-label="Mobile Toggle Button"
            className=" main-nav_toggle"
          />

          <Navbar.Collapse className="justify-content-between  mb-4">
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

            <Nav className="fs-7 letter-spacing-1 fw-bold main-nav py-5 gap-5 text-uppercase">
              <Link
                to="/"
                className={
                  navColor === "light"
                    ? "d-flex justify-content-between text-light"
                    : "d-flex justify-content-between text-dark" &&
                      mobileViewActive &&
                      "d-flex justify-content-between text-light"
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
                  navColor === "light"
                    ? "d-flex justify-content-between text-light"
                    : "d-flex justify-content-between text-dark" &&
                      mobileViewActive &&
                      "d-flex justify-content-between text-light"
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
                  navColor === "light"
                    ? "d-flex justify-content-between text-light"
                    : "d-flex justify-content-between text-dark" &&
                      mobileViewActive &&
                      "d-flex justify-content-between text-light"
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
                  navColor === "light"
                    ? "d-flex justify-content-between text-light"
                    : "d-flex justify-content-between text-dark" &&
                      mobileViewActive &&
                      "d-flex justify-content-between text-light"
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
                  navColor === "light"
                    ? "d-flex justify-content-between fw-semibold text-light"
                    : "d-flex justify-content-between fw-semibold text-dark" &&
                      mobileViewActive &&
                      "d-flex justify-content-between text-light"
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
