import React from 'react';
import Menu from './menu/Menu';
import Logo from './logo/Logo';
import Searchbar from './searchbar/Searchbar';
import ReleaseNotes from './buttons/ReleaseNotes';
import GitHub from './buttons/GitHub';
import './NavBar.css';

const NavBar = ({ menuItems, selectedMenuItem, setSelectedMenuItem }) => {

    return (
        <span
            style={{
                background: '#0a0a0a',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                margin: 0,
                paddingLeft: 10,
                paddingRight: 30,
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 2
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
                    gap: 10,
                    alignItems: 'center'
                }}
            >
                <Searchbar />
                <ReleaseNotes />
                <GitHub />
            </div>
        </span>
    );
};

export default NavBar;
