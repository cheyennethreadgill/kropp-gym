import { Row, Col, Container, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import trainer from "../../images/Home/trainer/home-trainer.png.webp";

const HomeTrainer = () => {

  return (
    <section className="home_trainer py-5 my-5">
      <Container>
        <Row>
          <Col
            lg="6"
            md="12"
            className="gap-5 mb-sm-5 pb-sm-5">
            <span>
              <svg
                className="qodef-svg--title-decoration qodef-title-decoration"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(-268 -1379)">
                  <rect
                    width="40"
                    height="2"
                    transform="translate(268 1398)"
                    fill="currentColor"
                  />
                  <rect
                    width="40"
                    height="2"
                    transform="translate(289 1379) rotate(90)"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </span>
            <div className="title-container">
              <div className="title-container_characters">
                <span className="title-container_characters_char">T</span>
                <span className="title-container_characters_char">R</span>
                <span className="title-container_characters_char">A</span>
                <span className="title-container_characters_char">I</span>
                <span className="title-container_characters_char">N</span>
                <span className="title-container_characters_char">E</span>
                <span className="title-container_characters_char">R</span>
              </div>
              <h3 className="fs-1 fw-bold">Get a trainer</h3>
            </div>

            <ul className="fs-5 py-4">
              <li>Lorem Ipsum Ret Git Erut Meait</li>
              <li>Lorem Ipsum Ret Git Erut Meait</li>
              <li>Lorem Ipsum Ret Git Erut Meait</li>
              <li>Lorem Ipsum Ret Git Erut Meait</li>
              <li>Lorem Ipsum Ret Git Erut Meait</li>
            </ul>

            <Link
              to="/Team"
              className="mt-3 btn-dark">
              View More
              <div className="button-container">
                <Button
                  aria-label="View More Trainers"
                  variant="outline-dark">
                  <span />
                </Button>
              </div>
            </Link>
          </Col>
          <Col
            lg="6"
            md="12"
            className="d-flex  justify-content-sm-end justify-content-md-center pt-5 mt-5 my-lg-0 py-lg-0">
            <div className="position-relative">
              <svg
                className="position-absolute home_trainer_element"
                xmlns="http://www.w3.org/2000/svg"
                width="195.337"
                height="195.337"
                viewBox="0 0 195.337 195.337">
                <path
                  d="M40.269,0,.37,39.9H125.879L0,165.778,28.222,194,154.082,68.121V193.63L194,153.712V0Z"
                  transform="translate(194.5 194.837) rotate(180)"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
              <Image
                alt="Trainer Sarah"
                fluid
                src={trainer}
                width="100%"
                height="100%"
              />
              <h2 className="h1-secondary fw-bold ">
                Meet <br /> Sarah
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeTrainer;
