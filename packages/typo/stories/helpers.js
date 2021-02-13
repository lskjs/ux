import { injectGlobal } from 'emotion';

import { Article } from '../src';
import resetcss from '../src/resetcss';

injectGlobal(resetcss());
// resetcss();
export const ArticleInfo = Article;
export const A = 'a';
export const Image = () => null;
export const Tag = () => null;



/*
## Свойство *align*
<Canvas>
  <Story name="align">
    <Typo view="title-1" align="left">Title-1</Typo>
    <Typo view="title-2" align="right">Title-2</Typo>
    <Typo view="title-1" align="center">Title-1</Typo>
    <Typo view="title-2" align="inherit">Title-2</Typo>
    <Typo view="title-1" align="justify">Title-1</Typo>
  </Story>
</Canvas>
*/