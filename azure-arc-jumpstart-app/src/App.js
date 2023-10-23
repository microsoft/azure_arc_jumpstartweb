import React, { useState, useEffect, useRef } from 'react';
import SideMenu from './components/navigation/sidemenu/SideMenu';
import './App.css';
import pathNodeData from './data/side-menu.json';

function App() {
    const [pathNode, setPathNode] = useState(pathNodeData);
    const [currentPathNode, setCurrentPathNode] = useState(pathNodeData.children[0]);

    return (
        <SideMenu pathNode={currentPathNode}></SideMenu>
    );
}

export default App;
