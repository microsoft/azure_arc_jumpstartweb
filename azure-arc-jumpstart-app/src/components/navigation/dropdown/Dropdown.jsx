import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ items }) => {
    const [open, setOpen] = useState(false);

    function scrollToSection(href) {
        const elements = href.split('#');
        if (elements.length > 0) {
            const section = elements[1];
            const sectionElement = document.getElementById(section);
            sectionElement.scrollIntoView({
                behavior: 'smooth',
                // top: section.offsetTop - nav height
            });
        }
    }

    return (
        <>
            <div className="dropdown-dropdown-body">
                <div className="dropdown-dropdown-body2" style={{cursor: 'pointer'}} onClick={() => setOpen(!open)}>
                    <div className="dropdown-main-menu">
                        <div className="dropdown-frame-59941">
                            <div className="dropdown-community">Jump to section </div>
                            <svg
                                className="dropdown-chevron"
                                transform={open ? "rotate(180)" : "rotate(0)"}
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
                </div>
                {
                    open && (
                        <div className="dropdown-frame-2018775997">
                            {
                                items.map((item, index) => (
                                    <div className="dropdown-dropdown-item" onClick={() => scrollToSection(item.href)}>
                                        <div className="dropdown-list-container">
                                            <div className="dropdown-list-item-text">{item.name} </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Dropdown;

