import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import PageHeadersInfo from "../Global/PageHeadersInfo";
import MainNav from "../Global/MainNav";
import members from "./teamList";
import Footer from "../Global/Footer";
import HeaderAccent from "../Global/headerAccent";
import Socials from "../Global/socials";

const Team = ({ cartLength }) => {
  Team.propTypes = {
    cartLength: PropTypes.number.isRequired,
  };

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
    <section className="team ">
      <MainNav
        darkMode
        cartLength={cartLength}
      />
      <PageHeadersInfo
        name="Our Team"
        // eslint-disable-next-line global-require
        img={require("../../images/Team/Team-header.jpg.webp")}
      />
      <section className="team_members text-light text-center bg-dark">
        <Container className="py-5 ">
          <h2 className="h1-secondary fw-bold pt-5 mt-3 position-relative">
            <HeaderAccent />
            Meet Our strongest team
          </h2>
          <h5 className="fw-light">Find your perfect mentor! Join us!</h5>
          {/* ----------------------------------------------------- *------------------------ROW----*/}
          <Row className="py-5 team_members_container justify-content-md-center">
            {/* -----------------------------------------------------------------------------Memebers map backup */}
            {members.map((person) => {
              const { id, fname, lname, position, img } = person;

              return (
                <Col
                  lg="4"
                  md="3"
                  sm="12"
                  className="team_members_info "
                  key={id}
                >
                  <div className="team_members_info_bio">
                    <h2 className="fw-bold m-0">{fname}</h2>
                    <h2 className="fw-bold m-0">{lname}</h2>
                    <p className="text-light team_members_info_bio_position">
                      {position}
                    </p>
                  </div>
                  <div className="team_members_info_socials">
                    <span>
                      <svg
                        className="position-absolute home_trainer_element"
                        xmlns="http://www.w3.org/2000/svg"
                        width="195.337"
                        height="195.337"
                        viewBox="0 0 195.337 195.337"
                      >
                        <path
                          d="M40.269,0,.37,39.9H125.879L0,165.778,28.222,194,154.082,68.121V193.63L194,153.712V0Z"
                          transform="translate(194.5 194.837) rotate(180)"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </svg>
                      <div className="team_members_info_socials_icons">
                        <Socials />
                      </div>
                    </span>
                  </div>

                  <Image
                    alt={`${lname} ${fname}`}
                    fluid
                    width="180"
                    roundedCircle
                    className="team_members_info_img"
                    src={img}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="team_subscribe bg-dark text-light">
        <Container className="pt-5 pb-4">
          <Form
            className="text-light w-75 m-0 m-auto py-5"
            onSubmit={handleSubmit}
          >
            <Form.Group className="text-center pb-5">
              <h2 className="h1-secondary fw-bold pt-5 mt-3 position-relative ">
                <HeaderAccent />
                subscribe
              </h2>
              <Form.Text>
                <h5 className="text-light fw-light mb-5">
                  Find your perfect mentor! Join us!
                </h5>
              </Form.Text>
              <Row className="gap-3 gap-lg-0 align-items-end">
                <Col
                  lg="4"
                  md="12"
                >
                  <Form.Label htmlFor="email" />
                  <Form.Control
                    autoComplete="true"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Col>
                <Col
                  lg="2"
                  md="12"
                >
                  <a
                    href="/Team"
                    aria-label="Subscribe"
                    className="btn-light"
                  >
                    Subscribe
                    <div className="button-container">
                      <Button
                        aria-label="Subscribe to newsleter"
                        type="submit"
                        variant="outline-light"
                      >
                        <span />
                      </Button>
                    </div>
                  </a>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Container>
      </section>
      <Footer />
    </section>
  );
};

export default Team;
