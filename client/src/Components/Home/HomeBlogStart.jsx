import { Image, Row, Col, Container } from "react-bootstrap";
import Accents from "../Global/Accents";
import ThemeButton from "../Global/Buttons";
import HeaderAccent from "../Global/headerAccent";
import Sliders from "../Global/Sliders";

const HomeBlogStart = () => {
  return (
    <section className="home-blog-start text-light py-5">
      <Container className="py-5">
        <Row className="py-5 justify-content-between">
          <Col lg={4}>
            <Accents
              title={"boost"}
              letters={["b", "o", "o", "s", "t"]}
              large={false}
              bgColor={"dark"}
              color={"$light"}
            />
            <HeaderAccent
              width={"25"}
              title={"boost performance"}
            />

            <p className="fs-5 pb-3 text-light opacity-75 fw-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, eaque?
            </p>
            <ThemeButton
              link={"/blog-post"}
              variant={"outline-light"}
              viewMore={"Blogs"}
              btnStyle={"light"}
            />
          </Col>
          <Col lg={6}>
            <Sliders
              titles={[
                { name: "Specific Preparation", progressValue: 78 },
                { name: "CARDIO CONDITIONING", progressValue: 59 },
                { name: "NUTRITION SKILLS", progressValue: 68 },
              ]}
            />
          </Col>
        </Row>
      </Container>
      <div className="home-blog-start-img img fluid"></div>
    </section>
  );
};

export default HomeBlogStart;
