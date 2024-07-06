import { useState } from "react";
import _ from "lodash";

const Accents = ({ letters, large, word }) => {
  const [docPosition, setDocPosition] = useState(window.scrollY);
  const [animationStart, setAnimationStart] = useState(false);

  const handleScreenPosition = () => {
    setDocPosition(Math.floor(window.scrollY));

    if (word === "news") {
      if (docPosition > 250) {
        setAnimationStart(true);
      }
    }
    if (word === "trainer") {
      if (docPosition > 1250) {
        setAnimationStart(true);
      }
    }
    if (word === "shop") {
      if (docPosition > 2200) {
        setAnimationStart(true);
      }
    }
  };
  window.addEventListener("scroll", handleScreenPosition);

  return (
    <div className="title-container">
      <span
        style={large ? { top: "-105px", left: "86px" } : { top: "-50px", left: "-72px" }}
        className="h1-secondary fw-bold title-container-characters"
      >
        {letters.map((letter) => {
          return (
            <span className="title-container-characters-mask">
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
