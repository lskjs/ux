/* eslint-disable react/prop-types */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Article, H1, Heading, P, Hr, Blockquote, Code, Pre } from '@lskjs/ui/Typo';
import Image from '@lskjs/ui/Image';
import A from '@lskjs/ui/A';
import Link from '@lskjs/link';

const Br = () => <br />;

export default ({ title, content }) => (
  <Article style={{ margin: '0 auto' }}>
    {title && <H1>{title}</H1>}
    <ReactMarkdown
      source={content}
      renderers={{
        thematicBreak: Hr,
        link: A,
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
