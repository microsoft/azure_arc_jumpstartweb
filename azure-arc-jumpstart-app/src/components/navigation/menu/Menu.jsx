import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";
import MenuItems from "../../../models/MenuItems";

const Menu = ({ selectedMenuItem, setSelectedMenuItem }) => {
    const handleOnClick = (menuItem) => {
        setSelectedMenuItem(selectedMenuItem === menuItem ? null : menuItem);
    };

    return (
        <span
            style={{
                position: "absolute",
                top: 0,
                left: 324,
                display: "flex",
            }}
        >
            <MenuItem
                index={1}
                isSelected={selectedMenuItem === MenuItems.GETTING_STARTED}
                onClick={() => handleOnClick(MenuItems.GETTING_STARTED)}
            >
                {'Getting Started'}
            </MenuItem>
            <MenuItem
                index={2}
                isSelected={selectedMenuItem === MenuItems.SOLUTIONS}
                onClick={() => handleOnClick(MenuItems.SOLUTIONS)}
            >
                Solutions
            </MenuItem>
            <MenuItem
                index={3}
                isSelected={selectedMenuItem === MenuItems.COMMUNITY}
                onClick={() => handleOnClick(MenuItems.COMMUNITY)}
            >
                Community
            </MenuItem>
        </span>
    );
}

export default Menu;
