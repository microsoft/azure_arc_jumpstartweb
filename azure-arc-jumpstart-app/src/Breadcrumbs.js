import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

export function Breadcrumbs(setNode) {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    return (
        <div className='breadcrumb-bar'>
            <Link to={''}>
                <div className={pathnames.length === 0 ? "breadcrumb-item-selected" : "breadcrumb-item"}>
                    <div className={pathnames.length === 0 ? "breadcrumb-item-breadcrumb-selected" : "breadcrumb-item-breadcrumb"}>
                        Home
                    </div>
                </div>
            </Link>
            {
                pathnames.length > 0 && (
                    <span className="forwardSlash">/ </span>
                )
            }
            {pathnames.map((value, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                return (
                    <>
                        <span key={index}>
                            <Link to={routeTo}>
                                <div className={pathnames.length === 0 ? "breadcrumb-item-selected" : "breadcrumb-item"}>
                                    <div className={pathnames.length === 0 ? "breadcrumb-item-breadcrumb-selected" : "breadcrumb-item-breadcrumb"}>
                                        {capitalize(value)}
                                    </div>
                                </div>
                            </Link>
                        </span>
                        {
                            index !== pathnames.length - 1 && (
                                <span className="forwardSlash">/ </span>
                            )
                        }
                    </>
                );
            })}
        </div>
    );
}
