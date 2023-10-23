import "./CardVisual.css";

const CardVisual = ({ mode = "light", state = "rest", ...props }) => {
  return (
    <div className="card-visual">
      <div className="card-image">
        <img className="rectangle-34656627" src="rectangle-34656627.png" />
      </div>
      <div className="group-1010107219">
        <div className="rectangle-38708"></div>
      </div>
      <div className="frame-2018775824">
        <div className="card-visual-frame-2018775810">
          <div className="card-visual-frame-44">
            <div className="card-visual-general-object-detection">
              <div className="card-visual-frame-2018775799">
                <div className="card-visual-frame-2018775798">
                  <div className="industry">Manufacturing </div>
                  <div className="card-visual-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod...{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-2018775809">
            <div className="view-applications">View applications </div>
            <svg
              className="chevron-close"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.24684 4.65846C6.03751 4.8678 6.03751 5.2072 6.24684 5.41653L11.0494 10.2192L6.24684 15.0218C6.03751 15.2311 6.03751 15.5705 6.24684 15.7798C6.45617 15.9892 6.79558 15.9892 7.00491 15.7798L12.1865 10.5982C12.3959 10.3888 12.3959 10.0495 12.1865 9.84014L7.00491 4.65846C6.79558 4.44913 6.45617 4.44913 6.24684 4.65846Z"
                fill="#50E6FF"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVisual;

