import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import headerImgs from "../../data/headerImgs";
import sliderlogo from "../../images/Home/header/slider-logo.png.webp";
import MainNav from "../Global/MainNav";
import { Row, Col } from "react-bootstrap";

const Header = ({ carouselImgMode, darkMode, cartLength, cart }) => {
  Header.propTypes = {
    cart: PropTypes.array,
    cartLength: PropTypes.number.isRequired,
  };

  // Controlled carousel
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="home_header bg-dark">
      {headerImgs[index].imgColor === "light" ? (
        <MainNav
          cartLength={cartLength}
          cart={cart}
          background="transparent"
          color="dark"
          darkMode={false}
          index={index}
        />
      ) : (
        <MainNav
          cartLength={cartLength}
          cart={cart}
          index={index}
          background="transparent"
          color="light"
          darkMode={false}
        />
      )}
      <Carousel
        fade
        data-bs-theme={headerImgs[index].imgColor === "dark" ? "light" : "dark"}
        className="home_header_carousel"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {headerImgs.map((img) => {
          return (
            <Carousel.Item
              key={img.id}
              interval={4100}
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
                    className="px-3 home_header_carousel_logo animate__animated animate__fadeIn animate__delay-1s"
                    style={{ filter: headerImgs[index].imgColor === "dark" ? "invert(1)" : "none" }}
                  />
                  <Row className="home_header_carousel-cta-container justify-content-center gap-4 mt-4">
                    <a
                      href="/PricingPlan"
                      className={
                        headerImgs[index].imgColor === "dark"
                          ? "mt-3 btn-light animate__animated animate__fadeInUp animate__delay-1s"
                          : "mt-3 btn-dark animate__animated animate__fadeInUp animate__delay-1s"
                      }
                    >
                      View More
                      <div className="button-container">
                        <Button
                          aria-label="View More Pricing Plans"
                          variant={headerImgs[index].imgColor === "dark" ? "outline-light" : "outline-dark"}
                        >
                          <span />
                        </Button>
                      </div>
                    </a>

                    <a
                      href="/Checkout"
                      className={
                        headerImgs[index].imgColor === "dark"
                          ? "mt-3 btn-light animate__animated animate__fadeInUp animate__delay-2s"
                          : "mt-3 btn-dark animate__animated animate__fadeInUp animate__delay-2s"
                      }
                    >
                      Checkout
                      <div className="button-container">
                        <Button
                          aria-label="Check Out"
                          variant={headerImgs[index].imgColor === "dark" ? "outline-light" : "outline-dark"}
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
