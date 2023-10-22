
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useRoutesMatch } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import './App.css';


function Home({ updateSections }) {
    useEffect(() => {
        updateSections();
    }, []);
    return <h2>Home Page</h2>;
}

function MarkdownPage({ path, updateSections }) {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        async function getMarkdown() {
            const basePath = 'https://raw.githubusercontent.com/Azure/arc_jumpstart_docs/main/docs/';
            const fullPath = `${basePath}${path}/_index.md`;
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

    return <Markdown>{markdown}</Markdown>;
}

function Breadcrumbs() {
    const location = useLocation();

    // Split the path
    const pathnames = location.pathname.split('/').filter(x => x);

    // display pathname with Capitalized first letter
    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    return (
        <div>
            <Link to="/">Home</Link>
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

    const hasChildren = node.children && node.children.length > 0;

    const parseTitle = (node) => {
        if(node.frontMatter) {
            if(node.frontMatter.title) {
                return node.frontMatter.title;
            } else if(node.frontMatter.linkTitle) {
                return node.frontMatter.linkTitle;
            }
        }
        return node.path;
    }

    return (
        <ul style={{ marginLeft: level }}>
            <li key={node.path}>
                {hasChildren && (
                    <span onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? '-' : '+'}
                    </span>
                )}
                <Link to={node.path}>{parseTitle(node)}</Link>

                {hasChildren && isOpen && (
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
    const [dynamicRoutes, setDynamicRoutes] = useState([]);
    const [sections, setSections] = useState([]);
    const pageRef = useRef(null);

    const extractRoutes = (node, arr = []) => {
        if (!node.path.endsWith('\\img') && !node.path.endsWith('\\docs')) {
            arr.push({
                path: node.path.replace(/\\/g, '/'),
                title: node.path
            });
        }

        if (node.children && node.children.length > 0) {
            node.children.forEach(child => extractRoutes(child, arr));
        }

        return arr;
    };

    useEffect(() => {
        const fetchSideMenu = async () => {
            const response = await fetch('./side-menu.json');
            const data = await response.json();
            const extractedRoutes = extractRoutes(data);
            console.log(extractedRoutes);
            setDynamicRoutes(extractedRoutes);
            setNode(data);
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
                    <Breadcrumbs />
                    <Dropdown items={sections} />
                </div>

                <hr />

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '300px auto',
                    }}
                >
                    <TreeView node={node} />
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
