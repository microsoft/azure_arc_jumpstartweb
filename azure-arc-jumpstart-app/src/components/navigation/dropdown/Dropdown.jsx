import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ bookmarks, children, handleFileFetch, markdownFilePath }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleOnClick = (label) => {
        setSelected((prev) => {
            handleFileFetch(`${markdownFilePath}#${label}`);
            return selected === label ? null : label;
        });
    };

    const Section = ({ children, onClick }) => {
        return (
            <div className={selected === children ? "dropdownbody-item-selected": "dropdownbody-item"} onClick={onClick}>
                <div className="dropdownbody-list-container">
                    <div className="dropdownbody-list-item-text">
                        {children}
                    </div>
                </div>
            </div>
        );
    };

    const SubSection = ({ children, onClick }) => {  
        return (
            <div className={selected === children ? "dropdownbody-item-selected": "dropdownbody-item"} onClick={onClick}>
                <div className="dropdownbody-list-container">
                    <div className="dropdownbody-checkmark-control"></div>
                    <div className="dropdownbody-list-item-text2">
                        {children}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
        <div className="dropdown" onClick={() => setOpen(!open)}>
            <div className={open ? "dropdown-main-menu-selected" : "dropdown-main-menu"}>
                <div className="dropdown-frame-59941">
                    <div className="dropdown-community">
                        {children}
                    </div>
                    {
                        open ? (
                            <svg
                                className="dropdown-chevron"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.4952 9.16264C11.2674 9.39045 10.898 9.39045 10.6702 9.16264L6.99935 5.49178L3.32849 9.16264C3.1007 9.39045 2.73133 9.39045 2.50354 9.16264C2.27575 8.93483 2.27575 8.56549 2.50354 8.33768L6.58687 4.25435C6.81467 4.02656 7.18403 4.02656 7.41182 4.25435L11.4952 8.33768C11.723 8.56549 11.723 8.93483 11.4952 9.16264Z"
                                    fill="white"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="dropodown-chevron"
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
                        )
                    }
                </div>
            </div>
        </div>
        {
                open && (
                    <div className="dropdownbody-frame-2018775997">
                        {/* <Section onClick={() => handleOnClick("Section 1")}>Section 1</Section> */}
                        {
                            bookmarks.map((bookmark) => (
                                <SubSection onClick={() => handleOnClick(bookmark)}>{bookmark}</SubSection>
                            ))
                        }
                    </div>
                )
            }
        </>
    );
};

export default Dropdown;

