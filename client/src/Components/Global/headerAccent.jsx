import React from "react";

const HeaderAccent = ({ width, title, large }) => {
  return (
    <>
      <span className="position-absolute ">
        <svg
          className="qodef-svg--title-decoration qodef-title-decoration"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={width}
          viewBox="0 0 40 40"
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform="translate(-268 -1379)">
            <rect
              width="40"
              height="2"
              transform="translate(268 1398)"
              fill="currentColor"
            />
            <rect
              width="40"
              height="2"
              transform="translate(289 1379) rotate(90)"
              fill="currentColor"
            />
          </g>
        </svg>
      </span>
      <h2
        className={
          large
            ? "h1-secondary fw-bold pb-3 home-titles "
            : " fs-1 fw-bold text-uppercase mb-5 z-100 position-relative home-titles"
        }
      >
        {title}
      </h2>
    </>
  );
};

export default HeaderAccent;
