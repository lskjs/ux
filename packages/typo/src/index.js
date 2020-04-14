/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Typo from './Typo';
import Blockquote from './Blockquote.styles';
import Hr from './Hr.styles';
import Code from './Code.styles';
import Pre from './Pre.styles';
import Article from './Article.styles';
import P from './P.styles';
import Heading from './Heading.styles';
import resetcss from './resetcss';

export const Br = () => <br />;
export const H1 = props => <Heading componentClass="h1" view="h1" {...props} />;
export const H2 = props => <Heading componentClass="h2" view="h2" {...props} />;
export const H3 = props => <Heading componentClass="h3" view="h3" {...props} />;
export const H4 = props => <Heading componentClass="h4" view="h4" {...props} />;
export const H5 = props => <Heading componentClass="h5" view="h5" {...props} />;
export const H6 = props => <Heading componentClass="h6" view="h6" {...props} />;

export { Typo as default, resetcss, Typo, Heading, P, Blockquote, Hr, Article, Code, Pre };
