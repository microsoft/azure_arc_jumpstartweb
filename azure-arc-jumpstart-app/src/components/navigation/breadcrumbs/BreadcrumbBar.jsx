import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import './BreadcrumbBar.css';

const BreadcrumbBar = (props) => {
    const breadcrumbs = ['Breadcrumb1', 'Breadcrumb2', 'Breadcrumb3', 'Breadcrumb4', 'Breadcrumb5', 'Current']
    
    return (
        <div className="breadcrumb-bar">
            {
                breadcrumbs.map((breadcrumb, index) => {
                    return (
                        <React.Fragment key={index}>
                            <BreadcrumbItem
                                key={index}
                                current={index === breadcrumbs.length - 1}
                                index={index + 10}
                            >
                                {breadcrumb}
                            </BreadcrumbItem>
                            {
                                index !== breadcrumbs.length - 1 && (
                                    <span className="forwardSlash">/ </span>
                                )
                            }
                        </React.Fragment>
                    )
                })
            }
        </div>
    );
};

export default BreadcrumbBar;
