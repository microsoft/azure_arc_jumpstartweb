import React from 'react';
import './Blockquote.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = (props) => {
    // function to get string in props.children elements recursively
    const getChildrenText = (children) => {
        if (typeof children === 'string') {
            return children;
        }
        if (Array.isArray(children)) {
            return children.map(getChildrenText).join('');
        }
        if (children.props && children.props.children) {
            return getChildrenText(children.props.children);
        }
        return '';
    };
    // function to recursively find className that includes 'lang-', e.g. lang-shell, return shell
    const getLanguage = (children) => {
        if (children.props && children.props.className && children.props.className.includes('lang-')) {
            return children.props.className.split('lang-')[1];
        }
        if (Array.isArray(children)) {
            return children.map(getLanguage).join('');
        }
        if (children.props && children.props.children) {
            return getLanguage(children.props.children);
        }
        return '';
    };
    
    return (
        <SyntaxHighlighter language={getLanguage(props.children)} style={darcula}>
            {getChildrenText(props.children)}
        </SyntaxHighlighter>
    )
};
