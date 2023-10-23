import React, { useEffect } from 'react';

// components
export function Home({ updateSections }) {
    useEffect(() => {
        updateSections();
    }, []);
    return <h2>Home Page</h2>;
}
