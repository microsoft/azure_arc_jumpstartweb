import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import './BreadcrumbBar.css';

const BreadcrumbBar = ({path}) => {
    const breadcrumbs = path.length > 0 ? ['Home', ...path[0].split('\\')] : ['Home'];

    return (
        <div className="breadcrumb-bar">
            {
                breadcrumbs.map((breadcrumb, index) => {
                    return (
                        <React.Fragment key={index}>
                            <BreadcrumbItem
                                selected={index === breadcrumbs.length - 1}
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
