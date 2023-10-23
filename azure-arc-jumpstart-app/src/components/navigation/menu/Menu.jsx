import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

const Menu = ({ menuItems, selectedMenuItem, setSelectedMenuItem }) => {
    const handleOnClick = (menuItem) => {
        setSelectedMenuItem(selectedMenuItem !== menuItem ? menuItem : null);
    };

    return (
        <span
            style={{
                display: "flex",
            }}
        >
            {
                menuItems && menuItems.map((menuItem, index) => {
                    return (
                        <MenuItem
                            index={index + 1}
                            isSelected={selectedMenuItem === menuItem}
                            onClick={() => handleOnClick(menuItem)}
                        >
                            {menuItem.Title}
                        </MenuItem>
                    )
                })
            }
        </span>
    );
}

export default Menu;
