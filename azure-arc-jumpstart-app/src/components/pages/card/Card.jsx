import "./Card.css";

const Card = ({
  mode = "light",
  state = "rest",
  ...props
}) => {
  return (
    <div className="frame-2018775825">
      <div className="card-frame-2018775825-frame-2018775810">
        <div className="card-frame-2018775825-frame-44">
          <div className="card-frame-2018775825-general-object-detection">
            <div className="card-frame-2018775825-frame-2018775799">
              <div className="card-frame-2018775825-frame-2018775798">
                <div className="card-frame-2018775825-frame-2018775832">
                  <div className="card-frame-2018775825-icon-container">
                    <div className="card-frame-2018775825-icon-content">
                      <div className="card-frame-2018775825-icon-mask">
                        <svg
                          className="card-frame-2018775825-server"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.25 6C8.83579 6 8.5 6.33579 8.5 6.75C8.5 7.16421 8.83579 7.5 9.25 7.5H14.75C15.1642 7.5 15.5 7.16421 15.5 6.75C15.5 6.33579 15.1642 6 14.75 6H9.25ZM8.5 17.75C8.5 17.3358 8.83579 17 9.25 17H14.75C15.1642 17 15.5 17.3358 15.5 17.75C15.5 18.1642 15.1642 18.5 14.75 18.5H9.25C8.83579 18.5 8.5 18.1642 8.5 17.75ZM9.25 14C8.83579 14 8.5 14.3358 8.5 14.75C8.5 15.1642 8.83579 15.5 9.25 15.5H14.75C15.1642 15.5 15.5 15.1642 15.5 14.75C15.5 14.3358 15.1642 14 14.75 14H9.25ZM6 5C6 3.34315 7.34315 2 9 2H15C16.6569 2 18 3.34315 18 5V19C18 20.6569 16.6569 22 15 22H9C7.34315 22 6 20.6569 6 19V5ZM9 3.5C8.17157 3.5 7.5 4.17157 7.5 5V19C7.5 19.8284 8.17157 20.5 9 20.5H15C15.8284 20.5 16.5 19.8284 16.5 19V5C16.5 4.17157 15.8284 3.5 15 3.5H9Z"
                            fill="#242424"
                          />
                        </svg>
                      </div>
                      <div className="card-frame-2018775825-vector-icon-fill"></div>
                    </div>
                  </div>
                  <div className="card-frame-2018775825-title">Servers </div>
                </div>
                <div className="card-frame-2018775825-lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore">
                  Onboard various Windows and Linux server distributions.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-frame-2018775825-frame-2018775809">
          <div className="card-frame-2018775825-view-scenario">View scenario </div>
          <svg
            className="card-frame-2018775825-chevron-close"
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