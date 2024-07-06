import { Image } from "react-bootstrap";
const Video = () => {
  return (
    <a
      href="/contact"
      className="home-video"
    >
      <svg
        class="qodef-play-btn qodef--start"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        // style="--x: 528.006px; --y: 129.006px;"
      >
        <g transform="translate(-860 -3189)">
          <g>
            <g transform="translate(574 2579)">
              <text
                transform="translate(386 715)"
                fill="currentColor"
              >
                <tspan
                  x="-18.869"
                  y="0"
                >
                  PLAY
                </tspan>
              </text>
              <g
                transform="translate(286 610)"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="100"
                  stroke="none"
                ></circle>
                <circle
                  cx="100"
                  cy="100"
                  r="99.5"
                  fill="none"
                ></circle>
              </g>
            </g>
            <g transform="translate(992.393 3305.969) rotate(-135)">
              <path
                d="M0,0V26.27"
                transform="translate(9.382)"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
              ></path>
              <path
                d="M13.135,13.135H0V0"
                transform="translate(0 16.793) rotate(-45)"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
              ></path>
            </g>
          </g>
        </g>
      </svg>
      <Image
        fluid
        src={require("../../images/video-img-A-2048x746.jpg")}
      />
    </a>
  );
};

export default Video;
