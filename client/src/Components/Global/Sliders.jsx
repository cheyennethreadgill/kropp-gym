const Sliders = ({ titles, name, progressValue }) => {
  return (
    <section className="slider">
      {titles.map((title) => {
        const { name, progressValue } = title;
        return (
          <div className="mb-4">
            <div className="slider-heading d-flex justify-content-between">
              <h4> {name} </h4>
              <h4 className="fw-semibold">{progressValue}%</h4>
            </div>

            <progress
              className="slider-input"
              value={progressValue}
              max={100}
            ></progress>
          </div>
        );
      })}
    </section>
  );
};
export default Sliders;
