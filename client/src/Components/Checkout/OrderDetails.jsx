import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import MainNav from "../Global/MainNav";
import PageHeaders from "../Global/PageHeaders";
import Footer from "../Global/Footer";

let dateObj = new Date();
let year = dateObj.getFullYear();
let month = dateObj.getMonth();
let day = dateObj.getDay();

const OrderDetails = ({ cart, grandTotal }) => {
  const [dayA, setDay] = useState(0);
  let fullDate = `${year}-${month + 1}-${day}`;
  console.log(fullDate);

  return (
    <section className="bg-dark pb-5 mb-5 order">
      <Container>
        <Row>
          <Col lg="10">
            <section>
              <p className="pt-5 mt-5 text-light fw-bold">
                Thank you for your purchase!
              </p>
              <h1 className="mb-3  fw-semibold fs-3">Order Details</h1>

              <Row className="mb-5">
                <Col lg="5">
                  <h4 className="fw-normal">Total</h4>
                  <p className="fw-bold text-light">Order Date: {fullDate}</p>
                  <p className="fw-bold text-light">Purchased</p>
                </Col>
                <Col lg="4">
                  <h5 className="fw-normal fs-5">${grandTotal.toFixed(2)}</h5>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h5>Products</h5>
                </Col>
              </Row>

              {cart.map((item) => {
                const { id, name, quantity, price } = item;

                return (
                  <div key={id}>
                    <hr />
                    <Row className="mb-4 align-items-center">
                      <Col
                        lg="8"
                        className="d-flex gap-4 align-items-center"
                      >
                        <p className="fw-light fs-5 text-light">
                          {name}
                          <span className="fw-semibold">x {quantity}</span>
                        </p>
                      </Col>
                      <Col>${(price * quantity).toFixed(2)}</Col>
                    </Row>
                  </div>
                );
              })}

              <hr />
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrderDetails;
