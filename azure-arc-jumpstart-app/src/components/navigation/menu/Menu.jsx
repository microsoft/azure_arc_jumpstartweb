import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

const Menu = (props) => {
    const MENUITEMS = { GETTING_STARTED: 'Getting started', SOLUTIONS: 'Solutions', COMMUNITY: 'Community' };
    const [selectedMenuItem, setSelectedMenuItem] = React.useState(null);
    
    return (
        <>
            <MenuItem
                index={1}
                isSelected={selectedMenuItem === MENUITEMS.GETTING_STARTED}
                onClick={() => setSelectedMenuItem(selectedMenuItem === MENUITEMS.GETTING_STARTED ? null : MENUITEMS.GETTING_STARTED)}
            >
                {'Getting Started'}
            </MenuItem>
            <MenuItem
                index={2}
                isSelected={selectedMenuItem === MENUITEMS.SOLUTIONS}
                onClick={() => setSelectedMenuItem(selectedMenuItem === MENUITEMS.SOLUTIONS ? null : MENUITEMS.SOLUTIONS)}
            >
                Solutions
            </MenuItem>
            <MenuItem
                index={3}
                isSelected={selectedMenuItem === MENUITEMS.COMMUNITY}
                onClick={() => setSelectedMenuItem(selectedMenuItem === MENUITEMS.COMMUNITY ? null : MENUITEMS.COMMUNITY)}
            >
                Community
            </MenuItem>
        </>
    );
}

export default Menu;
