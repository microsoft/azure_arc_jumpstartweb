import React, { useState } from 'react';

export function Dropdown({ items }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                Jump to section
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {items.map(item => (
                        <a href={item.href} className="dropdown-item">
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
