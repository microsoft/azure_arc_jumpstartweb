import React, { useState } from 'react';
import './BreadcrumbItem.css';
import BreadcrumbItemStateHover from './breadcrumb-item-states/BreadcrumbItemStateHover';
import BreadcrumbItemStateFocused from './breadcrumb-item-states/BreadcrumbItemStateFocused';
import BreadcrumbItemStatePressed from './breadcrumb-item-states/BreadcrumbItemStatePressed';
import BreadcrumbItemStateSelected from './breadcrumb-item-states/BreadcrumbItemStateSelected';
import BreadcrumbItemStateRest from './breadcrumb-item-states/BreadcrumbItemStateRest';

const BreadcrumbItem = ({ children, index, selected }) => {
    const [isHovered, setHovered] = useState(false);
    const [isPressed, setPressed] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleMouseDown = () => {
        setPressed(true);
    };

    const handleMouseUp = () => {
        setPressed(false);
        // handle click
    };

    return (
        <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            tabIndex={index}
        >
            <div className={selected === true ? "breadcrumb-item-selected" : "breadcrumb-item"}>
                <div className={selected === true ? "breadcrumb-item-breadcrumb-selected" : "breadcrumb-item-breadcrumb"}>
                    {children}
                </div>
            </div>
        </span>
    );
};

export default BreadcrumbItem;
