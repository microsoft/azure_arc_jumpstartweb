import React from 'react';
import './Anchor.css';

// Override Anchor
export const Anchor = (props) => {
    const { children, path, href, onClick } = props;
    const anchorPath = href.replace('https://azurearcjumpstart.io/', '').replace('.', '');
    return (
        <label
            title={anchorPath}
            className="custom-anchor"
            onClick={() => {
                // if anchorPath is pointing to an external website, open in new tab
                if (href.includes('http' || 'https')) {
                    window.open(href, '_blank');
                    return;
                } else {
                    onClick(anchorPath)
                }
            }}
        >
            {children}
        </label>
    )
};
