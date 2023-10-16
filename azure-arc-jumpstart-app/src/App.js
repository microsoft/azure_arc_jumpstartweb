import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar';
import BreadcrumbBar from './components/navigation/breadcrumbs/BreadcrumbBar';
import MenuDrawer from './components/navigation/menu/MenuDrawer';
import Dropdown from './components/navigation/dropdown/Dropdown';
import { SideMenu } from './components/navigation/sidemenu/SideMenu';

const App = () => {  
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [sideMenuItems, setSideMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuDrawerData = async () => {
      const response = await fetch('./menu-drawer.json');
      const menuItems = await response.json();
      setMenuItems(menuItems);
    };

    const fetchSideMenuData = async () => {
      const response = await fetch('./side-menu.json');
      const data = await response.json();
      const sideMenuItems = data.hasOwnProperty('children') && data.children.length > 0 ? data.children : [];
      setSideMenuItems(sideMenuItems);
    };

    fetchMenuDrawerData();
    fetchSideMenuData();
  }, []);

  return (
    <>
      <NavBar
        menuItems={menuItems}
        selectedMenuItem={selectedMenuItem}
        setSelectedMenuItem={setSelectedMenuItem}
      />
      <span style={{ position: 'absolute', top: '96px', left: '0px' }}>
        {
          sideMenuItems && sideMenuItems.length > 0 && (
            <SideMenu 
              sideMenuItems={sideMenuItems}
            />
          )
        }
      </span>
      {
        selectedMenuItem ? (
          <MenuDrawer
            menuItem={selectedMenuItem}
          />
        ) : (
          <>
            <BreadcrumbBar />
            <span style={{ position: 'absolute', top: '48px', right: '71px' }}>
              <Dropdown>Jump to section</Dropdown>
            </span>
          </>
        )
      }
    </>
  );
}

export default App;
