import React from 'react';
import './Bold.css';

// Override Bold
export const Bold = (props) => {
    return (
        <strong {...props} className="custom-bold" />
    )
};