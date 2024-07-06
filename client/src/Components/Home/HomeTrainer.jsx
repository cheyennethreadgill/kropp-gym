import { Row, Col, Container, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import trainer from "../../images/Home/trainer/home-trainer.png.webp";
import HeaderAccent from "../Global/headerAccent";
import Accents from "../Accents";

const HomeTrainer = () => {
  const [docPosition, setDocPosition] = useState(window.scrollY);
  const [animationStart, setAnimationStart] = useState(false);

  const handleScreenPosition = () => {
    console.log(docPosition);
    setDocPosition(Math.floor(window.scrollY));
    if (docPosition > 1280) {
      setAnimationStart(true);
    }
  };
  window.addEventListener("scroll", handleScreenPosition);
  return (
    <section className="home_trainer py-5 my-5">
      <Container>
        <Row>
          <Col
            lg="6"
            md="12"
            className="gap-5 mb-sm-5 pb-sm-5"
          >
            <Form.Label>
              <HeaderAccent width={"25"} />
              <Accents
                word={"trainer"}
                letters={["t", "r", "a", "i", "n", "e", "r"]}
                large={false}
              />
              <h2 className="home-titles fs-1 fw-bold text-uppercase mb-3 z-100 position-relative">Get a trainer</h2>
            </Form.Label>

            <ul className="fs-5 pb-3">
              <li>Lorem Ipsum Ret Git Erut Meait</li>
              <li>Lorem Ipsum Ret Git Erut Meait</li>
              <li>Lorem Ipsum Ret Git Erut Meait</li>
              <li>Lorem Ipsum Ret Git Erut Meait</li>
              <li>Lorem Ipsum Ret Git Erut Meait</li>
            </ul>

            <Link
              to="/Team"
              className="mt-3 btn-dark"
            >
              View More
              <div className="button-container">
                <Button
                  aria-label="View More Trainers"
                  variant="outline-dark"
                >
                  <span />
                </Button>
              </div>
            </Link>
          </Col>
          <Col
            lg="6"
            md="12"
            className="d-flex  justify-content-sm-end justify-content-md-center pt-5 mt-5 my-lg-0 py-lg-0"
          >
            <div className="position-relative">
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
              <Image
                alt="Trainer Sarah"
                fluid
                src={trainer}
                width="100%"
                height="100%"
              />
              <h2 className="fs-1 fw-bold ">
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
