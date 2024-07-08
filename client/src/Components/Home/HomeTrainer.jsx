import { Row, Col, Container, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import trainer from "../../images/Home/trainer/home-trainer.png.webp";
import HeaderAccent from "../Global/headerAccent";
import Accents from "../Global/Accents";
import ThemeButton from "../Global/Buttons";

const HomeTrainer = () => {

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
              <Accents
                title={"trainer"}
                AccentKey={"trainer key"}
                letters={["t", "r", "a", "i", "n", "e", "r"]}
                large={false}
              />
              <HeaderAccent
                width={"25"}
                title={"get a trainer"}
              />
            </Form.Label>

            <ul className="fs-5 pb-3">
              <li>Lorem Ipsum Ret Git Erut Meait</li>
              <li>Lorem Ipsum Ret Git Erut Meait</li>
              <li>Lorem Ipsum Ret Git Erut Meait</li>
              <li>Lorem Ipsum Ret Git Erut Meait</li>
              <li>Lorem Ipsum Ret Git Erut Meait</li>
            </ul>

            <ThemeButton
              link={"/Team"}
              variant={"outline-dark"}
              viewMore={"Trainers"}
              btnStyle={"dark"}
            />
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
