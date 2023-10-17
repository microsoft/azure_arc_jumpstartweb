import React, { useState } from "react";
import "./SideMenuHeader.css";
import { SideMenuItem } from "./SideMenuItem";

export const SideMenuHeader = ({ sideMenuItem, handleFileFetch }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => {
            handleFileFetch(sideMenuItem.path);
            return !prev;
        });
    };

    return (
        <div className="section">
            <div className="section-header" onClick={handleClick}>
                <div className="section-header-menu-section-header">
                    <div className="section-header-left-lockup">
                        <div className="section-header-header-text">
                            {sideMenuItem.frontMatter.linkTitle || sideMenuItem.frontMatter.title}
                        </div>
                    </div>
                </div>
                <div className="section-header-frame-2018775855">
                    {
                        sideMenuItem.children.length > 0 && (open ? (
                            <svg
                                className="section-header-chevron"
                                width="7"
                                height="4"
                                viewBox="0 0 7 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 4L3.5 -3.0598e-07" stroke="#D6D6D6" strokeLinecap="round" />
                                <path d="M3.5 0L0 4" stroke="#D6D6D6" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg
                                className="section-headec-hevron"
                                width="7"
                                height="4"
                                viewBox="0 0 7 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0L3.5 4" stroke="#D6D6D6" strokeLinecap="round" />
                                <path d="M3.5 4L7 0" stroke="#D6D6D6" strokeLinecap="round" />
                            </svg>
                        )
                        )
                    }

                </div>
            </div>
            {
                open && sideMenuItem.hasOwnProperty('children') && (
                    <>
                        {
                            sideMenuItem.children.filter((item) => {
                                return item.frontMatter && item.frontMatter.toc_hide !== true;
                            }).map((item, index) => {
                                return (
                                    <SideMenuItem sideMenuItem={item} key={index} offset={10} handleFileFetch={handleFileFetch}/>
                                )
                            })
                        }
                    </>
                )
            }
        </div>
    );
};
