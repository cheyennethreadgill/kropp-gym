import { Row, Col, Container, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import PropTypes from "prop-types";
import PageHeaders from "../Global/PageHeaders";
import MainNav from "../Global/MainNav";
import Footer from "../Global/Footer";

const Checkout = ({ cartLength, cart, grandTotal }) => {
  Checkout.propTypes = {
    cart: PropTypes.arrayOf.isRequired,
    cartLength: PropTypes.func.isRequired,
    grandTotal: PropTypes.func.isRequired,
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
    <section className="bg-dark checkout text-light">
      <MainNav darkMode="false" cartLength={cartLength} />
      <PageHeaders name="Checkout" />
      <section className="bg-dark pt-5 ">
        <Container>
          <Row className="gap-3">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3 gap-4">
                <Col>
                  <Form.Group md="6" controlId="validationCustom01">
                    <Form.Label name="Checkout">
                      <h1 className="fs-3">Billing Details</h1>
                    </Form.Label>
                    <p className="text-light mb-2">First Name:</p>
                    <Form.Control
                      className="mb-4 form-control-light"
                      required
                      type="text"
                      placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide first name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="6" controlId="validationCustom02">
                    <p className="text-light  mb-2">Last Name:</p>
                    <Form.Control
                      className="form-control-light"
                      required
                      type="text"
                      placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide last name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group md="6" controlId="validationCustom02">
                    <p className="text-light  mb-2">Email:</p>
                    <Form.Control
                      className="form-control-light"
                      required
                      type="email"
                      placeholder="Email"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col className="mb-3" sm="12" lg="6">
                  <Form.Group as={Col} controlId="validationCustom04">
                    <Form.Label name="Additional Info">
                      <h1 className="fs-3">Additional Information</h1>
                    </Form.Label>
                    <p className="text-light mb-2">Notes</p>
                    <Form.Control
                      className="form-control-light"
                      as="textarea"
                      style={{ height: "150px" }}
                      placeholder="Notes"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Button type="submit" className="btn btn-light mt-3 pe-4">
                Place Order
              </Button>
            </Form>
          </Row>
        </Container>
      </section>
      <section className="bg-dark pb-5 mb-5 order">
        <Container>
          <Row>
            <Col lg="10">
              {cartLength > 0 ? (
                <section>
                  <h1 className="my-5 pt-5 fw-semibold fs-3">Your Order</h1>

                  <Row>
                    <Col>
                      <h5>Product</h5>
                    </Col>
                    <Col lg="4">
                      <h5>Subotal</h5>
                    </Col>
                  </Row>

                  {cart.map((item) => {
                    return (
                      <div key={item.id}>
                        <hr />
                        <Row className="mb-4 align-items-center">
                          <Col
                            lg="8"
                            className="d-flex gap-4 align-items-center"
                          >
                            <p className="fw-light fs-5 text-light">
                              {item.name}
                              <span className="fw-semibold">
                                x {item.quantity}
                              </span>
                            </p>
                          </Col>
                          <Col>${(item.price * item.quantity).toFixed(2)}</Col>
                        </Row>
                      </div>
                    );
                  })}

                  <hr />

                  <Row>
                    <Col>
                      <h4 className="fw-normal">Total</h4>
                    </Col>
                    <Col lg="4">
                      <h5 className="fw-normal fs-5">
                        ${grandTotal.toFixed(2)}
                      </h5>
                    </Col>
                  </Row>

                  <hr />
                </section>
              ) : null}
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </section>
  );
};

export default Checkout;
