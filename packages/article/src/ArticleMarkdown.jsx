/* eslint-disable react/prop-types */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Article, H1, Heading, P, Hr, Blockquote, Code, Pre, Br } from '@lskjs/typo';
import Image from '@lskjs/image';
import Link from '@lskjs/link';
// import A from '@lskjs/ui/A';

export default ({ title, content }) => (
  <Article style={{ margin: '0 auto' }}>
    {title && <H1>{title}</H1>}
    <ReactMarkdown
      source={content}
      renderers={{
        thematicBreak: Hr,
        // link: A,
        link: Link,
        paragraph: P,
        break: Br,
        image: Image,
        blockquote: Blockquote,
        heading: ({ level, children }) => (
          <Heading componentClass={`h${level}`} view={`h${level}`}>
            {children}
          </Heading>
        ),
        inlineCode: Code,
        code: ({ children }) => (
          <Pre>
            <Code>{children}</Code>
          </Pre>
        ),
      }}
    />
  </Article>
);
