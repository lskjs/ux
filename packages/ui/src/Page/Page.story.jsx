import React from 'react';
import Story from '@lskjs/dev/Story';
import Page from './Page';
// import repeat from 'lodash/repeat';

export default ({ storiesOf, action }) => {
  return storiesOf('ui/Page', module)
    .add('default', () => (
      <Story>
        <Page>
          <Page.Header>
            <Page.Breadcrumbs
              page={{ show: { breadcrumbs: true } }}
              items={[
                {
                  title: 'Дом',
                  href: '/home',
                },
                {
                  title: 'Элемент',
                  href: '/home/element',
                },
              ]}
            />
            <Page.Title page={{ state: { meta: { title: 'Элемент' } } }} />
          </Page.Header>
          <Page.Tabs
            tabs={[
              {
                key: 'tab1',
                title: 'Таб 1',
              },
              {
                key: 'tab2',
                title: 'Таб 2',
              },
            ]}
            page={{ state: { meta: { tab: 'tab1' } } }}
          />
          <Page.Body>
            Default Page
          </Page.Body>
        </Page>
      </Story>
    ))
    .add('default 2', () => (
      <Story>
        <Page>
          Default Page 2
        </Page>
      </Story>
    ))
    .add('default 3', () => (
      <Story>
        <Page>
          Default Page 3
        </Page>
      </Story>
    ));
};
