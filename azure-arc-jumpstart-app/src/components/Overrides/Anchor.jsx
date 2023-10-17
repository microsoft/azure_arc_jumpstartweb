import React from 'react';
import './Anchor.css';

// Override Anchor
export const Anchor = (props) => {
    const { children, path, href, onClick } = props;
    const anchorPath = href.replace('https://azurearcjumpstart.io/', '').replace('.', '');
    return (
        <label title={anchorPath} className="custom-anchor" onClick={() => onClick(anchorPath)}>{children}</label>
    )
};
