import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useRoutesMatch } from 'react-router-dom';
import { Home } from './Home';
import { MarkdownPage } from './MarkdownPage';
import { TreeView } from './TreeView';
import { Dropdown } from './Dropdown';
import { Breadcrumbs } from './Breadcrumbs';
import { extractRoutes, findNode, parseNodeTitle, showNode } from './Utility';
import './App.css';
import sideMenuData from './data/side-menu.json';
import menuDrawerData from './data/menu-drawer.json';

function App() {
    const [sideMenu, setSideMenu] = useState(sideMenuData);
    const [menuDrawer, setMenuDrawer] = useState(menuDrawerData);
    const [node, setNode] = useState({});
    const [dynamicRoutes, setDynamicRoutes] = useState([]);
    const [sections, setSections] = useState([]);
    const pageRef = useRef(null);

    useEffect(() => {
        setDynamicRoutes( extractRoutes(sideMenu));
    }, []);

    const updateSections = () => {
        if (pageRef.current) {
            const elementsWithId = pageRef.current.querySelectorAll('[id]');
            const discoveredSections = Array.from(elementsWithId).map(el => ({
                id: el.id,
                name: el.getAttribute('data-name') || el.id,
                href: `#${el.id}`
            }));
            setSections(discoveredSections);
        }
    }

    return (
        <BrowserRouter>
            <div ref={pageRef}>
                <hr />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Link to={''} onClick={() => setNode({})}>Home</Link>
                    <Link to={'azure_arc_jumpstart'} onClick={() => setNode(findNode(sideMenu, 'azure_arc_jumpstart'))}>Jumpstart Scenarios</Link>
                    <Link to={'azure_jumpstart_ag'} onClick={() => setNode(findNode(sideMenu, 'azure_jumpstart_ag'))}>Jumpstart Agora</Link>
                    <Link to={'azure_jumpstart_arcbox'} onClick={() => setNode(findNode(sideMenu, 'azure_jumpstart_arcbox'))}>Jumpstart ArcBox</Link>
                    <Link to={'azure_jumpstart_hcibox'} onClick={() => setNode(findNode(sideMenu, 'azure_jumpstart_hcibox'))}>Jumpstart HCIBox</Link>
                    <Link to={'release_notes'} onClick={() => setNode(findNode(sideMenu, 'release_notes'))}>Release Notes</Link>
                </div>
                <hr />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Breadcrumbs setNode={setNode} />
                    <Dropdown items={sections} />
                </div>
                <hr />
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '20% 80%',
                        justifyContent: 'space-between',
                        height: '100vh',
                        overflow: 'auto',
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        }
                    }}
                >
                    <TreeView node={node} />
                    <Routes>
                        <Route path="/" element={() => {
                            setNode({});
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
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
