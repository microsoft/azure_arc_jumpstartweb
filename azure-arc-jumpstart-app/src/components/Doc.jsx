// a react component that uses markdown-to-jsx to render markdown

import React, { useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { Heading1 } from './Overrides/Heading1';
import { Heading2 } from './Overrides/Heading2';
import { Heading3 } from './Overrides/Heading3';
import { Heading4 } from './Overrides/Heading4';
import { Heading5 } from './Overrides/Heading5';
import { Heading6 } from './Overrides/Heading6';
import { Paragraph } from './Overrides/Paragraph';
import { Anchor } from './Overrides/Anchor';
import { Image } from './Overrides/Image';
import { List } from './Overrides/List';
import { OrderedList } from './Overrides/OrderedList';
import { ListItem } from './Overrides/ListItem';
import { InlineCode } from './Overrides/InlineCode';
import { CodeBlock } from './Overrides/CodeBlock';
import { Blockquote } from './Overrides/Blockquote';
import { Table } from './Overrides/Table';
import { TableRow } from './Overrides/TableRow';
import { TableHeader } from './Overrides/TableHeader';
import { TableCell } from './Overrides/TableCell';
import { ThematicBreak } from './Overrides/ThematicBreak';
import { Bold } from './Overrides/Bold';
import { Italics } from './Overrides/Italics';

const Doc = ({ doc, path, handleFileFetch, gatherElementIds }) => {
    // doc = preprocessMarkdown(doc);
    useEffect(() => {
        if(path.length > 1) {
            const hash = path[1]; // Remove the '#'
            console.log(hash);
            const targetElement = document.getElementById(hash);
    
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        gatherElementIds();
    }, []);
    useEffect(() => {
        if(path.length > 1) {
            const hash = path[1]; // Remove the '#'
            const targetElement = document.getElementById(hash);
    
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        gatherElementIds();
    }, [doc, path]);

    return (
        <Markdown
            options={{
                overrides: {
                    a: (props) => <Anchor {...props} path={path} onClick={handleFileFetch} />,
                    blockquote: Blockquote,
                    code: InlineCode,
                    em: Italics,
                    h1: Heading1,
                    h2: Heading2,
                    h3: Heading3,
                    h4: Heading4,
                    h5: Heading5,
                    h6: Heading6,
                    hr: ThematicBreak,
                    img: (props) => <Image {...props} path={path} />,
                    li: ListItem,
                    ol: OrderedList,
                    p: Paragraph,
                    pre: CodeBlock,
                    strong: Bold,
                    table: Table,
                    td: TableCell,
                    th: TableHeader,
                    tr: TableRow,
                    ul: List
                }
            }}
        >
            {doc}
        </Markdown>
    );
};

const preprocessMarkdown = (markdown) => {
    return markdown.replace(/\[(.*?)\]\((https?:\/\/.*?)\)/g, (match, text, url) => {
        // Check if the URL is an absolute URL
        if (url.startsWith('http://') || url.startsWith('https://')) {
            // Extract the relative path from the absolute URL
            const relativePath = new URL(url).pathname;
            // Create a new Markdown link with the relative path
            return `[${text}](${relativePath})`;
        }
        // If the URL is already a relative path, leave it as is
        return match;
    });
};


export default Doc;