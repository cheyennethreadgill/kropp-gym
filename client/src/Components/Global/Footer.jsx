import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import logo from "../../images/Global/logo.png.webp";
import Socials from "./socials";

const Footer = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  // const URL = "http://localhost:3001";

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    // POST NEWLSETTER REQUEST
    const postOptions = {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    };
    fetch(`https://kropp-gym.vercel.app/newsletter`, postOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <footer className="footer bg-primary text-light">
      <Container className="py-5">
        <Row className="py-5 gap-3">
          <Col
            lg="3"
            className="me-5"
          >
            <Image
              alt="Company Logo"
              fluid
              src={logo}
              className="mb-3 mb-lg-5  pb-lg-4"
              width="100%"
              height="100%"
            />
          </Col>

          <Col
            lg="8"
            md="12"
            sm="12"
          >
            <h5 className="fw-light ">
              Please feel free to send us an e-mail at kropp@qodeinteractive.com
              for any additional inquiries
            </h5>
          </Col>
          <Col
            lg="3"
            className="me-lg-5"
          >
            <h3 className="fs-4 fw-bold">About</h3>
            <p className="text-light">
              Shape up your site with Kropp, a theme especially made for fitness
              & gym websites.
            </p>
          </Col>
          <Col
            lg="8"
            sm={{ order: 1 }}
          >
            <Row>
              <Col lg="4">
                <h3 className="fs-4 fw-bold">Working Hours</h3>
                <ul className="p-0">
                  <li className="text-light list-unstyled">
                    Monday-Friday <br /> 05:30 - 12:30
                  </li>

                  <li className="text-light  list-unstyled">
                    <br /> Weekdays <br /> 05:30 - 12:30
                  </li>
                </ul>
              </Col>
              <Col lg="4">
                <h3 className="fs-4 fw-bold">Location</h3>
                <p className="text-light">
                  68 Main St, Brooklyn <br />
                  NY 11201, United States
                </p>
                <br />
              </Col>
              <Col lg="4">
                <Form
                  name="Subscribe"
                  onSubmit={handleSubmit}
                >
                  <Form.Group>
                    <Form.Label htmlFor="email">
                      <h2 className="fs-4 fw-bold text-uppercase">Start Now</h2>
                    </Form.Label>
                    <div className="input-container">
                      <Form.Control
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="form-control-light"
                        autoComplete="true"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <div className="button-container">
                        <Button
                          aria-label="Subscribe"
                          variant="outline-light"
                          type="submit"
                        >
                          <span />
                        </Button>
                      </div>
                    </div>
                    <Form.Text>
                      <p className="fw-semibold fs-6">
                        Subscribe to our newsletter
                      </p>
                    </Form.Text>
                  </Form.Group>
                </Form>
                <Socials />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="copyright  bg-dark py-3 d-flex align-items-center">
        <Container className="">
          <p className="p-0 m-0 text-light">
            Copyright 2023 |
            <Link
              to="/Contact"
              className="text-light"
            >
              Contact |
            </Link>
            <Link
              to="/"
              className="text-light"
            >
              Privacy Policy
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
