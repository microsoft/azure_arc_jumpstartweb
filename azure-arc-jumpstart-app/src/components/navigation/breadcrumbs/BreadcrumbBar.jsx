import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import './BreadcrumbBar.css';

const BreadcrumbBar = ({ path, handleFileFetch }) => {
    const breadcrumbs = path.length > 0 ? ['Home', ...path[0].replace(/\//g, '\\').split('\\').filter((p) => p !== '')] : ['Home'];
    const handleFileFetchClick = (breadcrumb) => {
        const breadcrumbIndex = breadcrumbs.indexOf(breadcrumb);
        const newPath = breadcrumbs.slice(1, breadcrumbIndex+1);
        const newPathString = newPath.join('\\');
        handleFileFetch(newPathString);
    };

    return (
        <div className="breadcrumb-bar">
            {
                breadcrumbs.map((breadcrumb, index) => {
                    return (
                        <React.Fragment key={index}>
                            <BreadcrumbItem
                                selected={index === breadcrumbs.length - 1}
                                index={index + 10}
                                handleFileFetch={() => handleFileFetchClick(breadcrumb)}
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
