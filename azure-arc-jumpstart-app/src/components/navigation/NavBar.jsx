import React from 'react';
import Menu from './menu/Menu';
import Logo from './logo/Logo';
import Searchbar from './searchbar/Searchbar';
import GitHub from './buttons/GitHub';
import './NavBar.css';

const NavBar = ({ menuItems, selectedMenuItem, setSelectedMenuItem }) => {

    return (
        <span
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                margin: 0,
                padding: '1rem 1rem',
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    gap: 5
                }}
            >
                <Logo />
                <Menu
                    menuItems={menuItems}
                    selectedMenuItem={selectedMenuItem}
                    setSelectedMenuItem={setSelectedMenuItem}
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    gap: 10
                }}
            >
                <Searchbar />
                <GitHub />
            </div>
        </span>
    );
};

export default NavBar;
