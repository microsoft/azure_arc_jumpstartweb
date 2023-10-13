import React from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleOnClick = () => {
        setOpen(!open);
    };

    return (
        <div className="drop-down" onClick={handleOnClick}>
            <div className="drop-down-frame-59941">
                <div className="drop-down-community">Jump to section </div>
                <svg
                    className="drop-down-chevron"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.50484 4.83736C2.73265 4.60955 3.10199 4.60955 3.3298 4.83736L7.00065 8.50822L10.6715 4.83736C10.8993 4.60955 11.2687 4.60955 11.4965 4.83736C11.7243 5.06517 11.7243 5.43451 11.4965 5.66232L7.41313 9.74565C7.18533 9.97344 6.81597 9.97344 6.58818 9.74565L2.50484 5.66232C2.27703 5.43451 2.27703 5.06517 2.50484 4.83736Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Dropdown;
