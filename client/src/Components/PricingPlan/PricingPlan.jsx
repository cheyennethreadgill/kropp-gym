import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Container, Card } from "react-bootstrap";
import PageHeadersInfo from "../Global/PageHeadersInfo";
import MainNav from "../Global/MainNav";
import Footer from "../Global/Footer";

const PricingPlan = ({ cartLength }) => {
  PricingPlan.propTypes = {
    cartLength: PropTypes.number.isRequired,
  };
  return (
    <section className="princing-plan">
      <MainNav
        darkMode={true}
        cartLength={cartLength}
        navColor="light"
      />
      <PageHeadersInfo
        name="Pricing Plans"
        // eslint-disable-next-line global-require
        img={require("../../images/PricingPlan/pricing-plan-header.jpg.webp")}
      />
      <section className="bg-secondary">
        <Container className="py-5">
          <Row className="text-center text-lg-left text-light py-5 gap-4 gap-lg-0">
            <Col
              lg="3"
              md="12"
              sm="12"
            >
              <Card className="bg-dark text-light rounded-5 p-4">
                <Card.Body>
                  <Card.Title className="text-light  mb-4 fs-4">Easy Program</Card.Title>
                  <Card.Text className="text-light">
                    <span className=" fs-1 fw-bold">$50</span> / month
                  </Card.Text>
                  <ul className="m-0 p-0 d-flex flex-column gap-3">
                    <li className="bg- text-light fw-light fs-5 list-unstyled text-light">
                      <i className="fs-5 fa-regular fa-square-check" /> Lorem ipsum dolor
                    </li>

                    <li className="text-light fw-light fs-5 list-unstyled text-light">
                      <i className="fs-5 fa-regular fa-square-check" /> Lorem ipsum dolor
                    </li>

                    <li className="text-light fw-light fs-5 list-unstyled text-light">
                      <i className="fs-5 fa-regular fa-square-check" /> Lorem ipsum dolor
                    </li>

                    <li className="text-light fw-light fs-5 list-unstyled text-light">
                      <i className="fs-5 fa-regular fa-square-check" /> Lorem ipsum dolor
                    </li>

                    <li className="text-light fw-light fs-5 list-unstyled text-light">
                      <i className="fs-5 fa-regular fa-square-check" /> Lorem ipsum dolor
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </section>
  );
};

export default PricingPlan;
