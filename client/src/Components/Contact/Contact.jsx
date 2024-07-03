import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import MapGL from "../Utils/Map";
import PageHeadersInfo from "../Global/PageHeadersInfo";
import MainNav from "../Global/MainNav";
import Footer from "../Global/Footer";

const Contact = ({ cartLength }) => {
  Contact.propTypes = {
    cartLength: PropTypes.number.isRequired,
  };
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className="contact">
      <MainNav
        darkMode
        cartLength={cartLength}
      />
      <PageHeadersInfo
        name="Contact Us"
        // eslint-disable-next-line global-require
        img={require("../../images/Contact/contact-header.jpg.webp")}
      />
      <section style={{ height: "600px" }}>
        <MapGL />
      </section>
      <section className="bg-dark py-5">
        <Container>
          <Row className=" text-light py-5 gap-5">
            <Col
              md="12"
              lg="4"
              className="ms-lg-5"
            >
              <h3 className="pb-3 fs-1 fw-bold">Contact us and find your nearest gym</h3>
              <p className="text-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione omnis sapiente, alias praesentium
                inventore itaque.
              </p>
            </Col>
            <Col
              md="12"
              lg="6"
            >
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Row className="mb-4">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                  >
                    <Form.Label className="invisible">First name</Form.Label>
                    <Form.Control
                      className="form-control-light"
                      required
                      type="text"
                      placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom02"
                  >
                    <Form.Label className="invisible">Last name</Form.Label>
                    <Form.Control
                      className="form-control-light"
                      required
                      type="text"
                      placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    controlId="validationCustom04"
                    className="mb-2"
                  >
                    <Form.Label className="invisible">Message</Form.Label>
                    <Form.Control
                      className="form-control-light"
                      as="textarea"
                      placeholder="Notes"
                      required
                      style={{ height: "200px" }}
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <a
                  href="/"
                  aria-label="Submit contact information"
                  className="mt-3 btn btn-light btn-outline-light"
                >
                  Send
                  <div className="button-container">
                    <Button
                      aria-label="Submit contact information"
                      type="submit"
                      className="btn btn-outline-light"
                    >
                      <span />
                    </Button>
                  </div>
                </a>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </section>
  );
};

export default Contact;
