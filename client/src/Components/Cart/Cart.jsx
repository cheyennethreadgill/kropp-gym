import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import React from "react";
import Form from "react-bootstrap/Form";
import Footer from "../Global/Footer";
import MainNav from "../Global/MainNav";
import PageHeaders from "../Global/PageHeaders";

const Cart = ({
  removeItem,
  decreaseQty,
  increaseQty,
  grandTotal,
  cartLength,
  cart,
}) => {
  Cart.propTypes = {
    removeItem: PropTypes.func.isRequired,
    decreaseQty: PropTypes.func.isRequired,
    increaseQty: PropTypes.func.isRequired,
    grandTotal: PropTypes.number.isRequired,
    cartLength: PropTypes.number.isRequired,
    cart: PropTypes.array,
  };

  return (
    <section className="cart text-light">
      <MainNav
        darkMode={true}
        cartLength={cartLength}
      />
      <PageHeaders name="Cart" />

      <div className="bg-dark py-5">
        <Container className="py-5">
          <Row className={cart.length === 0 ? "d-none" : "d-flex"}>
            <Col
              lg="4"
              md="9"
              sm="8"
              xs="8"
            >
              <h5 className="fw-light">Product</h5>
            </Col>
            <Col
              lg="3"
              md="3"
              sm="4"
              xs="1"
            >
              <h5 className="fw-light">Price</h5>
            </Col>
            <Col className="d-none d-lg-block">
              <h5 className="fw-light">Quantity</h5>
            </Col>
            <Col
              lg="2"
              className="d-none d-lg-block"
            >
              <h5 className="fw-light">Total</h5>
            </Col>
          </Row>

          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <div key={item.id}>
                  <hr />

                  {/* ------------------------------------------------------------------NAME DELETE */}
                  <Row className="mb-4 align-items-center">
                    <Col
                      lg="4"
                      md="5"
                      sm="8"
                      xs="8"
                      className="d-flex gap-4 align-items-center"
                    >
                      <Button
                        variant="light"
                        className=" text-light fw-normal remove border-0 pe-3"
                        onClick={() => {
                          removeItem(item.id);
                        }}
                      >
                        x
                      </Button>
                      <Image
                        alt={item.name}
                        className="d-none d-lg-block"
                        src={item.img}
                        width={75}
                        height="100%"
                      />
                      <h5 className="fw-light">{item.name}</h5>
                    </Col>
                    {/*  --------------------------------------------------------------------PRICE */}
                    <Col
                      lg="2"
                      md="1"
                      sm="1"
                      xs="3"
                    >
                      ${item.price}
                    </Col>
                    {/*  --------------------------------------------------------------------INPUT */}

                    <Col
                      lg="4"
                      md="5"
                      className="d-flex gap-3"
                    >
                      <Button
                        onClick={() => {
                          decreaseQty(item);
                        }}
                        className="btn btn-light px-3 py-2 btn-light text-light add"
                      >
                        -
                      </Button>
                      <Form.Control
                        placeholder={item.quantity}
                        className="form-control-light"
                      />
                      <Button
                        onClick={() => {
                          increaseQty(item);
                        }}
                        className="btn btn-light px-3 py-2 btn-light text-light subtract"
                      >
                        +
                      </Button>
                    </Col>
                    {/* --------------------------------------------------------------------TOTAL */}
                    <Col
                      lg="2"
                      md="1"
                      className="d-none d-lg-block"
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </Col>
                  </Row>
                </div>
              );
            })
          ) : (
            <div className="d-flex flex-column  gap-3 justify-content-center align-items-center py-5 mt-5">
              <h5>Add items to your cart</h5>
              <Button
                variant=""
                href="/"
                className="btn-light pe-4"
              >
                Shop
              </Button>
            </div>
          )}

          {cartLength > 0 ? (
            <section>
              <h2 className="my-5 pt-5 fw-bold fs-2">Cart Totals</h2>
              <Row>
                <Col>
                  <h3>Total</h3>
                </Col>
                <Col lg="10">
                  <h5 className="fw-light">${grandTotal.toFixed(2)}</h5>
                </Col>
                <hr />
                <Col sm="12">
                  <Link
                    variant=""
                    to="/Checkout"
                    className="btn-light pe-3"
                  >
                    Proceed To Checkout
                  </Link>
                </Col>
              </Row>
            </section>
          ) : null}
        </Container>
      </div>

      <Footer />
    </section>
  );
};

export default Cart;
