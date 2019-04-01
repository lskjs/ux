import React from 'react';
import Story from '../Story';
import Page from './Page';
// import repeat from 'lodash/repeat';

const createPage = ({ metas }) => ({ state: { metas, meta: metas[metas.length - 1] } });

const metas = [
  { title: 'The Site Name', show: false },
  { title: 'Cabinet', show: false },
  { title: 'Users' },
  { title: 'User Demonstration' },
  { title: 'Edit demo' },
];
const page = createPage({ metas });

const metas2 = [
  { title: 'The Site Name', show: false },
  { title: 'Cabinet', show: false },
  { title: 'Users' },
];

export default ({ storiesOf }) => {
  return storiesOf('Page', module)
    .add('default', () => (
      <Story>
        <Page>
          Default Page
        </Page>
      </Story>
    ))
    .add('Page.Header', () => (
      <Story>
        <Page page={page}>
          <Page.Header />
        </Page>
      </Story>
    ))
    .add('Page.Header 2', () => (
      <Story>
        <Page page={createPage({ metas: metas2 })}>
          <Page.Header />
        </Page>
      </Story>
    ))
    .add('Page.Title', () => (
      <Story>
        <Page page={page}>
          <Page.Title />
        </Page>
      </Story>
    ))
    .add('Page.Breadcrumbs', () => (
      <Story>
        <Page page={page}>
          <Page.Breadcrumbs />
        </Page>
      </Story>
    ))
    .add('Page.Header custom', () => (
      <Story>
        <Page page={page}>
          <Page.Header>
            <Page.Breadcrumbs omitLast />
            <Page.Title />
          </Page.Header>
        </Page>
      </Story>
    ))
    .add('Page', () => (
      <Story>
        <Page />
      </Story>
    ));
};
