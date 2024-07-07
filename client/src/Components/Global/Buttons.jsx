import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import _ from "lodash";

const ThemeButton = ({
  link,
  variant,
  viewMore,
  btnStyle,
  carousel,
  headerImgs,
  index,
  btnDuplicate,
  btnTiming,
  text,
}) => {
  return (
    <>
      {carousel ? (
        <a
          href={link}
          className={
            (headerImgs[index].imgColor === "dark" &&
              btnDuplicate &&
              `mt-3 btn-light animate__animated animate__fadeInUp animate__delay-${btnTiming + 1}`) ||
            (headerImgs[index].imgColor === "light" &&
              btnDuplicate &&
              `mt-3 btn-dark animate__animated animate__fadeInUp animate__delay-${btnTiming + 1}`) ||
            (headerImgs[index].imgColor === "dark" &&
              "mt-3 btn-light animate__animated animate__fadeInUp animate__delay-1s") ||
            (headerImgs[index].imgColor === "light" &&
              "mt-3 btn-dark animate__animated animate__fadeInUp animate__delay-1s")
          }
        >
          {text}
          <div className="button-container">
            <Button
              aria-label="View More Pricing Plans"
              variant={headerImgs[index].imgColor === "dark" ? "outline-light" : "outline-dark"}
            >
              <span />
            </Button>
          </div>
        </a>
      ) : (
        <Link
          to={link}
          className={`mt-3 btn-${btnStyle}`}
        >
          View More
          <div className="button-container">
            <Button
              aria-label={`View More ${viewMore}`}
              variant={variant}
            >
              <span />
            </Button>
          </div>
        </Link>
      )}
    </>
  );
};
export default ThemeButton;
