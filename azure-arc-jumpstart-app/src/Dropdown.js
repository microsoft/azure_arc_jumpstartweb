import React, { useState } from 'react';

export function Dropdown({ items }) {
    const [isOpen, setIsOpen] = useState(false);

    function scrollToSection(href) {
        const elements = href.split('#');
        if(elements.length > 0) {
            const section = elements[1];
            const sectionElement = document.getElementById(section);
            sectionElement.scrollIntoView({ 
                behavior: 'smooth',
                // top: section.offsetTop - nav height
            });
        }
    }

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                Jump to section
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {items.map(item => (
                        <span onClick={()=> scrollToSection(item.href)} className="dropdown-item">
                            {item.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
