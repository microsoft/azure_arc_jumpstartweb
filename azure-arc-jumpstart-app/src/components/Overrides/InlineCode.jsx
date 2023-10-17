import React from 'react';
import './InlineCode.css';

// Override Code
export const InlineCode = (props) => {
    return (
        <code {...props} className="custom-inline-code" />
    )
};
