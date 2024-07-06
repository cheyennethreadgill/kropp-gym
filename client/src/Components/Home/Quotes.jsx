import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import img from "../../images/Team/team-subscribe.jpg.webp";

const Quotes = () => {
  const url = "https://api.adviceslip.com/advice";

  const [error, setError] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function getQuote() {
      setLoading(loading);
      try {
        const incoming = await fetch(url);
        const info = await incoming.json();
        const quote = info.slip.advice;
        setData(quote);
        setLoading(false);
      } catch {
        setError("Error Try again later");
      }
    })();
  }, []);

  return (
    <section className="home_quotes ">
      <Row>
        <div
          className="quote bg-light text-dark d-flex flex-column justify-content-center align-items-center text-center py-5"
          style={{ height: "100%" }}
        >
          {error && <h1>{error}</h1>}

          <Container className="px-5 py-5">
            <p className="text-dark fw-bold">#GetInspired</p>
            {loading ? (
              <div className="loading"></div>
            ) : (
              <h4 className="fs-2 fw-normal text-dark animate__animated animate__fadeIn">{data}</h4>
            )}
          </Container>
        </div>
        {/* <Col
          className="p-0"
          lg="6">
          <Image
            src={img}
            width="100%"
          />
        </Col> */}
      </Row>
    </section>
  );
};

export default Quotes;
