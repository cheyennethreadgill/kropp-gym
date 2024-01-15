import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import Image from "react-bootstrap/Image";
import image1 from "../../images/Home/routine/home-routine-1.png.webp";
import image2 from "../../images/Home/routine/home-routine-2.png.webp";
import image3 from "../../images/Home/routine/home-routine-3.png.webp";
import image4 from "../../images/Home/routine/home-routine-4.png.webp";
import image5 from "../../images/Home/routine/home-routine-5png.png.webp";

const Routines = () => {
  return (
    <section className="home_routines bg-light position-relative pb-5 ">
      <Container className="pt-5 pb-3">
        <Row className="pt-5">
          <Col className="d-flex flex-column align-items-center gap-4 m-0 py-5 px-0 justify-content-center">
            <Image
              alt="Picture of Abs"
              src={image1}
              width="100%"
              height="100%"
              className="home_routines_img"
            />
            <h3 className="fs-2 fw-bold">Abs</h3>
          </Col>
          <Col className="d-flex flex-column align-items-center gap-4 m-0 py-5 px-0 justify-content-center">
            <Image
              alt="Picture of a back"
              src={image2}
              width="100%"
              height="100%"
              className="home_routines_img"
            />
            <h3 className="fs-2 fw-bold">back</h3>
          </Col>
          <Col className="d-flex flex-column align-items-center gap-4 m-0 py-5 px-0 justify-content-center">
            <Image
              alt="Picture of arms"
              src={image3}
              width="100%"
              height="100%"
              className="home_routines_img"
            />
            <h3 className="fs-2 fw-bold">arms</h3>
          </Col>
          <Col className="d-flex flex-column align-items-center gap-4 m-0 py-5 px-0 justify-content-center">
            <Image
              alt="Picture of legs"
              src={image4}
              width="100%"
              height="100%"
              className="home_routines_img"
            />
            <h3 className="fs-2 fw-bold">legs</h3>
          </Col>
          <Col className="d-flex flex-column align-items-center gap-4 m-0 py-5 px-0 justify-content-center">
            <Image
              alt="Picture of shoulders"
              src={image5}
              width="100%"
              height="100%"
              className="home_routines_img"
            />
            <h3 className="fs-2 fw-bold">shoulders</h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Routines;
