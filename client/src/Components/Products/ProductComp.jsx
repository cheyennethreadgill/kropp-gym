import React from "react";
import { PropTypes } from "prop-types";
import Card from "react-bootstrap/Card";
import { Col, Button } from "react-bootstrap";

const ProductComp = ({ item, handleCartIncrease }) => {
  ProductComp.propTypes = {
    handleCartIncrease: PropTypes.func.isRequired,
  };

  const { name, price, img, category } = item;

  return (
    <Col className="pb-5 d-flex align-items-stretch" lg="3" md="6" sm="12">
      <Card>
        <div className="home_shop_inner-overlay_container ">
          <Card.Img
            
            alt={name}
            src={img}
            className="img-fluid"
            width="100%"
            height="100%"
          />
          <div className="home_shop_inner-overlay_container_body">
            <Card.Link>
              <Button
                variant="outline-primary"
                // -------------------------------------------------------------is this correct?
                name="Add to Cart"
                title="Add To Cart"
                id={`Add ${name} to Cart`}
                onClick={() => {
                  handleCartIncrease(item.id);
                }}
              >
                Add To Cart
              </Button>
            </Card.Link>
          </div>
        </div>
        <Card.Body>
          <Card.Text>{category}</Card.Text>
          <div className="d-flex  gap-5 justify-content-between">
            <Card.Title>
              <h4 className="fs-4 fw-bold">{name}</h4>
            </Card.Title>
            <p className="fs-5 fw-medium">${price}</p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductComp;
