import { useState } from "react";
import _ from "lodash";

const Accents = ({ letters, large, title, color, bgColor, AccentKey }) => {
  const [docPosition, setDocPosition] = useState(window.scrollY);
  const [animationStart, setAnimationStart] = useState(false);

  const handleScreenPosition = () => {
    setDocPosition(Math.floor(window.scrollY));
    const mobile = window.matchMedia("(max-width: 600px)");

    console.log(docPosition);

    if (mobile.matches) {
      console.log("mbile view");
      if (title === "news") {
        if (docPosition > 50) {
          setAnimationStart(true);
        }
      }
      if (title === "trainer") {
        if (docPosition > 2727) {
          setAnimationStart(true);
        }
      }
      if (title === "boost") {
        if (docPosition > 4100) {
          setAnimationStart(true);
        }
      }
      if (title === "shop") {
        if (docPosition > 5450) {
          setAnimationStart(true);
        }
      }
    }
    if (!mobile.matches) {
      console.log("desktop view");
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
    }
  };
  window.addEventListener("scroll", handleScreenPosition);

  const key = Math.random();

  return (
    <div
      key="accents"
      className="title-container"
    >
      <span
        key={"accents-container-characters"}
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
