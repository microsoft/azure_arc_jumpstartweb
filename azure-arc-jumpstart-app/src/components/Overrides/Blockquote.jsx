import React from 'react';
import './Blockquote.css';

// Override Blockquote
export const Blockquote = (props) => {
    return (
        <blockquote className="custom-blockquote">
            {props.children}
        </blockquote>
    )
};
