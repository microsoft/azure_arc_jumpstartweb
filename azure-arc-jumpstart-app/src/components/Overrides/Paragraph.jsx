import React from 'react';
import './Paragraph.css';

// Override Paragraph
export const Paragraph = (props) => {
    return (
        <p {...props} className="custom-paragraph" />
    )
};
