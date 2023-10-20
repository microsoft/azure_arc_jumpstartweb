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

    // format breadcrumb string.  remove _ and capitalize first letter of each word
    const formatBreadcrumb = (breadcrumb) => {
        const breadcrumbArray = breadcrumb.split('_');
        const formattedBreadcrumb = breadcrumbArray.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        return formattedBreadcrumb.join(' ');
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
                                {formatBreadcrumb(breadcrumb)}
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
