import React from 'react';
import './ListItem.css';

export const ListItem = (props) => {
    return (
        <li {...props} className="custom-list-item">
            <svg
                class="frame"
                width="12"
                height="25"
                viewBox="0 0 12 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4 14.0625C4 12.9579 4.89543 12.0625 6 12.0625C7.10455 12.0625 8 12.9579 8 14.0625C8 15.167 7.10455 16.0625 6 16.0625C4.89543 16.0625 4 15.167 4 14.0625Z"
                    fill="white"
                />
            </svg>
            {props.children}
        </li>
    )
};
