import React, { useState } from 'react';
import './BreadcrumbItem.css';

const BreadcrumbItem = ({ children, index, selected }) => {
    return (
        <span
            tabIndex={index}
        >
            <div className={selected === true ? "breadcrumb-item-selected" : "breadcrumb-item"}>
                <div className={selected === true ? "breadcrumb-item-breadcrumb-selected" : "breadcrumb-item-breadcrumb"}>
                    {children}
                </div>
            </div>
        </span>
    );
};

export default BreadcrumbItem;
