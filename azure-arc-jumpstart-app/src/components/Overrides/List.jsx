import React from 'react';
import './List.css';

// Override List
export const List = (props) => {
    return (
        <ul {...props} className="custom-list" />
    )
};
