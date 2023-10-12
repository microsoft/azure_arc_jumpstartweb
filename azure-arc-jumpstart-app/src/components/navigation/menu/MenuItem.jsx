import React from "react";
import "./MenuItem.css";

const MenuItem = ({ children, isSelected, onClick }) => {
    const STATE = { REST: 0, HOVER: 1, PRESSED: 2, SELECTED: 3, FOCUSED: 4 };
    const [state, setState] = React.useState(STATE.REST);

    return (
        <div className="menu-items2" onClick={onClick}>
            <div className="frame-599412">
                <div className="solutions2">{children}</div>
                {
                    isSelected ? (
                        <svg
                            className="chevron"
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.50484 5.66255C2.73265 5.43475 3.10199 5.43475 3.3298 5.66255L7.00065 9.33342L10.6715 5.66255C10.8993 5.43475 11.2687 5.43475 11.4965 5.66255C11.7243 5.89036 11.7243 6.2597 11.4965 6.48751L7.41313 10.5708C7.18533 10.7986 6.81597 10.7986 6.58818 10.5708L2.50484 6.48751C2.27703 6.2597 2.27703 5.89036 2.50484 5.66255Z"
                                fill="white"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="chevron"
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.4952 9.98784C11.2674 10.2156 10.898 10.2156 10.6702 9.98784L6.99935 6.31697L3.32849 9.98784C3.1007 10.2156 2.73133 10.2156 2.50354 9.98784C2.27575 9.76003 2.27575 9.39069 2.50354 9.16288L6.58687 5.07955C6.81467 4.85176 7.18403 4.85176 7.41182 5.07955L11.4952 9.16288C11.723 9.39069 11.723 9.76003 11.4952 9.98784Z"
                                fill="white"
                            />
                        </svg>
                    )
                }
            </div>
        </div>
    );
}

export default MenuItem;
