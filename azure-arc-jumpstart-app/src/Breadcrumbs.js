import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Breadcrumbs(setNode) {
    const location = useLocation();

    // Split the path
    const pathnames = location.pathname.split('/').filter(x => x);

    // display pathname with Capitalized first letter
    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    return (
        <div>
            <Link to={''} onClick={() => setNode({})}>Home</Link>
            {pathnames.map((value, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                return (
                    <span key={index}>
                        {' > '}
                        <Link to={routeTo}>{capitalize(value)}</Link>
                    </span>
                );
            })}
        </div>
    );
}
