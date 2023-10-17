import React from 'react';
import './CodeBlock.css';

export const CodeBlock = (props) => {
    return (
        <pre {...props} className="custom-code-block" />
    )
};
