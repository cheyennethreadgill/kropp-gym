import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeaderAccent from "../Global/headerAccent";
import log from "../../animations";
import Accents from "../Global/Accents";

const Newsletter = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const handleFormValidation = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  async function handleNewsletterFetch(event) {
    // POST NEWLSETTER REQUEST
    const postOptions = {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, *",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    };

    try {
      const fetchPromiseResponse = await fetch("https://kropp-gym-api.vercel.app/newsletter", postOptions);
      if (!fetchPromiseResponse.ok) {
        console.log(`Problem with fetching from server: ${fetchPromiseResponse.status}`);
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
    <section className="home_newsletter pt-5 ">
      <Container className="pt-lg-5 ">
        <Row className="gap-3 gap-lg-5 ">
          <Col
            lg="4"
            className="me-lg-5"
          >
            <Form
              noValidate
              validated={validated}
              onSubmit={(event) => {
                handleFormValidation(event);
                handleNewsletterFetch(event);
              }}
            >
              <Form.Group
                as={Col}
                className="position-relative"
              >
                <Form.Label htmlFor="email">
                  <Accents
                    AccentKey={"newsletter key"}
                    title={"news"}
                    letters={["n", "e", "w", "s"]}
                    large={false}
                  />
                  <HeaderAccent
                    width="25"
                    title={"newsletter"}
                  />
                </Form.Label>

                <Form.Group className="input-container">
                  <Form.Control
                    className=""
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="true"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <div className="button-container">
                    <Button
                      name="Subscribe"
                      variant="outline-dark"
                      aria-label="Subsribe to Newsletter"
                      type="submit"
                    >
                      <span />
                    </Button>
                  </div>
                  <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                </Form.Group>
                <Form.Text>
                  <p className="fw-semibold fs-6">Subscribe to our newsletter</p>
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
          <Col
            lg="6"
            className="ms-lg-5"
          >
            <h3 className="pb-3 fs-2 fw-bold">
              GET IN SHAPE WITH OUR PRO TRAINERS. REACH YOUR BODY GOALS IN NO TIME, CONTACT US
            </h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using distribution of letters, as opposed to using.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="h1-primary fw-bold pt-lg-5 ">Routines</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
