import React from 'react';
import './NavBar.css';
import Menu from './menu/Menu';
import Logo from './logo/Logo';
import Searchbar from './searchbar/Searchbar';
import CoPilot from './buttons/CoPilot';
import GitHub from './buttons/GitHub';
import SignIn from './buttons/SignIn';

const NavBar =({selectedMenuItem, setSelectedMenuItem}) => {

    return (
        <span>
            <Logo />
            <Menu selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
            <Searchbar />
            <CoPilot />
            <GitHub />
            <SignIn />  
        </span>
    );
};

export default NavBar;
