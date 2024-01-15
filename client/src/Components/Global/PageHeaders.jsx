import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

const PageHeaders = ({ name }) => {
  PageHeaders.propTypes = {
    name: PropTypes.string.isRequired,
  };
  return (
    <section className="bg-secondary py-5 text-light">
      <Container>
        <h1 className="py-5 fs-5 fw-light">
          Home | <span className="fw-semibold"> {name} </span>
        </h1>
      </Container>
    </section>
  );
};

export default PageHeaders;
