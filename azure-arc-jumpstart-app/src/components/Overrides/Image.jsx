import React from 'react';
import './Image.css';

// Override Image
export const Image = (props) => {
    let { path, src, width } = props;
    let imagePath = '';
    if(src.startsWith('.')) {
        src = src.substring(1);    
        imagePath = `./docs/${path[0]}/${src}`;
    } else {
        imagePath = src;
    }
    
    return (
        <img src={imagePath} className="custom-image" width={width}/>
    )
};
