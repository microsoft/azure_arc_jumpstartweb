import React from "react";
import './Searchbar.css';

const Searchbar = () => {
    return (
        <div className="search-bar">
            <input type="text" className="search-input"  placeholder="Search" tabIndex={4}/>
            <svg
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="11.3285"
                    cy="5.92131"
                    r="4.5"
                    transform="rotate(-6.01625 11.3285 5.92131)"
                    stroke="white"
                />
                <path
                    d="M2.22132 14.9253L7.66422 9.32402"
                    stroke="white"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};

export default Searchbar;
