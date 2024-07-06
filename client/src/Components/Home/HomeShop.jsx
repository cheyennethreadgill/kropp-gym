import { Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductComp from "../Products/ProductComp";
import HeaderAccent from "../Global/headerAccent";
import Accents from "../Accents";


const HomeShop = ({ cart, items, handleCartIncrease }) => {
  HomeShop.propTypes = {
    handleCartIncrease: PropTypes.func.isRequired,
    cart: PropTypes.array,
    items: PropTypes.array.isRequired,
  };

  return (
    <section className="home_shop position-relative pb-5 ">
      <div className="d-flex justify-content-center pt-5">
        <div className="pt-5 mt-4">
          <HeaderAccent width="50" />
          <Accents
            word={"shop"}
            letters={["s", "h", "o", "p"]}
            large={true}
          />
          <h2 className="h1-secondary fw-bold pb-3 home-titles ">Training equipment</h2>
          <h4 className="text-center pt-3">Quality gear ready for your fitness journey</h4>
        </div>
      </div>

      <Container className="pt-5 pb-3">
        <Row>
          {items.map((item) => {
            return (
              <ProductComp
                item={item}
                key={item.id}
                cart={cart}
                handleCartIncrease={handleCartIncrease}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default HomeShop;
