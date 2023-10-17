import React from 'react';
import './Blockquote.css';

// Override Blockquote
export const Blockquote = (props) => {
    return (
        <blockquote {...props} className="custom-blockquote" />
    )
};
