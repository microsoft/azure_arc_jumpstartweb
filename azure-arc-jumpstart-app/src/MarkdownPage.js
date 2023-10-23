import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { Heading1 } from './components/Overrides//Heading1';
import { Heading2 } from './components/Overrides//Heading2';
import { Heading3 } from './components/Overrides//Heading3';
import { Heading4 } from './components/Overrides//Heading4';
import { Heading5 } from './components/Overrides//Heading5';
import { Heading6 } from './components/Overrides//Heading6';
import { Paragraph } from './components/Overrides//Paragraph';
import { Anchor } from './components/Overrides//Anchor';
import { Image } from './components/Overrides//Image';
import { List } from './components/Overrides//List';
import { OrderedList } from './components/Overrides//OrderedList';
import { ListItem } from './components/Overrides//ListItem';
import { InlineCode } from './components/Overrides//InlineCode';
import { CodeBlock } from './components/Overrides//CodeBlock';
import { Blockquote } from './components/Overrides//Blockquote';
import { Table } from './components/Overrides//Table';
import { TableRow } from './components/Overrides//TableRow';
import { TableHeader } from './components/Overrides//TableHeader';
import { TableCell } from './components/Overrides//TableCell';
import { ThematicBreak } from './components/Overrides//ThematicBreak';
import { Bold } from './components/Overrides//Bold';
import { Italics } from './components/Overrides//Italics';

export function MarkdownPage({ path, updateSections }) {
    const viewBasePath = 'https://raw.githubusercontent.com/Azure/arc_jumpstart_docs/main/docs/';
    const editBasePath = 'https://github.com/Azure/arc_jumpstart_docs/blob/main/docs/';
    const [markdown, setMarkdown] = useState('');

    const removeFrontmatter = (text) => {
        return text.replace(/---[\s\S]*?---/, '');
    };

    useEffect(() => {
        async function getMarkdown() {
            const fullPath = `${viewBasePath}${path}/_index.md`;
            const response = await fetch(fullPath);
            const text = await response.text();
            setMarkdown(removeFrontmatter(text));
        }

        getMarkdown();
    }, [path]);

    useEffect(() => {
        if (markdown) {
            updateSections();
        }
    }, [markdown]);

    return (
        <div
            style={{
                width: '100%',
            }}
        >
            <a style={{ float: 'right' }} href={`${editBasePath}${path}/_index.md`} target="_blank">Edit this page</a>
            <br />
            <Markdown
                options={{
                    overrides: {
                        a: (props) => <Anchor {...props} path={path} />,
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
                        img: (props) => <Image {...props} basePath={viewBasePath} path={path} />,
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
                {markdown}
            </Markdown>
        </div>
    );
}
