import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import headerImgs from "../../data/headerImgs";
import sliderlogo from "../../images/Home/header/slider-logo.png.webp";
import MainNav from "../Global/MainNav";
import { Row, Col } from "react-bootstrap";

const Header = ({ cartLength, cart }) => {
  Header.propTypes = {
    cart: PropTypes.array,
    cartLength: PropTypes.number.isRequired,
  };

  return (
    <section className="home_header bg-dark">
      <MainNav
        cartLength={cartLength}
        cart={cart}
      />
      <Carousel
        data-bs-theme="dark"
        className="home_header_carousel"
      >
        {headerImgs.map((img) => {
          return (
            <Carousel.Item
              key={img.id}
              interval={4500}
            >
              <Image
                fluid
                height="100%"
                width="100%"
                alt={img.title}
                src={img.img}
                className="carousel-img"
              />

              <div className="home_header_carousel-caption_container m-0 m-auto">
                <Carousel.Caption className="d-flex align-items-center justify-content-center flex-column ">
                  <Image
                    src={sliderlogo}
                    alt="logo"
                    className="px-3 home_header_carousel_logo animate__animated animate__fadeIn"
                  />
                  <Row className="home_header_carousel-cta-container justify-content-center gap-4">
                    <a
                      href="/PricingPlan"
                      className="mt-3 btn-dark animate__animated animate__fadeInUp animate__delay-1s"
                    >
                      View More
                      <div className="button-container">
                        <Button
                          aria-label="View More Pricing Plans"
                          variant="outline-dark"
                        >
                          <span />
                        </Button>
                      </div>
                    </a>

                    <a
                      href="/Checkout"
                      className="mt-3 btn-dark animate__animated animate__fadeInUp animate__delay-1s"
                    >
                      Checkout
                      <div className="button-container">
                        <Button
                          aria-label="Check Out"
                          variant="outline-dark"
                        >
                          <span />
                        </Button>
                      </div>
                    </a>
                  </Row>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Header;
