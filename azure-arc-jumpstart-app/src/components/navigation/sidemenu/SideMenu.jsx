import "./SideMenu.css";

export const SideMenu = ({ sideMenuItems }) => {
  const arrow = true;
  return (
    <div className="side-menu">
      <div className="side-menu2">
        <div className="menu-teams">
          <div className="popover-teams">
            <div className="swap-content">
              <div className="frame-2018775853">
                {
                  sideMenuItems && sideMenuItems.map((item, index) => {
                    return (

                      <div className="section">
                        <div className="section-header">
                          <div className="menu-section-header">
                            <div className="left-lockup">
                              <div className="header-text">
                                {item.frontMatter.linkTitle}
                              </div>
                            </div>
                          </div>
                          <div className="frame-2018775855">
                            <svg
                              className="chevron"
                              width="7"
                              height="4"
                              viewBox="0 0 7 4"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0L3.5 4"
                                stroke="#D6D6D6"
                                strokeLinecap="round"
                              />
                              <path
                                d="M3.5 4L7 0"
                                stroke="#D6D6D6"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      {arrow && (
        <>
          <div className="footer">
            <div className="frame-2018775961">
              <div className="rectangle-34656628"></div>
              <svg
                className="chevron12"
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.2071 4.29289C20.5976 4.68342 20.5976 5.31658 20.2071 5.70711L13.9142 12L20.2071 18.2929C20.5976 18.6834 20.5976 19.3166 20.2071 19.7071C19.8166 20.0976 19.1834 20.0976 18.7929 19.7071L11.7929 12.7071C11.4024 12.3166 11.4024 11.6834 11.7929 11.2929L18.7929 4.29289C19.1834 3.90237 19.8166 3.90237 20.2071 4.29289Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </>
      )}
      <div className="frame-20187759612">
        <div className="frame-2018775959">
          <div className="frame-2018775857">
            <div className="input-teams">
              <div className="input">
                <div className="contents">
                  <div className="icon-text-stack">
                    <div className="text">
                      <div className="search">Search </div>
                    </div>
                  </div>
                </div>
                <div className="thin-underline"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
