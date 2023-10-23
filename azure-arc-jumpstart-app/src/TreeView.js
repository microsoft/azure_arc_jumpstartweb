import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { showNode } from './Utility';
import { parseNodeTitle } from './Utility';

export function TreeView({ node, level = 0 }) {
    const [isOpen, setIsOpen] = useState(false);

    const hasChildren = node.hasOwnProperty('children') && node.children.length > 0;
    const hide = !showNode(node);

    return (
        <ul style={{ marginLeft: level }}>
            <li key={node.path}>
                {!hide && hasChildren ? (
                    <span onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? '-' : '+'} {parseNodeTitle(node)}
                    </span>
                ) : !hide && (
                    <Link to={node.path}>{parseNodeTitle(node)}</Link>
                )}

                {!hide && hasChildren && isOpen && (
                    <ul>
                        <ul>
                            <li>
                                <span style={{ marginLeft: level + 1 }}>
                                    <Link to={node.path}>Overview</Link>
                                </span>
                            </li>
                        </ul>
                        {node.children.map(child => (
                            <TreeView node={child} key={child.path} level={level + 1} />
                        ))}
                    </ul>
                )}
            </li>
        </ul>
    );
}
