import React from 'react';
import './Table.css';

// Override Table
export const Table = (props) => {
    return (
        <table {...props} className="custom-table" />
    )
};
