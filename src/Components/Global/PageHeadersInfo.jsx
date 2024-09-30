import React from "react";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";
import HeaderAccent from "./headerAccent";

const PageHeadersInfo = ({ name, img }) => {
  PageHeadersInfo.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  };
  return (
    <section className=" text-light jumbotron headers-info-jumbotron">
      <div className="img-container">
        <Image alt={name} className="headers-info-jumbotron_img" src={img} />

        <h1 className="h1-secondary py-5 fw-bold lead text-light headers-info-jumbotron_heading">
          <HeaderAccent />
          {name}
        </h1>
      </div>
    </section>
  );
};

export default PageHeadersInfo;
