import React from 'react';
import './Image.css';

// Override Image
export const Image = (props) => {
    let { path, src, width } = props;
    let imagePath = '';
    if (src.startsWith('.')) {
        src = src.substring(1);
        const baseUrl = 'https://raw.githubusercontent.com/Azure/arc_jumpstart_docs/main';
        imagePath = `${baseUrl}/docs/${path[0]}/${src}`;
    } else {
        imagePath = src;
    }

    return (
        <div align="center">
            <img src={imagePath} className="custom-image" width={width} title={""} />
        </div>
    )
};
