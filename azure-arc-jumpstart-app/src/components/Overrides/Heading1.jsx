import React from 'react';
import './Heading1.css';

// Override Heading Elements
export const Heading1 = (props) => {
    return (
        <h1 {...props} className="custom-h1" />
    )
};
