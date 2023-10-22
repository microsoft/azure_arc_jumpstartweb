
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useRoutesMatch } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import './App.css';


// utitlity functions

function findNode(node, path) {
    if (node.path === path) {
        return node;
    }

    if (node.children && node.children.length > 0) {
        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            const found = findNode(child, path);
            if (found) {
                return found;
            }
        }
    }

    return null;
}

function parseNodeTitle(node) {
    if (node.frontMatter) {
        if (node.frontMatter.linkTitle) {
            return node.frontMatter.linkTitle;
        } else if (node.frontMatter.title) {
            return node.frontMatter.title;
        }
    }
    return node.path;
}

function showNode(node) {
    if (node.name === 'img') {
        return false;
    }
    if (node.hasOwnProperty('frontMatter')) {
        if (node.frontMatter.hasOwnProperty('linkTitle')) {
            return true;
        }
    }
    return false;
}

function extractRoutes(node, arr = []) {
    arr.push({
        path: node.path.replace(/\\/g, '/'),
        title: parseNodeTitle(node)
    });

    if (node.hasOwnProperty('children') && node.children.length > 0) {
        node.children.forEach(child => extractRoutes(child, arr));
    }
    return arr;
};

// components

function Home({ updateSections }) {
    useEffect(() => {
        updateSections();
    }, []);
    return <h2>Home Page</h2>;
}

function MarkdownPage({ path, updateSections }) {
    const viewBasePath = 'https://raw.githubusercontent.com/Azure/arc_jumpstart_docs/main/docs/';
    const editBasePath = 'https://github.com/Azure/arc_jumpstart_docs/blob/main/docs/';
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        async function getMarkdown() {
            const fullPath = `${viewBasePath}${path}/_index.md`;
            const response = await fetch(fullPath);
            const text = await response.text();
            setMarkdown((text));
        }

        getMarkdown();
    }, [path]);

    useEffect(() => {
        if (markdown) {
            updateSections();
        }
    }, [markdown]);

    return (
        <div
            style={{
                width: '100%',
            }}
        >
            <a style={{float: 'right'}} href={`${editBasePath}${path}/_index.md`} target="_blank">Edit this page</a>
            <br/>
            <Markdown>{markdown}</Markdown>
        </div>
    );
}

function Breadcrumbs(setSelectedNode) {
    const location = useLocation();

    // Split the path
    const pathnames = location.pathname.split('/').filter(x => x);

    // display pathname with Capitalized first letter
    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    return (
        <div>
            <Link to={''} onClick={() => setSelectedNode({})}>Home</Link>
            {pathnames.map((value, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                return (
                    <span key={index}>
                        {' > '}
                        <Link to={routeTo}>{capitalize(value)}</Link>
                    </span>
                );
            })}
        </div>
    );
}

function Dropdown({ items }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                Select a section
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {items.map(item => (
                        <a href={item.href} className="dropdown-item">
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

function TreeView({ node, level = 0 }) {
    const [isOpen, setIsOpen] = useState(false);

    const hasChildren = node.hasOwnProperty('children') && node.children.length > 0;
    const hide = !showNode(node);

    return (
        <ul style={{ marginLeft: level }}>
            <li key={node.path}>
                {
                    !hide && hasChildren ? (
                        <span onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? '-' : '+'} {parseNodeTitle(node)}
                        </span>
                    ) : !hide && (
                        <Link to={node.path}>{parseNodeTitle(node)}</Link>
                    )
                }

                {!hide && hasChildren && isOpen && (
                    <ul>
                        {node.children.map(child => (
                            <TreeView node={child} key={child.path} level={level + 1} />
                        ))}
                    </ul>
                )}
            </li>
        </ul>
    );
};

function App() {
    const [node, setNode] = useState({});
    const [selectedNode, setSelectedNode] = useState({});
    const [dynamicRoutes, setDynamicRoutes] = useState([]);
    const [sections, setSections] = useState([]);
    const pageRef = useRef(null);

    useEffect(() => {
        const fetchSideMenu = async () => {
            const response = await fetch('./side-menu.json');
            const data = await response.json();
            const extractedRoutes = extractRoutes(data);
            setDynamicRoutes(extractedRoutes);
            setSelectedNode((prev) => {
                setNode(data);
                return node;
            });
        };

        fetchSideMenu();
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
                    <Link to={''} onClick={() => setSelectedNode({})}>Home</Link>
                    <Link to={'azure_arc_jumpstart'} onClick={() => setSelectedNode(findNode(node, 'azure_arc_jumpstart'))}>Jumpstart Scenarios</Link>
                    <Link to={'azure_jumpstart_ag'} onClick={() => setSelectedNode(findNode(node, 'azure_jumpstart_ag'))}>Jumpstart Agora</Link>
                    <Link to={'azure_jumpstart_arcbox'} onClick={() => setSelectedNode(findNode(node, 'azure_jumpstart_arcbox'))}>Jumpstart ArcBox</Link>
                    <Link to={'azure_jumpstart_hcibox'} onClick={() => setSelectedNode(findNode(node, 'azure_jumpstart_hcibox'))}>Jumpstart HCIBox</Link>
                    <Link to={'release_notes'} onClick={() => setSelectedNode(findNode(node, 'release_notes'))}>Release Notes</Link>
                </div>
                <hr />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Breadcrumbs setSelectedNode={setSelectedNode} />
                    <Dropdown items={sections} />
                </div>
                <hr />
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '20% 80%',
                        justifyContent: 'space-between'
                    }}
                >
                    <TreeView node={selectedNode} />
                    <Routes>
                        <Route path="/" element={<Home updateSections={updateSections} />} />
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
