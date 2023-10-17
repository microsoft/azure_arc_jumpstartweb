import React, { useState } from "react";
import "./SideMenuItem.css";

export const SideMenuItem = ({ sideMenuItem, offset, handleFileFetch }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => {
            handleFileFetch(sideMenuItem.path);
            return !prev;
        });
    };

    return (
        <div style={{ paddingLeft: offset }}>
            <div className="side-menu-item" onClick={handleClick}>
                <div className="side-menu-item-menu-item">
                    <div className="side-menu-item-start-content">
                        {
                            sideMenuItem.children.length > 0 && (
                                open ? (
                                    <svg
                                        className="side-menu-item-regular-icon"
                                        width="16"
                                        height="21"
                                        viewBox="0 0 16 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3 11C3 13.7614 5.23858 16 8 16C10.7614 16 13 13.7614 13 11C13 8.23858 10.7614 6 8 6C5.23858 6 3 8.23858 3 11ZM8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11C14 14.3137 11.3137 17 8 17ZM10.8536 10.3536L8.35355 12.8536C8.15829 13.0488 7.84171 13.0488 7.64645 12.8536L5.14645 10.3536C4.95118 10.1583 4.95118 9.84171 5.14645 9.64645C5.34171 9.45118 5.65829 9.45118 5.85355 9.64645L8 11.7929L10.1464 9.64645C10.3417 9.45118 10.6583 9.45118 10.8536 9.64645C11.0488 9.84171 11.0488 10.1583 10.8536 10.3536Z"
                                            fill="#D6D6D6"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="side-menu-item-regular-icon"
                                        width="16"
                                        height="21"
                                        viewBox="0 0 16 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 16C10.7614 16 13 13.7614 13 11C13 8.23858 10.7614 6 8 6C5.23858 6 3 8.23858 3 11C3 13.7614 5.23858 16 8 16ZM14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM7.35355 8.14645L9.85355 10.6464C10.0488 10.8417 10.0488 11.1583 9.85355 11.3536L7.35355 13.8536C7.15829 14.0488 6.84171 14.0488 6.64645 13.8536C6.45118 13.6583 6.45118 13.3417 6.64645 13.1464L8.79289 11L6.64645 8.85355C6.45118 8.65829 6.45118 8.34171 6.64645 8.14645C6.84171 7.95118 7.15829 7.95118 7.35355 8.14645Z"
                                            fill="#D6D6D6"
                                        />
                                    </svg>
                                )
                            )
                        }
                        <div className="side-menu-item-content-frame">
                            <div className="side-menu-item-list-item-text">
                                {sideMenuItem.frontMatter.linkTitle  || sideMenuItem.frontMatter.title}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                open && sideMenuItem.hasOwnProperty('children') && sideMenuItem.children.filter((item) => {
                    return item.frontMatter && item.frontMatter.toc_hide !== true;
                }).map((item, index) => {
                    return (
                        <SideMenuItem sideMenuItem={item} key={index} offset={offset + 10} handleFileFetch={handleFileFetch}/>
                    )
                })
            }
        </div>
    );
};
