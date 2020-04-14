import React from 'react';
import Story from '@lskjs/dev/Story';
import Typo from './Typo';

export default ({ storiesOf }) => {
  storiesOf('typo/Typo', module)
    .add('view', () => (
      <Story>
        <Typo view="h1">h1. Lego Starter Kit heading</Typo>
        <Typo view="h2">h2. Lego Starter Kit heading</Typo>
        <Typo view="h3">h3. Lego Starter Kit heading</Typo>
        <Typo view="h4">h4. Lego Starter Kit heading</Typo>
        <Typo view="h5">h6. Lego Starter Kit heading</Typo>
        <Typo view="h6">h6. Lego Starter Kit heading</Typo>


        <hr />
        <Typo view="h2">h2</Typo>
        <Typo view="h3">h3</Typo>
        <Typo view="h4">h4</Typo>
        <hr />
        <Typo view="title-1">Title-1</Typo>
        <Typo view="title-2">Title-2</Typo>
        <Typo view="title-3">Title-3</Typo>
        <Typo view="title-4">Title-4</Typo>
        <Typo view="title-5">Title-5</Typo>
        <hr />
        <Typo view="heading-1">Heading-1</Typo>
        <Typo view="heading-2">Heading-2</Typo>
        <hr />
        <Typo view="huge-1">Huge-1</Typo>
        <Typo view="huge-2">Huge-2</Typo>
        <Typo view="huge-3">Huge-3</Typo>
        <Typo view="huge-9">Huge-9</Typo>
        <Typo view="huge-10">Huge-10</Typo>
      </Story>
    ))
    .add('Pre', () => (
      <Story>
        <Typo view="title-1" pre="line">Title-1</Typo>
        <Typo view="title-2" pre="wrap">Title-2</Typo>
      </Story>
    ))
    .add('Align', () => (
      <Story>
        <Typo view="title-1" align="left">Title-1</Typo>
        <Typo view="title-2" align="right">Title-2</Typo>
        <Typo view="title-1" align="center">Title-1</Typo>
        <Typo view="title-2" align="inherit">Title-2</Typo>
        <Typo view="title-1" align="justify">Title-1</Typo>
      </Story>
    ))
    .add('Paragraph', () => (
      <Story>
        <Typo view="title-1" paragraph>Title-1</Typo>
        <Typo view="title-2" paragraph={50}>Title-2</Typo>
      </Story>
    ))
    .add('Color', () => (
      <Story>
        <Typo view="title-1" color="red">Title-1</Typo>
      </Story>
    ))
    .add('Text overflow', () => (
      <Story>
        <div style={{ width: '120px', border: '1px solid red' }}>
          <Typo textOverflow view="title-1">Title-1 Title-1 Title-1 Title-1 Title-1 </Typo>
        </div>
      </Story>
    ));
};
