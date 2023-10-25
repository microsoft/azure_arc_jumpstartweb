import React from 'react';
import { Link } from 'react-router-dom';
import './Anchor.css';

// Override Anchor
export const Anchor = ({ children, path, href }) => {
    const externalLink = href.includes('http' || 'https');

    return externalLink ? (
        <a className='custom-anchor' href={href} target='_blank'>
            {children}
        </a>
    ) : (
        <Link to={href}>
            <a className='custom-anchor'>
                {children}
            </a>
        </Link>
    )
};
