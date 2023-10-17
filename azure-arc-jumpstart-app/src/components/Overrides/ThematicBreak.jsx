import React from 'react';
import './ThematicBreak.css';

// Override Thematic Break
export const ThematicBreak = (props) => {
    return (
        <hr {...props} className="custom-thematic-break" />
    )
};
