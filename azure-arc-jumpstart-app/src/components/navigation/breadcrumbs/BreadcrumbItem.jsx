import React, { useState } from 'react';
import './BreadcrumbItem.css';
import BreadcrumbItemStateHover from './breadcrumb-item-states/BreadcrumbItemStateHover';
import BreadcrumbItemStateFocused from './breadcrumb-item-states/BreadcrumbItemStateFocused';
import BreadcrumbItemStatePressed from './breadcrumb-item-states/BreadcrumbItemStatePressed';
import BreadcrumbItemStateSelected from './breadcrumb-item-states/BreadcrumbItemStateSelected';
import BreadcrumbItemStateRest from './breadcrumb-item-states/BreadcrumbItemStateRest';

const BreadcrumbItem = ({ children, index, current }) => {
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
    };

    return (
        <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={() => { }}
            tabIndex={index}
        >
            {
                current ? <BreadcrumbItemStateSelected>{children}</BreadcrumbItemStateSelected> :
                    (
                        isPressed ?                                 
                        <BreadcrumbItemStatePressed>{children}</BreadcrumbItemStatePressed> :
                            (
                                isHovered ?
                                <BreadcrumbItemStateHover>{children}</BreadcrumbItemStateHover> :
                                <BreadcrumbItemStateRest>{children}</BreadcrumbItemStateRest>
                            )
                    )
            }
        </span>
    );
};

export default BreadcrumbItem;
