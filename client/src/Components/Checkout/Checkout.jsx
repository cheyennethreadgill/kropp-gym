import { Row, Col, Container, Form, Button } from "react-bootstrap";
import React, { useState, useContext, createContext } from "react";
import PageHeaders from "../Global/PageHeaders.jsx";
import MainNav from "../Global/MainNav.tsx";
import Footer from "../Global/Footer.jsx";
import OrderDetails from "./OrderDetails.jsx";

// export const CheckoutFormContext = createContext({});

const YourOrder = (date, cartLength, cart, grandTotal) => {
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
                    <h5 className="fw-normal fs-5">${grandTotal.toFixed(2)}</h5>
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

// YOUR ORDER COMP**************
const BillingDetails = ({
  FName,
  LName,
  email,
  notes,
  handleFNameChange,
  handleEmailChange,
  handleNotesChange,
  handleLNameChange,
  handleClick,
  date,
  grandTotal,
}) => {
  const [validated, setValidated] = useState(false);
  // const { FName, LName, email, notes, setFName, setLName, setEmail, setNotes } = useContext(CheckoutFormContext);

  // SUBMIT AND ADD ORDER TO DATABASE
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

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
      const fetchPromiseResponse = await fetch("http://localhost:8080/customerorder", postOptions);
      handleClick(true);
      if (!fetchPromiseResponse.ok) {
        console.log(`Problem with fetching from server: ${fetchPromiseResponse.status}`);
      }
      const jsonPromiseResponse = await fetchPromiseResponse.json();

      console.log(jsonPromiseResponse);
    } catch (err) {
      handleClick(false);
      console.log(`FETCH FAILED: ${err}`);
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
                    value={FName}
                    onChange={(e) => {
                      handleFNameChange(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">Please provide first name.</Form.Control.Feedback>
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
                      handleLNameChange(e.target.value);
                    }}
                  />

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">Please provide last name.</Form.Control.Feedback>
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
                      handleEmailChange(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
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
                      handleNotesChange(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button
              type="submit"
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

const Checkout = ({
  items,
  setCart,
  URL,
  date,
  removeItem,
  decreaseQty,
  increaseQty,
  cartLength,
  cart,
  grandTotal,
}) => {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  // const CheckoutFormContextValues = {
  //   FName,
  //   LName,
  //   email,
  //   notes,
  //   setFName,
  //   setLName,
  //   setEmail,
  //   setNotes,
  // };

  // BILLING DETAILS COMP********

  // fname should be globally availible for order details component
  // setting fname in billing details
  // console.log(fname in post to see if its still populated)

  const [clicked, setClicked] = useState(false);
  return (
    // <CheckoutFormContext.Provider value={CheckoutFormContextValues}>
    <section className="bg-dark checkout text-light">
      <MainNav
        background="dark"
        navColor="light"
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
          <BillingDetails
            FName={FName}
            LName={LName}
            notes={notes}
            email={email}
            handleFNameChange={setFName}
            handleLNameChange={setLName}
            handleNotesChange={setNotes}
            handleEmailChange={setEmail}
            grandTotal={grandTotal}
            handleClick={setClicked}
            date={date}
          />
          <YourOrder
            date={date}
            cartLength={cartLength}
            cart={cart}
            grandTotal={grandTotal}
          />
        </>
      )}

      <Footer />
    </section>
    // </CheckoutFormContext.Provider>
  );
};

export default Checkout;
