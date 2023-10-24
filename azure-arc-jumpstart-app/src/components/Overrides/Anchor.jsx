import React from 'react';
import { Link } from 'react-router-dom';
import './Anchor.css';

// Override Anchor
export const Anchor = ({ children, path, href }) => {
    const externalLink = href.includes('http' || 'https');

    return externalLink ? (
        <a 
            style={{
                textDecoration: 'underline',
                color: 'white'
            }} 
            href={href}
            target='_blank'
        >
            {children}
        </a>
    ) : (
        <Link to={path}>{children}</Link>
    )
};
