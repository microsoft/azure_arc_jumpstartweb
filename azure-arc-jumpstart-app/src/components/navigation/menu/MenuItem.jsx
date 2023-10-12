import React, { useState } from "react";
import "./MenuItem.css";
import MenuItemStateRest from "./menu-item-states/MenuItemStateRest";
import MenuItemStateHover from "./menu-item-states/MenuItemStateHover";
import MenuItemStatePressed from "./menu-item-states/MenuItemStatePressed";
import MenuItemStateSelected from "./menu-item-states/MenuItemStateSelected";

const MenuItem = ({ children, index, isSelected, onClick }) => {
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
        onClick();
    };

    return (
        <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            tabIndex={index}
        >
            {
                isSelected ?
                    <MenuItemStateSelected index={index}>
                        {children}
                    </MenuItemStateSelected> : (
                        isPressed ?
                            <MenuItemStatePressed index={index}>
                                {children}
                            </MenuItemStatePressed> : (
                                isHovered ?
                                    <MenuItemStateHover index={index}>
                                        {children}
                                    </MenuItemStateHover> :
                                    <MenuItemStateRest index={index}>
                                        {children}
                                    </MenuItemStateRest>
                            )
                    )
            }
        </span>
    );
}

export default MenuItem;
