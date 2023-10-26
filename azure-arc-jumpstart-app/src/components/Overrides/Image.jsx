import React from 'react';
import './Image.css';

// Override Image
export const Image = (props) => {
    let { basePath, path, src } = props;
    let imagePath = '';
    if (!src.includes('http' || 'https')) {
        src = src.replace('./', '/');
        imagePath = `${basePath}${path}${src}`;
    } else {
        imagePath = src;
    }

    const covertSrcToAltText = (src) => {
        let altText = src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('.'));
        altText = altText.replace(/_/g, ' ');
        altText = altText.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
        return altText;
    };

    const altText = covertSrcToAltText(src);

    return (
        // <div className='custome-image-container'>
            <img src={imagePath} className="custom-image" alt={altText} title={altText} />
        // </div>
    )
};

