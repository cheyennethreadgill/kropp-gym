import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeaderAccent from "../Global/headerAccent";

const Newsletter = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");

  const handleFormValidation = (event) => {
    event.preventDefault();

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
      const fetchPromiseResponse = await fetch(
        "https://kropp-gym-api.vercel.app/newsletter",
        postOptions
      );
      if (!fetchPromiseResponse.ok) {
        console.log(
          `Problem with fetching from server: ${fetchPromiseResponse.status}`
        );
      }
      const fetchJson = await fetchPromiseResponse.json();
      console.log(fetchJson);
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
              }}
            >
              <Form.Group as={Col}>
                <Form.Label htmlFor="email">
                  <HeaderAccent />
                  <div className="title-container">
                    <div className="title-container_characters">
                      <span className="title-container_characters_char">N</span>
                      <span className="title-container_characters_char">E</span>
                      <span className="title-container_characters_char">W</span>
                      <span className="title-container_characters_char">S</span>
                    </div>
                    <h2 className=" fs-1 fw-bold text-uppercase">Newsletter</h2>
                  </div>
                </Form.Label>
                <Form.Group className="input-container">
                  <Form.Control
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="true"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  <Form.Text>
                    <p className="fw-semibold fs-6">
                      Subscribe to our newsletter
                    </p>
                  </Form.Text>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email address.
                  </Form.Control.Feedback>
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
                </Form.Group>
              </Form.Group>
            </Form>
          </Col>
          <Col
            lg="6"
            className="ms-lg-5"
          >
            <h3 className="pb-3 fs-2 fw-bold">
              GET IN SHAPE WITH OUR PRO TRAINERS. REACH YOUR BODY GOALS IN NO
              TIME, CONTACT US
            </h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using distribution of letters, as opposed to using.
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
