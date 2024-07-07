import { useState } from "react";
import _ from "lodash";

const Accents = ({ letters, large, title, color, bgColor }) => {
  const [docPosition, setDocPosition] = useState(window.scrollY);
  const [animationStart, setAnimationStart] = useState(false);

  const handleScreenPosition = () => {
    setDocPosition(Math.floor(window.scrollY));

    if (title === "news") {
      if (docPosition > 250) {
        setAnimationStart(true);
      }
    }
    if (title === "trainer") {
      if (docPosition > 1250) {
        setAnimationStart(true);
      }
    }
    if (title === "boost") {
      if (docPosition > 2500) {
        setAnimationStart(true);
      }
    }
    if (title === "shop") {
      if (docPosition > 3000) {
        setAnimationStart(true);
      }
    }
  };
  window.addEventListener("scroll", handleScreenPosition);

  return (
    <div className="title-container">
      <span
        style={
          large
            ? { top: "-105px", left: "86px" }
            : !large && bgColor === "dark"
            ? { top: "-50px", left: "-72px", WebkitTextStrokeColor: `${color}` } //css is taking precendence over this
            : { top: "-50px", left: "-72px", WebkitTextStrokeColor: "$dark" }
        }
        className="h1-secondary fw-bold title-container-characters"
      >
        {letters.map((letter) => {
          return (
            <span
              key={"key"}
              className="title-container-characters-mask" 
            >
              <span
                style={large ? { fontSize: "12rem" } : { fontSize: "6rem" }}
                className={
                  animationStart
                    ? "title-container-characters-mask-char animateTitle"
                    : "title-container-characters-mask-char"
                }
              >
                {_.toUpper(letter)}
              </span>
            </span>
          );
        })}
      </span>
    </div>
  );
};

export default Accents;
