import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import NavBar from './components/navigation/NavBar';
import MenuDrawer from './components/navigation/menu/MenuDrawer';
import { MarkdownPage } from './MarkdownPage';
import Dropdown from './components/navigation/dropdown/Dropdown';
import { Breadcrumbs } from './components/navigation/breadcrumbs/Breadcrumbs';
import { extractRoutes } from './components/Utility';
import './App.css';
import sideMenuData from './data/side-menu.json';
import menuDrawerData from './data/menu-drawer.json';
import SideMenu from './components/navigation/sidemenu/SideMenu';

function App() {
    const [pathNode, setPathNode] = useState(sideMenuData);
    const [currentPathNode, setCurrentPathNode] = useState(sideMenuData.children[0]);
    const [dynamicRoutes, setDynamicRoutes] = useState([]);
    const [menuItems, setMenuItems] = useState(menuDrawerData);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [sections, setSections] = useState([]);
    const pageRef = useRef(null);

    useEffect(() => {
        setDynamicRoutes(extractRoutes(pathNode));
    }, []);

    const updateSections = () => {
        if (pageRef.current) {
            const elementsWithId = pageRef.current.querySelectorAll('[id]');
            const discoveredSections = Array.from(elementsWithId).map(el => ({
                id: el.id,
                name: el.innerText,
                href: `#${el.id}`
            }));
            setSections(discoveredSections);
        }
    }

    return (
        <BrowserRouter>
            <div ref={pageRef}>
                <Routes>
                    <Route path="/" element={() => {
                        setCurrentPathNode({});
                        return <Home updateSections={updateSections} />
                    }} />
                    {dynamicRoutes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<MarkdownPage path={route.path} updateSections={updateSections} />}
                        />
                    ))}
                </Routes>
                <SideMenu pathNode={currentPathNode}></SideMenu>
                <NavBar
                    menuItems={menuItems}
                    selectedMenuItem={selectedMenuItem}
                    setSelectedMenuItem={setSelectedMenuItem}
                />
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto',
                        justifyContent: 'space-between',
                        position: 'absolute',
                        top: '48px',
                        left: '0px',
                        right: '0px',
                        paddingLeft: '10px',
                        paddingRight: '10px'
                    }}
                >
                    <Breadcrumbs node={pathNode} />
                    <Dropdown items={sections} />
                </div>
                {
                    selectedMenuItem && (
                        <MenuDrawer menuItem={selectedMenuItem} />
                    )
                }
            </div>
        </BrowserRouter>
    );
}

export default App;
