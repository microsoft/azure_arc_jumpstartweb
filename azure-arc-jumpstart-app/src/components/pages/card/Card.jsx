import "./Card.css";

const Card = ({
  mode = "light",
  state = "rest",
  ...props
}) => {
  return (
    <div className="card">
      <div className="card-frame-2018775810">
        <div className="card-frame-44">
          <div className="card-general-object-detection">
            <div className="card-frame-2018775799">
              <div className="card-frame-2018775798">
                <div className="card-frame-2018775832">
                  <div className="card-icon-container">
                    <div className="card-icon-content">
                      <div className="card-icon-mask">
                        <svg
                          className="card-virtual-network"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.8254 8.12038C7.03506 8.30009 7.05934 8.61574 6.87963 8.8254L4.15854 12L6.87963 15.1746C7.05934 15.3843 7.03506 15.6999 6.8254 15.8796C6.61573 16.0593 6.30008 16.0351 6.12037 15.8254L3.12037 12.3254C2.95988 12.1382 2.95988 11.8619 3.12037 11.6746L6.12037 8.17461C6.30008 7.96495 6.61573 7.94067 6.8254 8.12038ZM17.1204 15.1746C16.9407 15.3843 16.965 15.6999 17.1746 15.8796C17.3843 16.0593 17.6999 16.0351 17.8796 15.8254L20.8796 12.3254C21.0401 12.1382 21.0401 11.8619 20.8796 11.6746L17.8796 8.17461C17.6999 7.96495 17.3843 7.94067 17.1746 8.12038C16.965 8.30009 16.9407 8.61574 17.1204 8.8254L19.8415 12L17.1204 15.1746ZM8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
                            fill="#242424"
                          />
                        </svg>
                      </div>
                      <div className="card-vector-icon-fill"></div>
                    </div>
                  </div>
                  <div className="card-title">VMware vSphere </div>
                </div>
                <div className="card-description">
                  Manage VMware vSphere resources.
                  <br />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-frame-2018775809">
          <div className="card-view-scenario">View scenario </div>
          <svg
            className="card-chevron-close"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.60231 4.85964C6.39298 5.06897 6.39298 5.40837 6.60231 5.6177L11.4049 10.4203L6.60231 15.223C6.39298 15.4323 6.39298 15.7717 6.60231 15.981C6.81164 16.1903 7.15104 16.1903 7.36038 15.981L12.542 10.7993C12.7513 10.59 12.7513 10.2507 12.542 10.0413L7.36038 4.85964C7.15104 4.6503 6.81164 4.6503 6.60231 4.85964Z"
              fill="#0078D4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;

