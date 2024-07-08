import { useEffect, useRef, useState } from "react";
const Sliders = ({ titles, progressAnimationStart }) => {
  // const progressIncrement = useRef();

  // useEffect(() => {
  //   if (progressIncrement.current) {
  //     window.addEventListener("scroll", () => {
  //       setValue(progressIncrement.current.value);
  //       console.log(progressIncrementValue);
  //     });
  //   }
  // }, progressAnimationStart);

  // function countValue() {
  // }

  // progressAnimationStart && countValue;

  return (
    <section className="slider">
      {titles.map((title) => {
        const { name, progressValue } = title;
        const [progressIncrementValue, setValue] = useState();

        useEffect(() => {
          if (progressAnimationStart) {
            for (var counter = 0; counter < progressValue; counter++) {
              setValue(counter);
              console.log(counter);
            }
          }
        }, [progressAnimationStart]);

        return (
          <div
            key={name}
            className="mb-4"
          >
            <div className="slider-heading d-flex justify-content-between">
              <h4> {name} </h4>
              <h4 className="fw-semibold">{progressAnimationStart && progressIncrementValue}%</h4>
            </div>

            <progress
              className="slider-input"
              value={progressAnimationStart ? progressIncrementValue : 0}
              max={100}
              // ref={progressIncrement}
            ></progress>
          </div>
        );
      })}
    </section>
  );
};
export default Sliders;
