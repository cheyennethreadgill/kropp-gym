import { Row, Col, Container, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PageHeaders from "../Global/PageHeaders";
import MainNav from "../Global/MainNav";
import Footer from "../Global/Footer";
import OrderDetails from "./OrderDetails";

const Checkout = ({ date, cartLength, cart, grandTotal }) => {
  Checkout.propTypes = {
    cart: PropTypes.array,
    cartLength: PropTypes.number.isRequired,
    grandTotal: PropTypes.number.isRequired,
  };

  const [clicked, setClicked] = useState(false);
  let FName = "";
  let LName = "";
  let email = "";
  let notes = "";

  const YourOrder = () => {
    return (
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
                    const { id, name, quantity, price } = item;

                    return (
                      <div key={id}>
                        <hr />
                        <Row className="mb-4 align-items-center">
                          <Col
                            lg="8"
                            className="d-flex gap-4 align-items-center"
                          >
                            <p className="fw-light fs-5 text-light">
                              {name}
                              <span className="fw-semibold">x {quantity}</span>
                            </p>
                          </Col>
                          <Col>${(price * quantity).toFixed(2)}</Col>
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
    );
  };

  const BillingDetails = () => {
    const [validated, setValidated] = useState(false);
    let navigate = useNavigate();

    // SUBMIT AND ADD ORDER TO DATABASE
    async function handleSubmit(event) {
      event.preventDefault();

      // POST ORDER REQUEST
      const postOptions = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "*",
        },
        body: JSON.stringify({
          FName: FName,
          LName: LName,
          email: email,
          total: grandTotal.toFixed(2),
          date: date,
          notes: notes,
        }),
      };

      try {
        const fetchPromiseResponse = await fetch(
          "https://kropp-gym-api.vercel.app/customerorder",
          postOptions
        );
        if (!fetchPromiseResponse.ok) {
          console.log(
            `Problem with fetching from server: ${fetchPromiseResponse.status}`
          );
        }
        const jsonPromiseResponse = await fetchPromiseResponse.json();

        console.log(jsonPromiseResponse);
      } catch {
        (err) => {
          console.log(`FETCH FAILED: ${err}`);
        };
      }
    }
    return (
      <section className="bg-dark pt-5 ">
        <Container>
          <Row className="gap-3">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Row className="mb-3 gap-4">
                <Col>
                  <Form.Group
                    md="6"
                    controlId="validationCustom01"
                  >
                    <Form.Label name="Checkout">
                      <h1 className="fs-3">Billing Details</h1>
                    </Form.Label>
                    <p className="text-light mb-2">First Name:</p>

                    <Form.Control
                      className="mb-4 form-control-light"
                      required
                      type="text"
                      placeholder="First name"
                      onChange={(e) => {
                        FName = e.target.value;
                      }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide first name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    md="6"
                    controlId="validationCustom02"
                  >
                    <p className="text-light  mb-2">Last Name:</p>

                    <Form.Control
                      className="form-control-light"
                      required
                      type="text"
                      placeholder="Last name"
                      onChange={(e) => {
                        LName = e.target.value;
                      }}
                    />

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide last name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    md="6"
                    controlId="validationCustom02"
                  >
                    <p className="text-light  mb-2">Email:</p>
                    <Form.Control
                      className="form-control-light"
                      required
                      type="email"
                      placeholder="Email"
                      onChange={(e) => {
                        email = e.target.value;
                      }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col
                  className="mb-3"
                  sm="12"
                  lg="6"
                >
                  <Form.Group
                    as={Col}
                    controlId="validationCustom04"
                  >
                    <Form.Label name="Additional Info">
                      <h1 className="fs-3">Additional Information</h1>
                    </Form.Label>
                    <p className="text-light mb-2">Notes</p>
                    <Form.Control
                      className="form-control-light"
                      as="textarea"
                      style={{ height: "150px" }}
                      placeholder="Notes"
                      onChange={(e) => {
                        notes = e.target.value;
                      }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Button
                onClick={(e) => {
                  handleSubmit(e);
                  setClicked(true);
                }}
                className="btn btn-light mt-3 pe-4"
              >
                Place Order
              </Button>
            </Form>
          </Row>
        </Container>
      </section>
    );
  };

  return (
    <section className="bg-dark checkout text-light">
      <MainNav
        darkMode={false}
        cartLength={cartLength}
      />
      <PageHeaders name="Checkout" />
      {clicked ? (
        <OrderDetails
          cart={cart}
          grandTotal={grandTotal}
          date={date}
          firstName={FName}
          lastName={LName}
          email={email}
          notes={notes}
        />
      ) : (
        <>
          <BillingDetails />
          <YourOrder />
        </>
      )}

      <Footer />
    </section>
  );
};

export default Checkout;
